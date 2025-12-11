<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: posts } = await useAsyncData('index-projekts', () =>
  queryCollection('projekt').order('date', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'projekts posts not found', fatal: true })
}
</script>

<template>
  <div class="border-b border-primary-500/30">
    <UContainer class="sm:border-x border-daniel-500/30">

      <UPageSection :title="page.projekt.title" :description="page.projekt.description"
        class="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 background" :ui="{
          container: '!py-16 sm:gap-6 lg:gap-8 ',
          title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
          description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
        }">
        <template #description>
          <UButton to="/projekt" size="md" color="neutral" variant="outline" label="Visa alla projekt"
            class="rounded-none">
            <!-- <template #trailing>
          <UIcon name="i-lucide-arrow-right"
            class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
        </template> -->
          </UButton>
        </template>
        <UBlogPosts orientation="horizontal" class="gap-4">

          <UBlogPost v-for="(post, index) in posts" :key="index" orientation="vertical" variant="outline" v-bind="post"
            :to="post.path" :ui="{
              root: 'group rounded-none py-0',
              body: 'lg:p-4 lg:pt-2',
              description: 'hidden',
              header: '',
              date: 'hidden',
              image: 'object-center'
            }">

            <!-- <template #footer>
          <UButton size="xs" variant="link" class="px-0 gap-0" label="Till projekt">
            <template #trailing>
              <UIcon name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </template>
</UButton>
</template> -->
          </UBlogPost>
        </UBlogPosts>
      </UPageSection>
    </UContainer>
  </div>
</template>