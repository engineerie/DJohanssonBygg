<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <UHeader class="bg-white dark:bg-black border-daniel-700/30 " :toggle="{
    color: 'primary',
    variant: 'ghost',
    size: 'xl',
  }" :ui="{ container: 'sm:border-x border-daniel-700/30' }">
    <template #title>
      <UColorModeImage light="/images/image.png" dark="/images/image_dark.png" :height="80" />
    </template>
    <template #right>
      <!-- <div>
        <div class="items-center gap-2 hidden sm:flex">
          <UIcon name="i-heroicons-phone-20-solid" class="text-daniel-500" />
          <a href="tel:+46350135947" class="hover:underline">+46 73 072 85 31</a>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-envelope-20-solid" class="text-daniel-500" />
          <a href="mailto:info@djohanssonbygg.se" class="hover:underline">info@djohanssonbygg.se</a>
        </div>
      </div> -->

      <ColorModeButton />
    </template>
    <UNavigationMenu :items="links" variant="link" color="neutral" class="" :ui="{
      link: 'px-2 py-1 text-md',
      linkLeadingIcon: 'hidden',

    }"></UNavigationMenu>

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" :ui="{ link: 'text-xl' }" />
    </template>
  </UHeader>

</template>
