<template>
  <div class="about">
    <div class="about-container max-w-[1282px] w-[95%] mx-auto">
      <div
        class="m-auto px-3 md:px-5 py-5 md:py-40 mt-12 md:mt-24 border-t-[#A09F9B] dark:border-t-[#555555] border-t-[1px] flex flex-col md:flex-row gap-4 justify-between items-center transition-colors duration-300"
      >
        <div
          class="flex flex-col gap-4 bg-[#D9D9D9] dark:bg-[#2a2a2a] rounded-[25px] border-[#212122] dark:border-[#555555] border w-full md:w-auto transition-colors duration-300"
        >
          <NuxtImg
            src="/images/tola.png"
            class="w-full md:w-[446px] h-full"
            fit="cover"
          />
          <h2
            class="font-italiana text-[24px] md:text-[32px] px-[20px] md:px-[29px] pb-[20px] md:pb-[30px] font-light text-gray-800 dark:text-gray-200 transition-colors duration-300"
          >
            About Tola
          </h2>
        </div>
        <div class="flex flex-col gap-4 w-full md:w-1/2">
          <h2
            ref="splitText"
            class="font-inter italic text-[28px] md:text-[40px] font-[200] leading-[40px] md:leading-[70px] text-gray-800 dark:text-gray-200 transition-colors duration-300"
          >
            Tola is a spirited girl from Ajah, Lagos, who loves to share her
            thoughts on the everyday moments that inspire her.
          </h2>
          <NuxtLink
            to="/about"
            class="font-italiana text-[24px] md:text-[30px] font-light relative w-fit text-gray-800 dark:text-gray-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#212122] dark:after:bg-[#f0f0f0] after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300"
          >
            Read more
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const splitText = ref(null);

onMounted(() => {
  const split = new SplitType(splitText.value, { types: 'chars' });

  gsap.set(split.chars, { opacity: 0.2 });

  let wordScroll = gsap.timeline({});

  wordScroll.to(split.chars, {
    opacity: 1,
    stagger: 0.5,
  });

  // Image trail effect - commented out
  /*
  const container = document.querySelector('.about');
  console.log('Container found:', container);

  const config = {
    imageCount: 3,
    imageLifeSpan: 1200,
    removalDelay: 50,
    mouseThreshold: 100,
    scrollThreshold: 50,
    idleCursorInterval: 500,
    inDuration: 750,
    outDuration: 750,
    inEasing: 'cubic-bezier(.07, .5, .5, 1)',
    outEasing: 'cubic-bezier(.87, .0, .13, 1)',
    maxTrailImages: 300,
  };

  const images = Array.from(
    { length: config.imageCount },
    (_, i) => `/images/about-${i + 1}.png`
  );

  const trail = [];
  let mouseX = 0,
    mouseY = 0,
    lastMouseX = 0,
    lastMouseY = 0;
  let isMoving = false,
    isCursorInContainer = 0;
  let lastRemovalTime = 0,
    lastSteadyImageTime = 0,
    lastScrollTime = 0;
  let isScrolling = false,
    scrollTicking = false;

  const isInContainer = (x, y) => {
    const rect = container.getBoundingClientRect();
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  };

  const setInitialMousePos = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    isCursorInContainer = isInContainer(mouseX, mouseY);
    document.removeEventListener('mousemove', setInitialMousePos);
  };
  document.addEventListener('mousemove', setInitialMousePos);
  const hasMovedEnough = (e) => {
    const distance = Math.sqrt(
      Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
    );
    return distance > config.mouseThreshold;
  };

  const createTrailImage = () => {
    if (!isCursorInContainer) return;

    const now = Date.now();
    if (isMoving && hasMovedEnough()) {
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      createImage();
      return;
    }

    if (!isMoving && now - lastSteadyImageTime > config.idleCursorInterval) {
      lastSteadyImageTime = now;
      createImage();
    }
  };

  const createImage = () => {
    // Remove oldest images if we exceed the maximum
    while (trail.length >= config.maxTrailImages) {
      const oldest = trail.shift();
      if (oldest.element && oldest.element.parentNode) {
        oldest.element.parentNode.removeChild(oldest.element);
      }
    }

    const img = document.createElement('img');
    img.classList.add('trail-image');

    const randomIndex = Math.floor(Math.random() * images.length);
    const rotation = (Math.random() - 0.5) * 50;
    img.src = images[randomIndex];
    
    console.log('Creating image:', img.src);

    const rect = container.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
    img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;

    container.appendChild(img);
    console.log('Image appended to container');

    setTimeout(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
    }, 10);

    trail.push({
      element: img,
      rotation: rotation,
      removeTime: Date.now() + config.imageLifeSpan,
    });
  };

  const createScrollTrailImage = () => {
    if (!isCursorInContainer) return;

    lastMouseX +=
      (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
    lastMouseY +=
      (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);

    createImage();

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  };

  const removeOldTrailImages = () => {
    const now = Date.now();
    if (now - lastRemovalTime < config.removalDelay && trail.length > 0) {
      return;
    }

    // Update last removal time
    lastRemovalTime = now;
    
    // Check for images that need removal
    while (trail.length > 0 && now > trail[0].removeTime) {
      const imgToRemove = trail.shift();
      console.log('Removing trail image, remaining:', trail.length);

      imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
      imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

      setTimeout(() => {
        if (imgToRemove.element && imgToRemove.element.parentNode) {
          imgToRemove.element.parentNode.removeChild(imgToRemove.element);
        }
      }, config.outDuration);
    }
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isCursorInContainer = isInContainer(mouseX, mouseY);

    if (isCursorInContainer) {
      isMoving = true;
      clearTimeout(window.moveTimeout);
      window.moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    }
  });
  window.addEventListener(
    'scroll',
    () => {
      isCursorInContainer = isInContainer(mouseX, mouseY);

      if (isCursorInContainer) {
        isMoving = true;
        lastMouseX += (Math.random() - 0.5) * 10;

        clearTimeout(window.scrollTimeout);

        window.scrollTimeout = setTimeout(() => {
          isMoving = false;
        }, 100);
      }
    },
    { passive: true }
  );

  window.addEventListener('scroll', () => {
    const now = Date.now();
    isScrolling = true;

    if (now - lastScrollTime < config.scrollThreshold) return;

    lastScrollTime = now;

    if (!scrollTicking) {
      requestAnimationFrame(() => {
        if (isScrolling) {
          createScrollTrailImage();
          scrollTicking = false;
        }
        scrollTicking = true;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  const animate = () => {
    createTrailImage();
    removeOldTrailImages();
    requestAnimationFrame(animate);
  };

  animate();
  */
});
</script>

<style scoped>
/* .about {
  place-self: auto;
  grid-area: auto;
  z-index: auto;
  float: none;
  flex-shrink: 1;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  width: 100%;
  max-width: 1282px;
  height: 1924;
  padding: 0 0 clamp(300px, 50vh, 900px);
} */

/* @media (max-width: 768px) {
  .about {
    padding: 0 0 300px;
  }
} */
.about {
  position: relative;
  overflow: hidden;
  min-height: 400px;
}
</style>

<style>
.trail-image {
  position: absolute;
  width: 200px;
  height: 200px;
  object-fit: cover;
  pointer-events: none;
  border-radius: 4px;
  will-change: transform;
  transform-origin: center;
}
</style>

<script>
// ScrollTrigger.create({
//   trigger: ".ffw",
//   start: "center center",
//   end: "+=2000",
//   pin: ".hero_contentended",
//   pinSpacing: true, // set to false
//   animation: wordScroll,
//   scrub: 1,
// });
</script>
