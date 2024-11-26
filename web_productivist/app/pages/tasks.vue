<script setup lang="ts">
const projectsOptions = ['default'];
const selectedProject = ref(projectsOptions[0])

</script>

<template>
  <section class="flex items-center justify-between mb-10">
    <!-- <div class="flex items-center gap-1">
        <p>Project:</p>
        <UButtonGroup size="sm" orientation="horizontal">
          <USelectMenu :options="projectsOptions" v-model="selectedProject" class="ring-transparent outline-transparent"/>
          <UButton icon="i-heroicons-plus" color="white"/>
        </UButtonGroup>
    </div> -->
    
    <div class="flex items-center gap-1">
        <UButton label="Constants" color="white" variant="outline"/>
        <UButton label="Filter" color="white" variant="outline"/>
      </div>
      <UButton label="New" color="black" icon="i-heroicons-plus"/>
  </section>
</template>