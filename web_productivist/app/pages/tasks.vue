<script setup lang="ts">
const projectsOptions = ['default'];
const selectedProject = ref(projectsOptions[0])

</script>

<template>
  <section class="flex items-center justify-between mb-10">
    <div class="flex items-center gap-1">
        <p>Project:</p>

        <UButtonGroup size="sm" orientation="horizontal">
          <USelectMenu :options="projectsOptions" v-model="selectedProject" :ui="{color: {white: { outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-black dark:focus:ring-white' }}}"/>
          <UButton icon="i-heroicons-plus" color="white"/>
        </UButtonGroup>

        <div class="flex items-center gap-1">
          <UButton label="Constants" color="white" variant="outline"/>
          <UButton label="Filter" color="white" variant="outline"/>
        </div>
    </div>
    
    
      <UButton label="New" color="black" icon="i-heroicons-plus"/>
  </section>
</template>

