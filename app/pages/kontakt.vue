<script setup lang="ts">
const { data: page } = await useAsyncData('kontakt', () => {
  return queryCollection('kontakt').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
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
              <Icon :name="page.phone.icon" class="text-daniel-500" />
              <a :href="'tel:' + page.phone.number" class="hover:underline">{{ page.phone.number }}</a>
            </div>
            <div class="flex items-center gap-2">
              <Icon :name="page.email.icon" class="text-daniel-500" />
              <a :href="'mailto:' + page.email.address" class="hover:underline">{{ page.email.address }}</a>
            </div>
            <div class="flex gap-2">
              <Icon :name="page.location.icon" class="text-daniel-500 mt-0.5" />
              <div>
                <div>{{ page.location.street }}</div>
                <div>{{ page.location.postCode }}</div>
                <div>{{ page.location.county }}</div>
              </div>
            </div>
          </div>
        </template>
        <div class="flex justify-center w-full">
          <NuxtImg src="/images/Snickare Person.jpg" class="  size-36 ring ring-primary-700/30" />
        </div>

      </UPageHero>
    </UMain>
  </UContainer>
</template>
