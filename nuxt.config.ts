// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 3004,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-locomotive-scroll",
    "@nuxtjs/sanity",
    "@nuxtjs/color-mode",
  ],
  sanity: {
    projectId: "eg0gyf3y",
    dataset: "production",
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  image: {
    presets: {
      default: {
        modifiers: {
          format: "webp",
          quality: 80,
          fit: "cover",
        },
      },
    },
  },
  router: {
    // middleware: ["pageTransition"],
  },
  app: {
    pageTransition: { name: "page" },
  },
  build: {
    transpile: ["gsap"],
  },
});
