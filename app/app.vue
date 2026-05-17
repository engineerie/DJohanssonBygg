<script setup lang="ts">
import {
  businessCountry,
  businessEmail,
  businessLocality,
  businessName,
  businessPhone,
  businessPostalCode,
  businessRegion,
  businessStreet,
  defaultSeoDescription,
  siteUrl
} from '~/utils/seo'

const route = useRoute()

const canonicalUrl = computed(() => {
  const path = route.path === '/' ? '/' : route.path.replace(/\/+$/, '')
  return `${siteUrl}${path}`
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: businessName,
  url: siteUrl,
  telephone: businessPhone,
  email: businessEmail,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessStreet,
    postalCode: businessPostalCode,
    addressLocality: businessLocality,
    addressRegion: businessRegion,
    addressCountry: businessCountry
  },
  areaServed: ['Varberg', 'Veddige', 'Halland'],
  image: `${siteUrl}/images/Daniel.png`
}

useHead(() => ({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#000000' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: canonicalUrl.value }
  ],
  htmlAttrs: {
    lang: 'sv-SE'
  },
  script: [
    {
      key: 'local-business-schema',
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema)
    }
  ]
}))

useSeoMeta({
  titleTemplate: `%s - ${businessName}`,
  description: defaultSeoDescription,
  ogSiteName: businessName,
  ogLocale: 'sv_SE',
  ogUrl: canonicalUrl,
  robots: 'index, follow',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
