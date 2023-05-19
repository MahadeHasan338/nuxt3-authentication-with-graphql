import { useAuthStore } from "@/stores/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const { getToken } = useApollo()
  const authStore = useAuthStore()
  const { setToken } = authStore;

  setTimeout(async () => {
    const token = await getToken()
    setToken(token)
  })

  nuxtApp.hook('apollo:error', (error) => {
    console.error(error)
  })
})
