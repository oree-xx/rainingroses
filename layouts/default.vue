<template>
  <div class="h-full bg-[#E6E3DC] dark:bg-[#1a1a1a] relative isolate transition-colors duration-300">
    <!-- Mobile Menu Overlay -->
    <div
      class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
      :class="isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      @click="isMenuOpen = false"
    ></div>

    <!-- Mobile Navigation -->
    <div
      class="fixed inset-0 bg-[#E6E3DC] dark:bg-[#1a1a1a] z-50 transform transition-all duration-300 ease-in-out flex flex-col text-center items-center justify-center nav-container-mobile"
      :class="isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'"
    >
      <!-- Logo and Buttons at Top -->
      <div class="absolute top-0 left-0 right-0 flex justify-center items-center mt-8">
        <div class="w-[40px] h-[40px] flex items-center justify-center ">
          <NuxtImg
                :src="colorMode.value === 'dark' ? '/images/logo-sm-drk.svg' : '/images/logo-sm-text-drk.svg'"
                class="home-header-img"
                fit="cover"
              />
        </div>
        <ClientOnly>
          <DarkModeToggle class="ml-3" />
        </ClientOnly>
        <button
          @click="isMenuOpen = false"
          class="ml-3 w-[40px] h-[40px] flex items-center justify-center bg-gray-500/30 dark:bg-gray-400/30 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-800 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      
      <!-- Navigation Links -->
      <div class="font-italiana text-center">
        <div class="flex flex-col space-y-6 mobile-nav-link">
          <nuxt-link to="/" @click="isMenuOpen = false" class="text-[32px] ms-txt overflow-hidden text-gray-800 dark:text-gray-200">Home</nuxt-link>
          <nuxt-link to="/diary" @click="isMenuOpen = false" class="text-[32px] ms-txt overflow-hidden text-gray-800 dark:text-gray-200">Fictional Diary</nuxt-link>
          <nuxt-link to="/musings" @click="isMenuOpen = false" class="text-[32px] ms-txt overflow-hidden text-gray-800 dark:text-gray-200">Musings</nuxt-link>
          <nuxt-link to="/vault" @click="isMenuOpen = false" class="text-[32px] ms-txt overflow-hidden text-gray-800 dark:text-gray-200">Book Vault</nuxt-link>
          <nuxt-link to="/about" @click="isMenuOpen = false" class="text-[32px] ms-txt overflow-hidden text-gray-800 dark:text-gray-200">About</nuxt-link>
        </div>
      </div>
      
      <!-- Contact Information at Bottom -->
      <div class="absolute bottom-10 left-0 right-0 flex justify-between px-10">
        <div class="text-left text-[15px] space-y-1 text-gray-600 dark:text-gray-400">
          <div>Instagram</div>
          <div>Twitter</div>
        </div>
        <div class="text-right text-[15px] space-y-1 text-gray-600 dark:text-gray-400">
          <div>raini</div>
          <div>raini</div>
        </div>
      </div>
    </div>

    <!-- Mobile Header Controls -->
    <div class="fixed top-6 left-6 right-6 z-30 md:hidden flex justify-between items-center">
      <!-- Hamburger Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="text-gray-800 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      
      <!-- Dark Mode Toggle for Mobile -->
      <ClientOnly>
        <DarkModeToggle />
      </ClientOnly>
    </div>

    <!-- Desktop Navigation -->
    <div class="bg-[#E6E3DC] dark:bg-[#1a1a1a]">
    <nav
      class="rounded-[30px] md:rounded-[60px] hidden md:flex justify-around items-center text-[#000000] dark:text-[#ffffff] text-[20px] font-italiana max-w-[800px] m-auto nav-link fixed top-5 left-0 right-0 z-30 transition-all duration-500 ease-in-out py-4 border border-[#f3f3f3] dark:border-[#333333]"
      :class="{ 'translate-y-0 opacity-100': showNav, '-translate-y-full opacity-0': !showNav }"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/diary">Fictional Diary</nuxt-link>
      <nuxt-link to="/musings">Musings</nuxt-link>
      <nuxt-link to="/vault">Book Vault</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <ClientOnly>
        <DarkModeToggle />
      </ClientOnly>
      <div class="w-full h-full absolute top-0 left-0 blur-sm z-[-1]"></div>
    </nav>
    </div>
    <!-- Page Content -->
    <div class="bg-[#212122] dark:bg-[#111111] transition-colors duration-300">
      <slot />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useNuxtApp } from "#app";
import { SplitText } from "gsap/SplitText";
import { useRoute } from "vue-router";

const colorMode = useColorMode();
const isMenuOpen = ref(false);
const showNav = ref(true);
const lastScrollTop = ref(0);
const scrollThreshold = 30; // Minimum scroll amount before showing/hiding
const scrollTimeout = ref(null);
const showNavTimeout = ref(null);

// Reference to control whether navigation animation should be played
const navAnimationPlayed = ref(false);

// Get the animation bus and route
const { $animBus, $lenis } = useNuxtApp();
const route = useRoute();

// Function to animate mobile menu links
const animateMobileMenu = () => {
  const splitTexts = document.querySelectorAll('.mobile-nav-link .ms-txt');
  
  splitTexts.forEach((text) => {
    // First ensure SplitText is initialized properly
    const split = new SplitText(text, {
      type: 'lines',
      mask: "line",
    });
    
    // Animate the split lines
    gsap.from(split.lines, {
      y: "100%",
      duration: 0.7,
      ease: 'power2.inOut',
      stagger: 0.1,
    });
  });
};

