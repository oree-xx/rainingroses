<!-- <NuxtRouteAnnouncer /> -->

<template>
  <div class="min-h-screen">
    <div
      class="h-screen w-screen text-white flex items-center justify-center preloader_container fixed top-0 z-40 bg-[#444444]"
      ref="preloaderRef"
    >
      <StackedImages ref="stackedImagesRef" />
    </div>
    <HomeHero ref="homeHeroRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SplitType from 'split-type';

import { useNuxtApp } from '#app';
import { useRoute, useRouter } from 'vue-router';

// Create a reference to the components
const stackedImagesRef = ref(null);
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';

onMounted(() => {
  gsap.registerPlugin(CustomEase);
  CustomEase.create('customEase', '0.86,0,0.07,1');
  
  // Get the animation bus to emit events
  const { $animBus } = useNuxtApp();
  
  gsap.set(`.image-container`, { clipPath: 'inset(100% 0 0 0)' });
  gsap.set(`.image-wrapper .image`, {
    clipPath: 'inset(100% 0 0 0)',
    scale: 2,
  });
  // gsap.set(`.preloader-header`, { y: '100%' });
  // gsap.set(`.preloader_container`, { y: '0%' });

  gsap.set(`.image-container`, { clipPath: 'inset(0 0 100% 0)' });
  // gsap.set(`.preloader-header`, { y: 0 });
  // gsap.set(`.preloader_container`, { y: '100%' });
  // Get current screen width
  const isMobile = window.innerWidth < 768; // Mobile breakpoint is typically 768px
  const pl = gsap.timeline({});
  const overlap = 0.5; // Seconds between animation starts
  pl.to(`.image-container `, {
    clipPath: 'inset(0% 0 0 0)',
    duration: 0.7,
    ease: 'power4.inOut',
  });
  const images = [
    '/images/preload-img/img-1.png',
    '/images/preload-img/img-2.png',
    // "/images/preload-img/img-3.png",
    '/images/preload-img/img-4.png',
  ];
  //Loop through each image and apply the animation
  // images.forEach((_, index) => {
  //   pl.fromTo(
  //     `.image-wrapper:nth-child(${index + 1}) .image`,
  //     { clipPath: 'inset(100% 0 0 0)', scale: 2 }, // Start with the image fully clipped (bottom to top)
  //     {
  //       clipPath: 'inset(0% 0 0 0)',
  //       scale: 1,
  //       duration: 0.9,
  //       ease: 'customEase', // Use custom bezier curve
  //     },
  //     index * overlap // Delay the start of each animation based on the overlap
  //   );
  // });

  //Add the final clip animation for the last image
  pl.to(`.image-container`, {
    clipPath: 'inset(0 0 100% 0)',
    duration: 0.7,
    ease: 'customEase',
  });
  // SVG Draw Animation
  gsap.set('.logo-preloader', {
    opacity: 0,
  });
  
  gsap.set('.logo-preloader path', {
    strokeDasharray: function (i, el) {
      return el.getTotalLength();
    },
    strokeDashoffset: function (i, el) {
      return el.getTotalLength();
    },
    stroke: '#E6E3DC',
    strokeWidth: 1,
    fill: 'transparent',
  });
  gsap.set('.logo-preloader', {
    opacity: 1,
  });
  pl.to('.logo-preloader path', {
    strokeDashoffset: 0,
    duration: 3,
    ease: 'customEase',
    // stagger: 0.1
  }).to(
    '.logo-preloader path',
    {
      fill: '#E6E3DC',
      stroke: 'transparent',
      duration: 1,
      ease: 'power2.inOut',
    },
    '-=0.5'
  );
  pl.fromTo(`.preloader_container`, {
    opacity: 1,
    duration: 0.5,
    ease: 'customEase',
  },{
    opacity: 0,
    duration: 1,
    ease: 'customEase',
  },'>=0.5');
  pl.set('.preloader_container',{
    display: 'none',
  });
  // Navigation animation runs right after preloader is hidden
  pl.fromTo(
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
      ease: 'power2.out',
    }
  );
  pl.fromTo(
    '.rose-container',
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 3,
      duration: 0.5,
      ease: 'power2.out',
    }
  );
  pl.fromTo(
    '.rose-bg',
    {
      scale: 1.5,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    },
    '<'
  );

  // Split text using SplitType instead of SplitText
  const headerText = new SplitType('.home-header', { types: 'chars' });
  const subheaderText = new SplitType('.home-subheader', { types: 'words' });
  const pageTitles = new SplitType('.page-title', { types: 'chars' });
  const pageSubheaders = new SplitType('.page-subheader', { types: 'words' });

  pl.fromTo(
    '.home-header',
    {
      y: '100%',
    },
    {
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    },
    '<'
  );
  pl.fromTo(
    '.home-header',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut',
    },
    '<'
  );

  pl.fromTo(
    subheaderText.words,
    {
      y: '100%',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power2.inOut',
    },
    '<'
  );

  pl.fromTo(
    ['.home-page-img', '.hpi-overlay'],
    {
      scale: 1.2,
      opacity: 0,
    },
    {
      scale: 1,
      stagger: 0.1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    },
    '< 0.2'
  );

  pl.fromTo(
    pageTitles.chars,
    {
      y: '100%',
      opacity: 0,
    },
    {
      y: '0%',
      opacity: 1,
      stagger: 0.05,
      duration: 0.7,
      ease: 'power4.out',
    },
    '< 0.2'
  );

  // Only run this animation on mobile screens
  if (isMobile) {
    pl.fromTo(
      pageSubheaders.words,
      {
        y: '100%',
        opacity: 0,
        filter: 'blur(4px)',
      },
      {
        y: '0%',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        duration: 0.7,
        ease: 'power4.out',
      },
      '< 0.2'
    );
  }
});
</script>
