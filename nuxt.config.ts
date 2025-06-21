// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css:['~/assets/global.css'],
  modules: [
    "@pinia/nuxt",
    'motion-v/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-emoji-picker'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/heart.png' }
      ]
    }
  }
})