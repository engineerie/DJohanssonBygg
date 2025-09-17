<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <div></div>
  <UContainer class="sm:border-x border-daniel-700/30">
    <UMain v-if="page">

      <UPageHero :title="page.title" :description="page.description" orientation="horizontal" :ui="{
        container: 'lg:flex sm:flex-row lg:items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }">
        <template #description>
          <div class="space-y-1 text-left w-full">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-phone-20-solid" class="text-daniel-500" />
              <a href="tel:+46350135947" class="hover:underline">+46 73 072 85 31</a>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-envelope-20-solid" class="text-daniel-500" />
              <a href="mailto:info@djohanssonbygg.se" class="hover:underline">info@djohanssonbygg.se</a>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-map-pin-20-solid" class="text-daniel-500" />
              <span>Vedige, Halland</span>
            </div>
          </div>
        </template>
        <!-- <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      /> -->
        <div class="flex justify-center w-full">
          <NuxtImg src="/images/Snickare Person.jpg" class="  size-36 ring ring-primary-700/30" />
        </div>

      </UPageHero>

      <!-- <UPageSection :ui="{
      container: '!pt-0'
    }">
      <MDC :value="page.content" unwrap="p" />
      <div class="flex flex-row justify-center items-center py-10 space-x-[-2rem]">
        <NuxtImg src="images/bil.jpg" width="500"
          class=" rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)" />
      </div>


    </UPageSection> -->
    </UMain>
  </UContainer>
</template>
