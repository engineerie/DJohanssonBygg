<script setup lang="ts">
const { data: page } = await useAsyncData('projekt-page', () => {
  return queryCollection('pages').path('/projekt').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
const { data: posts } = await useAsyncData('projekts', () =>
  queryCollection('projekt').order('date', 'DESC').all()
)
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'projekts posts not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UContainer class="sm:border-x border-daniel-500/30 px-0 sm:-px-6 lg:-px-8 background">
    <UPage v-if="page">
      <UContainer>
        <UPageHero :title="page.title" :description="page.description" :links="page.links" :ui="{
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start',
        }" />
      </UContainer>
      <UPageSection :ui="{
        container: '!pt-0 !px-0'
      }">
        <UBlogPosts orientation="vertical">
          <Motion v-for="(post, index) in posts" :key="index" :initial="{ opacity: 0, transform: 'translateY(10px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }" :transition="{ delay: 0.2 * index }"
            :in-view-options="{ once: true }">
            <div class="border-y border-daniel-500/30 px-6 lg:px-12 overflow-hidden ">
              <UBlogPost variant="naked" orientation="horizontal" :to="post.path" v-bind="post" :ui="{
                root: ' md:grid md:grid-cols-2 group overflow-visible transition-all duration-500/30 bg-white dark:bg-neutral-900 border-x sm:border-none-y border-daniel-500/30 rounded-none',
                image:
                  'group-hover/blog-post:scale-105 ring-default object-center ',
                header:
                  index % 2 === 0
                    ? 'shadow-none overflow-visible'
                    : 'shadow-none overflow-visible'
              }" />
            </div>
          </Motion>
        </UBlogPosts>
      </UPageSection>
    </UPage>
  </UContainer>
</template>
