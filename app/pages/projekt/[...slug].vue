<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui/utils/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('projekt').path(route.path).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('projekt', route.path, {
    fields: ['description']
  })
)

// const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
// const projektNavigation = computed(() => navigation.value.find(item => item.path === '/projekt')?.children || [])

// const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(projektNavigation?.value, page.value?.path)).map(({ icon, ...link }) => link))

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

const carouselItems = computed<string[]>(() => {
  const p: any = page.value || {}
  const arr = Array.isArray(p.images) && p.images.length ? p.images : (p.image ? [p.image] : [])
  return (arr as unknown[]).filter((s): s is string => typeof s === 'string' && s.length > 0)
})

// Ensure OG image picks the first carousel image if present
if (page.value) {
  const ogUrl = (Array.isArray((page.value as any).images) && (page.value as any).images[0]) || page.value.image
  if (ogUrl) defineOgImage({ url: ogUrl })
}

// const articleLink = computed(() => `${window?.location}`)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>

  <div class="sm:border-x border-daniel-700/30 min-h-screen relative pt-6">

    <UPage v-if="page">
      <!-- <UButton to="/projekt" class="text-sm rounded-none flex items-center gap-1 absolute left-4 top-3.5"
        color="neutral" variant="outline">
        <UIcon name="lucide:chevron-left" />
        Projekt
      </UButton> -->
      <div class="flex flex-col gap-3 my-12">
        <div class="flex text-xs text-muted items-center justify-center gap-2">
          <span v-if="page.date">
            {{ formatDate(page.date) }}
          </span>
          <!-- <span v-if="page.date && page.minRead">
              -
            </span> -->
          <!-- <span v-if="page.minRead">
              {{ page.minRead }} MIN READ
            </span> -->
        </div>
        <div class="border-y border-primary-700/30 mb-4">


          <UContainer class="relative  border-daniel-700/30 sm:px-24 lg:px-40">
            <UCarousel v-if="carouselItems.length" v-slot="{ item }" :items="carouselItems" dots arrows :ui="{
              prev: 'rounded-none',
              next: 'rounded-none',
              dots: '-bottom-4',
              dot: 'w-6 h-1',
            }" class="w-full border-x border-daniel-700/30">
              <NuxtImg :src="item" :alt="page.title" width="800" height="450"
                class="rounded-none w-full object-cover object-center" />
            </UCarousel>
          </UContainer>
        </div>
        <h1 class="text-3xl sm:text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
          {{ page.title }}
        </h1>
        <p class="text-muted text-center max-w-2xl mx-auto">
          {{ page.description }}
        </p>
        <!-- <div class="flex items-center justify-center gap-2 mt-2">
            <UUser orientation="vertical" color="neutral" variant="outline"
              class="justify-center items-center text-center" v-bind="page.author" />
          </div> -->
      </div>
      <!-- <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer v-if="page.body" :value="page" />

          <div class="flex items-center justify-end gap-2 text-sm text-muted">
            <UButton size="sm" variant="link" color="neutral" label="Copy link"
              @click="copyToClipboard(articleLink, 'Article link copied to clipboard')" />
          </div>
          <UContentSurround :surround />
        </UPageBody> -->
      <UContentSurround :surround
        :ui="{ link: 'rounded-none ', root: 'p-6 ', linkLeading: 'rounded-none bg-transparent' }" />
    </UPage>
  </div>


</template>
