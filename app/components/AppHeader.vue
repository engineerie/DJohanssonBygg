<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <UHeader class="bg-black dark:bg-black border-daniel-500/30 " :toggle="{
    color: 'primary',
    variant: 'ghost',
    size: 'xl',
    position: 'hidden'
  }" :ui="{
    container: 'sm:border-x border-daniel-500/30',

    header: 'bg-black px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3',

  }">
    <template #title>
      <NuxtImg src="/images/image_dark.png" fit="contain" height="80" />
      <!-- <UColorModeImage light="/images/image.png" dark="/images/image_dark.png" :height="80"  /> -->
    </template>
    <template #right>

      <div class=" hidden lg:flex items-center gap-4">
        <div class="items-center gap-2 flex">
          <UIcon name="i-heroicons-phone-20-solid" class="text-daniel-500" />
          <a href="tel:+46350135947" class="hover:underline">+46 73 072 85 31</a>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-envelope-20-solid" class="text-daniel-500" />
          <a href="mailto:info@djohanssonbygg.se" class="hover:underline">info@djohanssonbygg.se</a>
        </div>
      </div>
      <!-- <UButton label="Kontakt" to="/kontakt" class="hidden sm:flex" /> -->
    </template>
    <!-- <UNavigationMenu :items="links" variant="link" color="neutral" class="" :ui="{
      link: 'px-2 py-1 text-md',
      linkLeadingIcon: 'hidden',

    }"></UNavigationMenu> -->

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5"
        :ui="{ link: 'text-xl rounded-none before:rounded-none', }" />
    </template>
  </UHeader>

</template>
