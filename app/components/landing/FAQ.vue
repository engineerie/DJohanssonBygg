<script setup lang="ts">
import type { link } from '#build/ui';
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
  trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted',
  label: 'truncate'
}
</script>

<template>

  <UContainer class="sm:border-x border-daniel-700/30">
    <UPageSection :title="page.faq.title" :description="page.faq.description" :ui="{
      container: '!py-24 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }">
      <UTabs :items orientation="horizontal" :ui>
        <template #content="{ item }">
          <UAccordion trailing-icon="lucide:plus" :items="item.questions" :unmount-on-hide="false" :ui="{
            item: 'border-primary-700/20 py-1',
            trigger: ' border-0 group transform-gpu rounded-none bg-muted/1 will-change-transform hover:bg-muted/50 text-base',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted'
          }">
            <template #body="{ item: _item }">
              <MDC :value="_item.content" unwrap="p" class="px-4" />
            </template>
          </UAccordion>
        </template>
      </UTabs>
    </UPageSection>
  </UContainer>

</template>
