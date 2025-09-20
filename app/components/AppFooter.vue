<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter class="z-10 bg-default border-t border-primary-700/30"
    :ui="{ left: 'text-muted text-xs', container: 'border-x border-primary-700/30' }">
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <div class="space-x-6 text-center sm:flex">
        <div class="flex items-center justify-center gap-2">
          <UIcon name="i-heroicons-phone-20-solid" class="text-daniel-500" />
          <a :href="'tel:' + footer.phone.number" class="hover:underline">{{ footer.phone.number }}</a>
        </div>
        <div class="flex items-center justify-center gap-2">
          <UIcon :name="footer.email.icon" class="text-daniel-500" />
          <a :href="'mailto:' + footer.email.address" class="hover:underline">{{ footer.email.address }}</a>
        </div>
        <!-- <div class="flex gap-2 flex-nowrap">
          <UIcon :name="footer.location.icon" class="text-daniel-500 mt-0.5" />
          <span>{{ footer.location.street }}, {{ footer.location.postCode }} {{ footer.location.county }}</span>
        </div> -->
      </div>
      <!-- <template v-if="footer?.links">
        <UButton v-for="(link, index) of footer?.links" :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }" />
      </template> -->
    </template>
  </UFooter>
</template>
