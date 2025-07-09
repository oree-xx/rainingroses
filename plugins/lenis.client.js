import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  let lenis = null

  nuxtApp.hook('app:mounted', () => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  nuxtApp.hook('page:transition:finish', () => {
    // Reset scroll position when navigating to a new page
    lenis && lenis.scrollTo(0, { immediate: true })
  })

  return {
    provide: {
      lenis: () => lenis
    }
  }
}) 