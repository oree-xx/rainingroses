export const useDarkMode = () => {
  const isDark = ref(false)

  if (process.client) {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      // Update document class
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  return {
    isDark: readonly(isDark),
    toggleDarkMode,
  }
} 