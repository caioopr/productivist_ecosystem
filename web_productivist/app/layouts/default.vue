<template>
  <div class="container mx-auto max-w-6xl">
    <div>
      <h1>APP HEADER</h1>
    </div>
    <main class="my-10">
      <!-- slot for NuxtPage -->
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

// Link to Google Fonts
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
/* Set the font family for the entire site */
body {
  font-family: 'Inter';
}

/* Set the background color for the entire site */
body {
  @apply bg-white dark:bg-slate-900 
}
</style>