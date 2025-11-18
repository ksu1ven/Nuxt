// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    preset: "vercel",
  },
  css: ["~/assets/css/main.scss"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-auth-utils"],
  runtimeConfig: {
    kinopoiskApiKey: "ba423643-2850-4185-8267-519b193bd018",

    public: {
      kinopoiskBaseUrl: "https://kinopoiskapiunofficial.tech/api/v2.2",
    },
  },
  routeRules: {
    "/": {
      prerender: true,
    },
    // "/movies": {
    //   swr: true,
    // },
    // "/movies/**": {
    //   swr: false,
    // },
    "/old/**": {
      redirect: {
        to: "/",
      },
    },
  },
  app: {
    head: {
      title: "",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      bodyAttrs: {
        class: "test",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  imports: {
    dirs: ["types"],
  },
});
