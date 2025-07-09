export default defineNuxtPlugin((nuxtApp) => {
  // Get the lenis instance
  const getLenis = () => {
    return nuxtApp.$lenis ? nuxtApp.$lenis() : null;
  };

  // Before page transition starts
  nuxtApp.hook("page:start", async () => {
    if (process.client) {
      // Stop lenis scrolling during page transitions to prevent conflicts
      const lenis = getLenis();
      if (lenis) {
        lenis.stop();
      }
      
      const gsap = (await import("gsap")).default;
      const exitTl = gsap.timeline();

      exitTl
        .to(".nav-links a", {
          y: -20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.in",
        })
        .to(
          ".home-header .char",
          {
            y: "100%",
            opacity: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          [".home-page-img", ".hpi-overlay"],
          {
            scale: 1.2,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.3"
        );
    }
  });

  // After page transition finishes
  nuxtApp.hook("page:finish", () => {
    if (process.client) {
      // Restart lenis scrolling after the page transition is complete
      const lenis = getLenis();
      if (lenis) {
        // Ensure we're at the top of the page
        lenis.scrollTo(0, { immediate: true });
        // Resume scrolling
        lenis.start();
      }
    }
  });
});
