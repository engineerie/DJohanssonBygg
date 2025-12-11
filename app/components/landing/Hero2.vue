<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div class="border-b border-primary-500/30">


    <UContainer class="sm:border-x border-daniel-500/30">

      <UPageHero orientation="horizontal" :ui="{
        headline: 'flex items-center justify-center',
        title: 'saturate-150  max-w-2xl mx-auto text-5xl sm:text-5xl lg:text-5xl text-left sm:text-center lg:text-left  dark:text-white',
        description: 'dark:text-daniel-300 text-daniel-800 text-left sm:text-center lg:text-left',
        links: 'mt-4 flex-col justify-center items-start sm:items-center lg:items-start'
      }" class=" -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 background">
        <template #headline>
          <!-- <Motion :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }" :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }" :transition="{
        duration: 0.6,
        delay: 0.1
      }"> -->
          <!-- <UColorModeAvatar class=" size-18 mb-2 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        light="/images/Facebook Image.jpg" :dark="global.picture?.dark!" :alt="global.picture?.alt!" /> -->
          <!-- <NuxtImg src="/images/Snickare Person.jpg"
        class=" rounded-full size-18 mb-2 ring ring-default ring-offset-3 ring-offset-(--ui-bg)" /> -->


          <!-- </Motion> -->
        </template>

        <template #title>
          <!-- <NuxtImg src="/images/image.png" width="800" class="w-full mb-10" /> -->
          <!-- <Motion :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }" :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }" :transition="{
        duration: 0.6,
        delay: 0.1
      }"> -->
          <span class="hero2-title">
            {{ page.title }}
          </span>
          <!-- </Motion> -->
        </template>

        <template #description>
          <!-- <Motion :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }" :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }" :transition="{
        duration: 0.6,
        delay: 0.3
      }"> -->
          {{ page.description }}
          <!-- </Motion> -->
        </template>

        <template #links>
          <!-- <Motion :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }" :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }" :transition="{
        duration: 0.6,
        delay: 0.5
      }"> -->
          <div v-if="page.hero.links" class="flex items-center gap-2">
            <UButton v-bind="page.hero.links[0]" class="rounded-none" />
            <UButton :color="global.available ? 'neutral' : 'error'" variant="ghost" class="gap-2 pointer-events-none"
              :label="global.available ? 'Tillgängliga för nya projekt' : 'Not available at the moment'">
              <template #leading>
                <span class="relative flex size-2">
                  <span class="absolute inline-flex size-full rounded-full opacity-75"
                    :class="global.available ? 'bg-daniel-500 animate-ping' : 'bg-error'" />
                  <span class="relative inline-flex size-2 scale-90 rounded-full"
                    :class="global.available ? 'bg-daniel-500' : 'bg-error'" />
                </span>
              </template>
            </UButton>
          </div>


          <!-- </Motion> -->

          <!-- <div class="gap-x-4 inline-flex mt-4">
        <Motion v-for="(link, index) of footer?.links" :key="index" :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }" :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }" :transition="{
          duration: 0.6,
          delay: 0.5 + index * 0.1
        }">
          <UButton v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }" />
        </Motion>
      </div> -->
        </template>
        <div class="flex justify-center">
          <NuxtImg width="400" height="400" src="/images/Carpenter House Stock Photo.jpeg"
            class="  ring ring-primary-500/30 " />
        </div>

      </UPageHero>
    </UContainer>
  </div>
  <div class="border-b border-primary-500/30">

    <UContainer class="sm:border-x border-daniel-500/30">
      <UContainer>
        <UMarquee :overlay="false" pause-on-hover
          class="py-0 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s] border-daniel-500/30">
          <Motion v-for="(img, index) in page.hero.images" :key="index" :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }" :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }" :transition="{
            duration: 0.6,
            delay: index * 0.1
          }">
            <NuxtImg width="234" height="234" class="border-x border-daniel-500/30 aspect-square object-cover"
              :class="index % 2 === 0 ? '' : ''" v-bind="img" />
          </Motion>
        </UMarquee>
      </UContainer>
    </UContainer>

  </div>
</template>

<style scoped>
.hero2-title {
  font-family: "Copperplate CC", serif;
  font-weight: 600;
  display: block;
  text-wrap: balance;
}
</style>
