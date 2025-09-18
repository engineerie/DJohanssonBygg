<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'
import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()

function humanize(segment: string) {
  if (!segment) return 'Hem'
  const s = segment
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) =>
      c.toUpperCase())
  return decodeURIComponent(s)
}

const BreadcrumbItems = computed<BreadcrumbItem[]>(() => {
  const path = route.path
  if (path === '/' || path === '') {
    return [{ label: 'Hem', to: '/' }]
  }

  const segments = path.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = [{ label: 'Hem', to: '/' }]

  let acc = ''
  for (const seg of segments) {
    acc += '/' + seg
    items.push({
      label: humanize(seg),
      to: acc
    })
  }

  const last = items.length - 1
  items[last] = { ...items[last], to: undefined }

  return items
})

const showBreadcrumb = computed(() => route.path !== '/' && route.path !== '')
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <UContainer class="relative">
      <UBreadcrumb v-if="showBreadcrumb" :items="BreadcrumbItems" class="absolute z-10 p-4">
        <template #separator>
          <span class="mx-2 text-muted">/</span>
        </template>
      </UBreadcrumb>
    </UContainer>

    <!-- <UContainer class="sm:border-x border-daniel-700/30 pt-10"> -->
    <slot />
    <AppFooter />
    <!-- </UContainer> -->
  </div>
</template>
