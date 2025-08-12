// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  devtools: {
    enabled: false
  },
  app: {
    head: {
      title: "Organic Store",
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/images/coffee-asorted-400x400.jpg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },


  components: [
    { path: 'node_modules/vue-countup-v3', pathPrefix: false }
  ]
})




