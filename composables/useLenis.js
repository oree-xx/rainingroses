export const useLenis = () => {
  const nuxtApp = useNuxtApp()
  
  // Get lenis instance from plugin
  const lenis = nuxtApp.$lenis ? nuxtApp.$lenis() : null
  
  // Helper function to scroll to a specific element
  const scrollTo = (target, options = {}) => {
    if (!lenis) return
    
    // Can accept an element, selector string, or position number
    lenis.scrollTo(target, {
      offset: 0,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: false,
      ...options
    })
  }
  
  // Helper function to scroll to the top of the page
  const scrollToTop = (options = {}) => {
    scrollTo(0, options)
  }
  
  return {
    lenis,
    scrollTo,
    scrollToTop
  }
} 