export default defineNuxtPlugin(() => {
  // Initialize dark mode immediately on client side
  if (process.client) {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}) 