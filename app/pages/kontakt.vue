<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'

const customIcon = shallowRef<any>(null)

onMounted(async () => {
  const L = await import('leaflet')
  customIcon.value = L.divIcon({
    className: '',
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ab78bd" width="32" height="32">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
           </svg>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
})

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
              <UIcon name="i-heroicons-phone-20-solid" class="text-daniel-500" />
              <a :href="'tel:' + page.phone.number" class="hover:underline">{{ page.phone.number }}</a>
            </div>
            <div class="flex items-center gap-2">
              <UIcon :name="page.email.icon" class="text-daniel-500" />
              <a :href="'mailto:' + page.email.address" class="hover:underline">{{ page.email.address }}</a>
            </div>
            <div class="flex gap-2 flex-nowrap">
              <UIcon :name="page.location.icon" class="text-daniel-500 mt-0.5" />
              <span>{{ page.location.street }}, {{ page.location.postCode }} {{ page.location.county }}</span>
            </div>
          </div>
        </template>
        <div class="flex justify-center w-full">
          <NuxtImg src="/images/Snickare Person.jpg" class="  size-36 ring ring-primary-700/30" />
        </div>

      </UPageHero>

      <!-- <div class="grid grid-cols-2">

        <LMap style="height: 350px" :zoom="14" :center="[57.26384781449794, 12.346302928765535]"
          :use-global-leaflet="true" class=" border border-daniel-700/30" :minZoom="8" :max-zoom="16">
          <LTileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base" name="OpenStreetMap" />
          <LMarker v-if="customIcon" :lat-lng="[57.2638, 12.3463]" :icon="customIcon" />
        </LMap>
        <div class="flex w-full">
          <UIcon :name="page.location.icon" class="text-daniel-500 mt-0.5" />
          <span>{{ page.location.street }}, {{ page.location.postCode }} {{ page.location.county }}</span>
        </div>
      </div> -->

    </UMain>
  </UContainer>
</template>

<style>
.leaflet-control-zoom a {
  border-radius: 0 !important;
  /* remove rounded corners */
  /* custom border color */
  box-shadow: none !important;
  /* remove shadow */

  /* set a clean background */

}

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  color: #ab78bd !important;
  border: 1px solid rgba(118, 72, 131, 0.5) !important;
  /* icon color */
  background-clip: padding-box !important;
  /* avoids “ring” effect */
}

.leaflet-control-zoom {
  box-shadow: none !important;
  border: none !important;
  background: transparent !important;
}
</style>
