<template>
  <div class="">
    <div class="bg-[#E6E3DC] dark:bg-[#1a1a1a] m-auto px-5 md:px-10 h-full py-3 md:py-[10px] rounded-b-[30px] md:rounded-b-[60px] transition-colors duration-300">
      <div class="max-w-[1200px] mx-auto">
        <div>
        <div
          class="flex items-center justify-between mt-5 md:mt-[7rem]"
        >
          <div class="font-dancing text-[#212122] dark:text-[#f0f0f0] relative w-full transition-colors duration-300">
            <!-- <div
              class="absolute top-[-22px] w-[50px] h-[50px] md:w-[80px] md:h-[80px] right-0 md:right-5 rose-container"
            >
              <NuxtImg
                src="/images/rose.svg"
                class="home-header-img"
                fit="cover"
              />
            </div> -->
            <div class="overflow-hidden text-[clamp(48px,8vw,96px)] w-full flex justify-center">
              <ClientOnly>
                <NuxtImg :src="logoSrc" class="home-header w-[70%]" fit="cover" />
                <template #fallback>
                  <NuxtImg src="/images/logo-header-drk.svg" class="home-header w-[70%]" fit="cover" />
                </template>
              </ClientOnly>
            </div>
            <div class="overflow-hidden w-[84%]">
              <h2
                class="home-subheader font-italiana text-[clamp(16px,2vw,24px)] text-end"
              >
                A PERSONAL BLOG
              </h2>
            </div>
          </div>
          <!-- <div
            class="w-[80%] md:w-[50%] overflow-hidden rounded-full md:mt-0 mt-10"
          >
            <NuxtImg
              src="/images/bg-hero.png"
              class="home-header-img w-full h-full rose-bg"
              fit="cover"
            />
          </div> -->
        </div>

        <div class="mt-10 md:mt-20">
          <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4"
          >
            <NuxtLink to="/musings" class="block w-full">
              <div
                class="w-full h-[300px] md:h-[463px] overflow-hidden rounded-lg relative page-card-container cursor-pointer"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div
                  class="absolute top-0 left-0 w-full h-full bg-black/20 hpi-overlay z-10"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center w-full"
                >
                  <div class="overflow-hidden">
                    <h2
                      class="text-[clamp(64px,8vw,96px)] font-italiana text-white page-title flex items-center h-[80px] md:h-[120px]"
                    >
                      Musings
                    </h2>
                  </div>
                  <div class="overflow-hidden">
                    <h3
                      class="text-[14px] md:text-[16px] font-inter italic font-light text-white page-subheader text-center"
                    >
                      Fleeting thoughts, insights, and moments of inspirations.
                    </h3>
                  </div>
                </div>

                <NuxtImg
                  src="/images/musings.jpeg"
                  class="home-page-img w-full h-full object-cover"
                  fit="cover"
                />
              </div>
            </NuxtLink>
            <NuxtLink to="/diary" class="block w-full">
              <div
                class="w-full h-[300px] md:h-[463px] overflow-hidden mt-0 rounded-lg relative page-card-container cursor-pointer"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div
                  class="absolute top-0 left-0 w-full h-full bg-black/20 hpi-overlay z-10"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center w-full"
                >
                  <div class="overflow-hidden ">
                    <h2
                      class="text-[clamp(64px,8vw,96px)] font-italiana text-white page-title flex items-center h-[80px] md:h-[120px]"
                    >
                      Fictional
                    </h2>
                  </div>
                  <div class="overflow-hidden">
                    <h3
                      class="text-[14px] md:text-[16px] font-inter italic font-light text-white page-subheader text-center"
                    >
                      A collection of my thoughts and reflections
                    </h3>
                  </div>
                </div>
                <NuxtImg
                  src="/images/fictional.jpeg"
                  class="home-page-img w-full h-full object-cover"
                  fit="contain"
                />
              </div>
            </NuxtLink>
            <NuxtLink to="/vault" class="block w-full">
              <div
                class="w-full h-[300px] md:h-[463px] overflow-hidden mt-0 rounded-lg relative page-card-container cursor-pointer"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div
                  class="absolute top-0 left-0 w-full h-full bg-black/20 hpi-overlay z-10"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 items-center w-full"
                >
                  <div class="overflow-hidden">
                    <h2
                      class="text-[clamp(64px,8vw,96px)] font-italiana text-white page-title flex items-center h-[80px] md:h-[120px]"
                    >
                      Vault
                    </h2>
                  </div>
                  <div class="overflow-hidden">
                    <h3
                      class="text-[14px] md:text-[16px] font-inter italic font-light text-white page-subheader text-center"
                    >
                      A collection of my thoughts and reflections
                    </h3>
                  </div>
                </div>
                <NuxtImg
                  src="/images/vault.jpeg"
                  class="home-page-img w-full h-full object-cover"
                  fit="contain"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
        </div>
        <PagesView />
        <AboutHome />
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from 'gsap';
import SplitType from "split-type";

const colorMode = useColorMode();
const logoSrc = computed(() =>
  colorMode.value === "dark"
    ? "/images/logo-header-lght.svg"
    : "/images/logo-header-drk.svg"
);

useHead({
  title: "Raining Roses",
  meta: [
    {
      name: "description",
      content: "Raining Roses is a personal blog by Tola.",
    },
  ],
});

onMounted(() => {

  // Add resize listener to handle orientation changes
  const handleResize = () => {
    const currentIsMobile = window.innerWidth < 768;

    // If device switched to mobile and animation hasn't run
    if (currentIsMobile) {
      const pageSubheaders = document.querySelectorAll(".page-subheader .word");
      if (pageSubheaders.length > 0) {
        gsap.fromTo(
          pageSubheaders,
          {
            y: "100%",
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.05,
            duration: 0.7,
            ease: "power4.out",
          }
        );
      }
    }
  };

  window.addEventListener("resize", handleResize);

  // Clean up event listener
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

onMounted(async () => {
  const { gsap, ScrollTrigger } = await useGSAP();

  if (!ScrollTrigger) return; // Guard clause for SSR

  // Your ScrollTrigger animations...
});

const handleMouseEnter = (event) => {
  const img = event.currentTarget.querySelector(".home-page-img");
  const subheaderWords = event.currentTarget.querySelectorAll(
    ".page-subheader .word"
  );

  gsap.to(img, {
    scale: 1.1,
    duration: 0.3,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });

  gsap.to(subheaderWords, {
    // y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.3,
    stagger: 0.05,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });
};

const handleMouseLeave = (event) => {
  const img = event.currentTarget.querySelector(".home-page-img");
  const subheaderWords = event.currentTarget.querySelectorAll(
    ".page-subheader .word"
  );

  // Kill any existing animations
  gsap.killTweensOf([img, subheaderWords]);

  gsap.to(img, {
    scale: 1,
    duration: 0.3,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    overwrite: true,
    force3D: true,
  });

  gsap.to(subheaderWords, {
    // y: "100%",
    opacity: 0,
    filter: "blur(4px)",
    duration: 0.3,
    stagger: -0.05,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    overwrite: true,
    force3D: true,
  });
};
</script>

<style>
.rose-container,
.char,
.word {
  opacity: 0;
}
/* .page-subheader {
  display: none;
} */
.logo-preloader {
  opacity: 0;
}
.page-card-container .home-page-img {
  transform: scale(1);
}

.page-subheader .word {
  filter: blur(4px);
}
</style>
