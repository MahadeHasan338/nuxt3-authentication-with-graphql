export default defineNuxtConfig({
  app: {
    head: {
      title: "Project X",
    },
  },

  runtimeConfig: {
    apiServer: "http://127.0.0.1:8000/graphql/",

    public: {
      siteUrl: "http://127.0.0.1:3000/",
      apiClient: "http://127.0.0.1:8000/graphql/",
    },
  },

  css: ["vuetify/lib/styles/main.sass", "~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: ['@nuxtjs/apollo','@pinia/nuxt'],

  apollo: {
    authType: "JWT",
    clients: {
      default: {
        httpEndpoint:
          process.env.NUXT_PUBLIC_API_CLIENT || "http://127.0.0.1:8000/graphql/",
        httpLinkOptions: {
          credentials: "include",
        },
      },
    },
  },
});
