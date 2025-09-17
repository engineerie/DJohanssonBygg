<script setup lang="ts">
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <!-- <UContainer class="sm:border-x border-daniel-700/30 pt-10"> -->
    <slot />
    <AppFooter />
    <!-- </UContainer> -->
  </div>
</template>
