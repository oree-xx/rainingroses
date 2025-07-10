<template>
  <div class="min-h-screen bg-[#E6E3DC] dark:bg-[#1a1a1a] pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-20 rounded-b-[30px] md:rounded-b-[60px] transition-colors duration-300">
    <div class="max-w-[1282px] w-[92%] sm:w-[95%] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        <!-- Image Section -->
        <div class="md:col-span-1">
          <div
            ref="imageContainer"
            class="rounded-[20px] sm:rounded-[25px] overflow-hidden max-w-[500px] mx-auto md:mx-0 h-[300px] sm:h-[350px] md:h-auto mt-0 sm:mt-[80px]"
          >
            <img
              ref="profileImage"
              src="/images/tola.png"
              alt="Tola"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <!-- Content Section -->
        <div class="md:col-span-2 mt-8 md:mt-0">
          <h1
            class="font-italiana text-[32px] sm:text-[40px] md:text-[60px] ms-txt overflow-hidden text-[#212122] dark:text-[#f0f0f0] transition-colors duration-300"
          >
            All About Me
          </h1>

          <div
            class="font-inter text-[16px] sm:text-[18px] md:text-[20px] font-light leading-relaxed text-[#212122] dark:text-[#e5e5e5] transition-colors duration-300"
          >
            <p class="ms-txt overflow-hidden">
              Tola is a spirited girl from Ajah, Lagos, who loves to share her
              thoughts on the everyday moments that inspire her. With a degree
              in Economics and Finance and a career in Accounting, she's diving
              into her artistic side, exploring new hobbies, and embracing the
              joy of spontaneity.
            </p>
            <p class="ms-txt overflow-hidden">
              An avid reader, Tola invites you to check out her book vault and
              resources page, where she shares her favorite reads and welcomes
              your recommendations. Join her as she navigates life, one random
              thought at a time!
            </p>

            <h2
              class="font-italiana text-[24px] sm:text-[28px] md:text-[40px] mt-10 sm:mt-12 ms-txt overflow-hidden text-[#212122] dark:text-[#f0f0f0] transition-colors duration-300"
            >
              Why Does Tola Write?
            </h2>
            <p class="ms-txt overflow-hidden">
              Writing has always been Tola's way of making sense of the world.
              It's a space where she can process her thoughts, explore new
              ideas, and connect with others who might be experiencing similar
              things. Through her words, she hopes to inspire others to find joy
              in everyday moments and embrace their own creativity.
            </p>

            <div class="mt-10 sm:mt-12 pt-6 sm:pt-8">
              <!-- Animated horizontal line -->
              <div 
                ref="horizontalLine"
                class="w-full h-[1px] bg-[#A09F9B] dark:bg-[#666666] mb-6 sm:mb-8 transition-colors duration-300"
              ></div>
              
              <h3
                class="font-italiana text-[22px] sm:text-[24px] md:text-[32px] mb-3 sm:mb-4 ms-txt overflow-hidden text-[#212122] dark:text-[#f0f0f0] transition-colors duration-300"
              >
                Connect With Me
              </h3>
              <div class="flex flex-wrap gap-y-2 gap-x-6">
                <a
                  href="#"
                  class="text-[#212122] dark:text-[#e5e5e5] hover:opacity-70 transition-all duration-300 text-[16px] sm:text-[18px] ms-txt overflow-hidden"
                  >Instagram</a
                >
                <a
                  href="#"
                  class="text-[#212122] dark:text-[#e5e5e5] hover:opacity-70 transition-all duration-300 text-[16px] sm:text-[18px] ms-txt overflow-hidden"
                  >Twitter</a
                >
                <a
                  href="#"
                  class="text-[#212122] dark:text-[#e5e5e5] hover:opacity-70 transition-all duration-300 text-[16px] sm:text-[18px] ms-txt overflow-hidden"
                  >Email</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="medias mwg_effect000 mt-10">
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
    <div class="media">
        <img src="/assets/images/01.jpeg" alt="">
    </div>
</div> -->
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { onMounted, ref } from 'vue';
import { SplitText } from "gsap/SplitText";

// Refs for the image animation
const imageContainer = ref(null);
const profileImage = ref(null);
const horizontalLine = ref(null);

useHead({
  title: "About Tola | Raining Roses",
  meta: [
    {
      name: "description",
      content:
        "Learn more about Tola, her background, interests, and why she writes.",
    },
  ],
});

onMounted(() => {
  gsap.registerPlugin(SplitText);

  // Clip mask reveal animation for the profile image
  if (imageContainer.value && profileImage.value) {
    // Set initial clip path to hide the image (top to bottom) and scale
    gsap.set(profileImage.value, {
      clipPath: "inset(100% 0 0 0)",
      scale: 1.1
    });

    // Animate the clip path to reveal the image from top to bottom with scale
    gsap.to(profileImage.value, {
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.3
    });
  }

  // Horizontal line reveal animation
  if (horizontalLine.value) {
    // Set initial state - line hidden (scaled to 0 width from left)
    gsap.set(horizontalLine.value, {
      scaleX: 0,
      transformOrigin: "left center"
    });

    // Animate the line to reveal from left to right
    gsap.to(horizontalLine.value, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.5 // Start after the image animation
    });
  }

  SplitText.create(".ms-txt", {
    type: 'lines,',
    mask: "lines",
    onSplit: (self) => {
     gsap.from(self.lines,{
      y: 100,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.1,
     })
    }
  });
    gsap.registerPlugin(InertiaPlugin);

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0;
    
    const root = document.querySelector('.mwg_effect000');
    if (!root) return;
    
    root.addEventListener("mousemove", (e) => {
        // Calculate horizontal movement since the last mouse position
        deltaX = e.clientX - oldX;

        // Calculate vertical movement since the last mouse position
        deltaY = e.clientY - oldY;

        // Update old coordinates with the current mouse position
        oldX = e.clientX;
        oldY = e.clientY;
    });

    root.querySelectorAll('.media').forEach(el => {
        // Add an event listener for when the mouse enters each media
        el.addEventListener('mouseenter', () => {
            const tl = gsap.timeline({ 
                onComplete: () => {
                    tl.kill();
                }
            });
            tl.timeScale(1.2); // Animation will play 20% faster than normal
            
            const image = el.querySelector('img');
            if (!image) return;
            
            tl.to(image, {
               inertia: {
                    x: {
                        velocity: deltaX * 30, // Higher number = movement amplified
                        end: 0 // Go back to the initial position
                    },
                    y: {
                        velocity: deltaY * 30, // Higher number = movement amplified
                        end: 0 // Go back to the initial position
                    },
                },
            });
            tl.fromTo(image, {
                rotate: 0
            }, {
                duration: 0.4,
                rotate:(Math.random() - 0.5) * 30, // Returns a value between -15 & 15
                yoyo: true, 
                repeat: 1,
                ease: 'power1.inOut' // Will slow at the begin and the end
            }, '<'); // The animation starts at the same time as the previous tween
        });
    });
});
</script>
<style>
.medias {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vw;
}

.media {
    cursor: pointer;
    /* overflow: hidden; */
    border-radius: 8px;
}

.media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}
</style>