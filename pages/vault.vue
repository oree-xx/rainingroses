<template>
  <div
    class="min-h-screen bg-[#E6E3DC] dark:bg-[#1a1a1a] py-[8rem] px-4 sm:px-6 lg:px-8 font-italiana rounded-b-[30px] md:rounded-b-[60px] transition-colors duration-300"
  >
    <!-- Header section with welcome message and image -->
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-8 pb-12"
      >
        <div class="w-full md:w-1/3"> 
          <div
            ref="imageContainer"
            class="rounded-lg max-w-xs mx-auto shadow-lg overflow-hidden"
          >
            <img
              ref="welcomeImage"
              src="/images/tola.png"
              alt="Welcome"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full md:w-2/3 space-y-4">
          <div class="border-b border-gray-300 dark:border-gray-600 pb-4 mb-8 transition-colors duration-300">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 ms-txt overflow-hidden">Welcome to My Book Vault!</h1>
            <div ref="headerLine" class="h-0.5 w-16 my-4 bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300 ms-txt overflow-hidden">
            Inside, you'll discover a delightful mix of Romance, Thrillers,
            Drama, Domestic Fiction, and Educational Books. Enjoy browsing
            through the stories waiting to sweep you off your feet!
          </p>
          <p class="text-lg mt-4 text-gray-700 dark:text-gray-300 transition-colors duration-300 ms-txt overflow-hidden">Thanks for visiting, and happy reading!</p>
        </div>
      </div>
    </div>

    <!-- Book collections in simple text grid -->
    <div class="py-12 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div ref="booksGrid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-center">
          <div class="book-title">THE LIST</div>
          <div class="book-title">WAHALA</div>
          <div class="book-title">MY SISTER THE SERIAL KILLER</div>
          <div class="book-title">A BROKEN PEOPLES PLAYLIST</div>
          <div class="book-title">STAY WITH ME</div>
          <div class="book-title">YINKA WHERE IS YOUR HUSBAND</div>
          <div class="book-title">UNDER THE UDALA TREES</div>
          <div class="book-title">HIS ONLY WIFE</div>
          <div class="book-title">SUCH A FUN AGE</div>
          <div class="book-title">THE FISHERMEN</div>
          <div class="book-title">THE GIRL WITH THE LOUDING VOICE</div>
          <div class="book-title">THE SWEETEST REMEDY</div>
          <div class="book-title">LOVE IN COLOR</div>
          <div class="book-title">TIES THAT TETHER</div>
          <div class="book-title">HOME GOING</div>
          <div class="book-title">SANKOFA</div>
          <div class="book-title">THE MAID</div>
          <div class="book-title">THE DEATH OF VIVEK OJI</div>
          <div class="book-title">PEOPLE WE MEET ON VACATION</div>
          <div class="book-title">THE THING AROUND YOUR NECK</div>
          <div class="book-title">GETTING TO HAPPY</div>
          <div class="book-title">ALL ABOUT LOVE</div>
          <div class="book-title">BLACK CAKE</div>
          <div class="book-title">THE SEX LIVES OF AFRICAN WOMEN</div>
          <div class="book-title">THEN SHE WAS GONE</div>
          <div class="book-title">THE VANISHING HALF</div>
          <div class="book-title">NEVER LIE</div>
          <div class="book-title">THE COWORKER</div>
          <div class="book-title">WARD D</div>
          <div class="book-title">THE HOUSEMAIDS SECRET</div>
          <div class="book-title">LESSONS IN CHEMISTRY</div>
          <div class="book-title">THE MYSTERY GUEST</div>
          <div class="book-title">BEFORE I GO TO SLEEP</div>
          <div class="book-title">IT ENDS WITH US</div>
          <div class="book-title">COUNTERFEIT</div>
          <div class="book-title">THE SILENT PATIENT</div>
          <div class="book-title">DO EPIC SHIT</div>
          <div class="book-title">REMINDERS OF HIM</div>
          <div class="book-title">NEARLY ALL THE MEN IN LAGOS ARE MAD</div>
        </div>
      </div>
    </div>

    <!-- Additional book categories -->
    <div class="pb-12 transition-colors duration-300">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8">
          <div class="border-b border-gray-300 dark:border-gray-600 pb-4 mb-8 transition-colors duration-300">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 ms-txt overflow-hidden">More Favorites</h2>
            <div ref="favoritesLine" class="w-16 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mt-4 transition-colors duration-300"></div>
          </div>
        </div>
        <div ref="favoritesGrid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-center">
          <div class="book-title">EDUCATED</div>
          <div class="book-title">BECOMING</div>
          <div class="book-title">THE SEVEN HUSBANDS OF EVELYN HUGO</div>
          <div class="book-title">WHERE THE CRAWDADS SING</div>
          <div class="book-title">CIRCE</div>
          <div class="book-title">THE SONG OF ACHILLES</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';
import { SplitText } from "gsap/SplitText";

// Refs for animations
const imageContainer = ref(null);
const welcomeImage = ref(null);
const headerLine = ref(null);
const favoritesLine = ref(null);
const booksGrid = ref(null);
const favoritesGrid = ref(null);

onMounted(() => {
  gsap.registerPlugin(SplitText);

  // Image reveal animation
  if (imageContainer.value && welcomeImage.value) {
    // Set initial clip path to hide the image and scale
    gsap.set(welcomeImage.value, {
      clipPath: "inset(100% 0 0 0)",
      scale: 1.1
    });

    // Animate the clip path to reveal the image from top to bottom
    gsap.to(welcomeImage.value, {
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.3
    });
  }

  // Header line animation
  if (headerLine.value) {
    gsap.set(headerLine.value, {
      scaleX: 0,
      transformOrigin: "left center"
    });

    gsap.to(headerLine.value, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.2
    });
  }

  // Favorites line animation
  if (favoritesLine.value) {
    gsap.set(favoritesLine.value, {
      scaleX: 0,
      transformOrigin: "center center"
    });

    gsap.to(favoritesLine.value, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 2.5
    });
  }

  // Text animations using SplitText
  const splitText = new SplitText(".ms-txt", {
    type: 'lines',
    mask: "line",
    onSplit: (self) => {
      gsap.from(self.lines, {
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.1,
      });
    }
  });

  // Book titles animation
  if (booksGrid.value) {
    const bookTitles = booksGrid.value.querySelectorAll('.book-title');
    gsap.set(bookTitles, {
      opacity: 0,
      y: 30
    });

    gsap.to(bookTitles, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.05,
      delay: 1.0
    });
  }

  // Favorites grid animation
  if (favoritesGrid.value) {
    const favoritesTitles = favoritesGrid.value.querySelectorAll('.book-title');
    gsap.set(favoritesTitles, {
      opacity: 0,
      y: 30
    });

    gsap.to(favoritesTitles, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 3.0
    });
  }
});
</script>

<style scoped>
.book-title {
  padding: 1rem 0.5rem;
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #374151;
  border-radius: 0.25rem;
}

.dark .book-title {
  color: #d1d5db;
}

.book-title:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.dark .book-title:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Simple grid layout for book titles */
.grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
}

.dark .grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}
</style>
