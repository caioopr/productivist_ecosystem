<script setup lang="ts">
import {type TaskI} from '~/interfaces/TaskI'
import { taskTableColumns as columns} from '~/utils/constants';

const projectsOptions = ['default'];
const selectedProject = ref(projectsOptions[0])

const expand = ref({
  openedRows: [],
  row: null
})





const tasks: TaskI[] = [{
  uuid: 'dhjksahlkjsjkasdflad2w1',
  id_position: 0,
  title: 'Finish assignments',
  description: 'Finish Linear Algebra and Machine Learning assignments',
  due_to: new Date().toUTCString(),
  status: 'in progress',
  dificulty: 'moderate',
  priority: 'urgent',
  tags: ['University', 'Programming', 'Assignment'],
  project: 'none',
  created_at: new Date().toUTCString(),
  finished_at: new Date().toUTCString()
},
{
  uuid: 'jksahlkjsjkasdflad2',
  id_position: 1,
  title: 'Finish assignments',
  description: 'Finish Linear Algebra and Machine Learning assignments',
  due_to: new Date().toUTCString(),
  status: 'in progress',
  dificulty: 'moderate',
  priority: 'urgent',
  tags: ['University', 'Programming', 'Assignment'],
  project: 'none',
  created_at: new Date().toUTCString(),
  finished_at: new Date().toUTCString()
}];

const selected = ref([tasks[1]])

function select(row: TaskI) {
  const index = selected.value.findIndex(item => item?.id_position === row.id_position)
  if (index === -1) {
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}

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

  <section>
    <UTable v-model:expand="expand" :rows="tasks" :columns="columns"  v-model="selected" @select="select">
      <template #expand="{ row }">
        <div class="p-4">
          <pre>{{ row }}</pre>
        </div>
      </template>
    </UTable>
  </section>
</template>

