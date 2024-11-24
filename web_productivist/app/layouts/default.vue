<template>
  <div class="container mx-auto max-w-7xl">
    <AppHeader />
    <main class="my-10 mx-20">
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
  @apply bg-white dark:bg-black 
}
</style>