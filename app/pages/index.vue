<script setup lang="ts">
import { defaultSeoDescription, defaultSeoTitle, siteUrl } from '~/utils/seo'

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

const title = page.value?.seo.title || defaultSeoTitle
const description = page.value?.seo.description || page.value?.description || defaultSeoDescription

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const faqEntities =
  page.value?.faq?.categories?.flatMap((category) =>
    category.questions.map((question) => ({
      '@type': 'Question',
      name: question.label,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.content.replace(/\*\*/g, '').trim()
      }
    }))
  ) || []

useHead({
  script: [
    {
      key: 'home-faq-schema',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntities
      })
    },
    {
      key: 'home-webpage-schema',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: siteUrl
      })
    }
  ]
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero2 :page />
    <div class="border-b border-primary-500/30">
      <UContainer class="sm:border-x border-daniel-500/30">
        <UPageSection :ui="{
          container: ' grid sm:grid-cols-1 lg:grid-cols-1 items-center'
        }">
          <!-- <div class="flex justify-center items-center">
            <NuxtImg src="/images/Daniel.png" fit="cover" class=" size-32 lg:size-72 mt-2 ring ring-primary-500/30 " />
          </div> -->
          <LandingAbout :page />
        </UPageSection>
        <UPageSection :ui="{
          container: '!pt-0 '
        }">
          <LandingWorkExperience :page />
        </UPageSection>
      </UContainer>
    </div>
    <!-- <LandingProjekt :page />
    <LandingTestimonials :page /> -->
    <LandingFAQ :page />
    <!-- <LandingKontakt /> -->
  </UPage>
</template>