// Watch for menu open state to trigger animation
watch(isMenuOpen, (newValue) => {
  if (newValue === true) {
    animateMobileMenu()
  }
});

const handleScroll = () => {
  // Get scroll position from Lenis if available, otherwise use window
  const lenis = $lenis();
  const currentScrollTop = lenis ? lenis.scroll : (window.scrollY || document.documentElement.scrollTop);

  // Always show nav at the very top of the page
  if (currentScrollTop <= 10) {
    showNav.value = true;
    lastScrollTop.value = currentScrollTop;
    return;
  }

  // Check if we've scrolled past threshold
  if (Math.abs(currentScrollTop - lastScrollTop.value) > scrollThreshold) {
    // Scrolling down - hide nav
    if (currentScrollTop > lastScrollTop.value && currentScrollTop > 100) {
      showNav.value = false;
    }
    // Scrolling up - show nav
    else if (currentScrollTop < lastScrollTop.value) {
      showNav.value = true;
    }
    lastScrollTop.value = currentScrollTop;
  }
};

// Debounced scroll handler for better performance
const debouncedHandleScroll = () => {
  if (scrollTimeout.value) {
    clearTimeout(scrollTimeout.value);
  }
  
  // Clear any pending show nav timeout
  if (showNavTimeout.value) {
    clearTimeout(showNavTimeout.value);
  }
  
  // Call immediately for responsive feel
  handleScroll();
  
  // Set timeout for cleanup and show nav after scrolling stops
  scrollTimeout.value = setTimeout(() => {
    scrollTimeout.value = null;
    
    // Show nav after user stops scrolling for a moment (except when at very top)
    const lenis = $lenis();
    const currentScrollTop = lenis ? lenis.scroll : (window.scrollY || document.documentElement.scrollTop);
    
    if (currentScrollTop > 10) {
      showNavTimeout.value = setTimeout(() => {
        showNav.value = true;
        showNavTimeout.value = null;
      }, 1000); // Show nav 1 second after scrolling stops
    }
  }, 150);
};

onMounted(() => {
  // For non-home pages, start nav animation immediately after a short delay
  if (route.path !== '/') {
    setTimeout(() => {
      startNavAnimation();
    }, 100);
  }
  
  // If using Lenis, subscribe to its scroll event
  const lenis = $lenis();
  if (lenis) {
    lenis.on('scroll', debouncedHandleScroll);
  } else {
    // Fallback to window scroll events if Lenis is not available
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
  }

  gsap.registerPlugin(SplitText);
  const splitText = new SplitText(".ms-txt", {
    type: 'lines',
    mask: "line",
  });
});

onUnmounted(() => {
  // Clean up event listeners
  const lenis = $lenis();
  if (lenis) {
    lenis.off('scroll', debouncedHandleScroll);
  } else {
    window.removeEventListener("scroll", debouncedHandleScroll);
  }
  
  // Clear any pending timeouts
  if (scrollTimeout.value) {
    clearTimeout(scrollTimeout.value);
  }
  if (showNavTimeout.value) {
    clearTimeout(showNavTimeout.value);
  }
});

// Function to start nav animation
const startNavAnimation = () => {
  if (navAnimationPlayed.value) return;
  
  const navTl = gsap.timeline();
  navTl.fromTo(
    ['.nav-link','.nav-link a'],
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
  
  navAnimationPlayed.value = true;
};

// Watch for route changes to reset animation state
watch(() => route.path, (newPath) => {
  navAnimationPlayed.value = false;
  
  // For non-home pages, start nav animation immediately after a short delay
  if (newPath !== '/') {
    setTimeout(() => {
      startNavAnimation();
    }, 100);
  }
});
</script>

<style>
.nav-link::before{
  content: '';
    display: inline-block;
    position: absolute;
    inset: 0%;
    z-index: -2;
    backdrop-filter: blur(10px);
    border-radius: inherit;
}
.nav-link::after{
  content: '';
  position: absolute;
  inset: 0%;
  background-color:#e6e3dc;
  opacity: 0.35;
  border-radius: inherit;
  z-index: -1;
}

.dark .nav-link::after{
  background-color:#1a1a1a;
  opacity: 0.8;
}
html, body {
  min-height: 100%;
}

body {
  overflow: auto;
}
.nav-link a {
  position: relative;
  text-decoration: none;
  /* opacity: 0; */
}

.mobile-nav-link a {
  position: relative;
  text-decoration: none;
  color: #212121;
}

.dark .mobile-nav-link a {
  color: #e5e5e5;
}

.mobile-nav-link a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #212121;
  transition: width 0.3s ease;
}

.dark .mobile-nav-link a::after {
  background-color: #e5e5e5;
}

.mobile-nav-link a:hover::after {
  width: 100%;
}

.rose-container,
.char,
.word {
  opacity: 0;
}
.nav-link a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -4px;
  left: 0;
  background-color: #dbc9bd;
  transition: width 0.3s ease;
}

.dark .nav-link a::after {
  background-color: #94a3b8;
}

.nav-link a:hover::after {
  width: 100%;
}

body.menu-open {
  overflow: hidden;
}
.bottom-radius {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.nav-container-mobile{
  clip-path: inset(0.5rem round 2.5rem);
}
</style>
