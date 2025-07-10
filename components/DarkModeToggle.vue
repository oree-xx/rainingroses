<template>
  <button
    @click="toggleDarkMode"
    class="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-black/20 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/80 transition-all duration-300 hover:scale-110 hover:bg-white/30 dark:hover:bg-black/30"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div class="relative w-5 h-5">
      <!-- Sun Icon -->
      <svg
        v-show="!isDark"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-0 w-5 h-5 text-gray-700 transition-all duration-300"
        :class="{ 'rotate-180 opacity-0': isDark, 'rotate-0 opacity-100': !isDark }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      
      <!-- Moon Icon -->
      <svg
        v-show="isDark"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-0 w-5 h-5 text-gray-200 transition-all duration-300"
        :class="{ 'rotate-0 opacity-100': isDark, '-rotate-180 opacity-0': !isDark }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </div>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 