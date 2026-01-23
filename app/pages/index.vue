<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero2 :page />
    <div class="border-b border-primary-500/30">
      <UContainer class="sm:border-x border-daniel-500/30">
        <UPageSection :ui="{
          container: ' grid sm:grid-cols-2 lg:grid-cols-2'
        }">
          <div class="flex justify-center">
            <NuxtImg src="/images/Snickare Person.jpg" fit="cover"
              class=" size-32 lg:size-46 mt-2 ring ring-primary-500/30 " />
          </div>
          <LandingAbout :page />
        </UPageSection>
        <UPageSection :ui="{
          container: '!pt-0 '
        }">
          <LandingWorkExperience :page />
        </UPageSection>
      </UContainer>
    </div>
    <LandingProjekt :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
