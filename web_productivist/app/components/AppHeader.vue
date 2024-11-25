<template>
  <header class="flex justify-between items-center mt-10 mx-10">
      <NuxtLink to="/" class="text-xl font-bold">
        Productivist
      </NuxtLink>

      <div class="hidden md:flex">
        <UHorizontalNavigation :links="links" :ui="{active: 'text-gray-900 dark:text-white after:white dark:after:bg-white after:rounded-full'}" class="border-b border-gray-200 dark:border-gray-800 " />
      </div>

      <div class="flex flex-row gap-1.5 items-center">
      <div class="flex items-center">
        <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

          <template #account="{ item }">
            <div class="text-left">
              <p>
                Signed in as
              </p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
          </template>
        </UDropdown>
      </div>

      <div class="flex md:hidden">
        <UButton icon="i-heroicons-bars-3" color="white"  @click="isOpen = true" />

        <USlideover v-model="isOpen" :ui="{background: 'bg-white dark:bg-black' }" :overlay="false">
          <div class="p-4 flex-1">
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-x-mark-20-solid"
              class="flex sm:hidden absolute end-5 top-5 z-10"
              square
              padded
              @click="isOpen = false"
            />
            <div class="mt-10">
              <UVerticalNavigation :links="links" />
            </div>
            <Placeholder class="h-full" />
          </div>
        </USlideover>
      </div>
      </div>
    </header>
</template>


<script setup lang="ts">
const isOpen = ref(false);
const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
];



const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Tasks',
  icon: 'i-heroicons-list-bullet',
  to: '/tasks'
},
{
  label: 'Timers',
  icon: 'i-heroicons-clock',
  to: '/timers'
}
  , {
  label: 'Calendar',
  icon: 'i-heroicons-calendar-date-range',
  to: '/calendar'
}
,{
  label: 'Statistics',
  icon: 'i-heroicons-chart-bar',
  to: '/statistics'
}
  , {
  label: 'Notes',
  icon: 'i-heroicons-folder',
  to: '/notes'
}];
</script>
