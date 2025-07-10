<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import { formatDistance } from "date-fns";

const POST_QUERY = groq`*[_type == "blogType" && slug.current == $slug][0]`;
const { params } = useRoute();
const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
const { projectId, dataset } = useSanity().client.config();

const mainContent = ref<HTMLElement | null>(null);
const contentElements = ref<HTMLElement[]>([]);
const contentVisible = ref(false);

// Dark mode functionality
const { isDark } = useDarkMode();

const urlFor = (source: SanityImageSource) => {
  if (!projectId || !dataset) return null;
  return imageUrlBuilder({ projectId, dataset }).image(source);
};

// Function to format date as relative time (e.g. "2 days ago")
const getRelativeTime = (date: string) => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

onMounted(() => {
  setTimeout(() => {
    contentVisible.value = true;
  }, 1000);

  if (mainContent.value) {
    contentElements.value = Array.from(
      mainContent.value.children
    ) as HTMLElement[];

    if (contentElements.value.length > 0) {
      try {
        gsap.set(contentElements.value, {
          opacity: 0,
          y: 30,
        });

        gsap.to(contentElements.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => {
            contentVisible.value = true;
          },
        });
      } catch (error) {
        console.error("Animation error:", error);
        contentVisible.value = true;
      }
    } else {
      contentVisible.value = true;
    }
  } else {
    contentVisible.value = true;
  }
});
</script>

<template>
  <div class="bg-post min-h-screen pt-20 transition-colors duration-300"> 
    <main
      v-if="post"
      ref="mainContent"
      class="container mx-auto min-h-screen max-w-5xl p-8 flex flex-col gap-6"
      :class="{ 'force-visible': contentVisible }"
    >
      <!-- <a
        href="/"
        class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium flex items-center gap-1 w-fit transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Back to posts
      </a> -->

      <div
        v-if="post.image && urlFor(post.image)"
        class="overflow-hidden rounded-xl shadow-lg dark:shadow-2xl transition-shadow duration-300"
      >
        <img
          :src="urlFor(post.image)?.width(800).height(450).url()"
          :alt="post?.title"
          class="w-full object-cover aspect-video"
          width="800"
          height="450"
        />
      </div>

      <div class="flex flex-col gap-2">
        <h1
          v-if="post.title"
          class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-gray-100 font-italiana pt-6 md:pt-10 transition-colors duration-300"
        >
          {{ post.title }}
        </h1>
        <p v-if="post.publishedAt" class="text-sm md:text-base text-gray-500 dark:text-gray-400 font-[fantasy] transition-colors duration-300">
          {{ getRelativeTime(post.publishedAt) }}
        </p>
      </div>

      <div
        class="prose prose-sm md:prose-base lg:prose-lg max-w-none bg-white dark:bg-gray-800 p-4 md:p-8 rounded-xl shadow-sm dark:shadow-lg flex flex-col gap-4 transition-all duration-300"
      >
        <SanityContent v-if="post.content" :blocks="post.content" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.prose {
  @apply text-gray-700 dark:text-gray-300 transition-colors duration-300;
}

.prose h2 {
  @apply text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 md:mt-8 mb-3 md:mb-4 transition-colors duration-300;
}

.prose p {
  @apply my-3 md:my-4 leading-relaxed font-inter text-black dark:text-gray-200 transition-colors duration-300;
}

.prose a {
  @apply text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300;
}

.prose ul,
.prose ol {
  @apply my-4 ml-6;
}

.prose li {
  @apply mb-2;
}

.prose img {
  @apply rounded-lg shadow-sm dark:shadow-md my-6 transition-shadow duration-300;
}

.prose blockquote {
  @apply border-l-4 border-indigo-200 dark:border-indigo-600 pl-4 italic text-gray-600 dark:text-gray-400 my-6 transition-colors duration-300;
}

.prose h1,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply text-gray-800 dark:text-gray-100 transition-colors duration-300;
}

.prose strong {
  @apply text-gray-900 dark:text-gray-100 transition-colors duration-300;
}

.prose code {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded text-sm transition-colors duration-300;
}

.prose pre {
  @apply bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 transition-colors duration-300;
}

.prose pre code {
  @apply bg-transparent text-gray-800 dark:text-gray-200;
}

.force-visible,
.force-visible * {
  opacity: 1 !important;
  transform: none !important;
}

.bg-post {
  background-color: #f1e7e7;
  background-image: url('/images/blog-bg3.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

.dark .bg-post {
  background-color: #111111;
  background-image: url('/images/blog-bg3.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

@media (max-width: 768px) {
  .bg-post,
  .dark .bg-post {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
}
</style>
