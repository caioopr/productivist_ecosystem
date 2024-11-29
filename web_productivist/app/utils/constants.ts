export const taskTableColumns = [
  {
    label: 'id',
    key: 'id_position',
  },
  {
    label: 'title',
    key: 'title',
  },
  {
    label: 'status',
    key: 'status',
  },
  {
    label: 'dificulty',
    key: 'dificulty',
  },
  {
    label: 'priority',
    key: 'priority',
  },
  {
    label: 'due to',
    key: 'due_to',
  },
  {
    label: 'tags',
    key: 'tags',
  },
  {
    label: 'created at',
    key: 'created_at',
  },
];

// Actions
const actions = [
  [
    {
      key: 'completed',
      label: 'Completed',
      icon: 'i-heroicons-check',
    },
  ],
  [
    {
      key: 'uncompleted',
      label: 'In Progress',
      icon: 'i-heroicons-arrow-path',
    },
  ],
];

const items = (row: any) => [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row.id),
    },
    {
      label: 'Duplicate',
      icon: 'i-heroicons-document-duplicate-20-solid',
    },
  ],
  [
    {
      label: 'Archive',
      icon: 'i-heroicons-archive-box-20-solid',
    },
    {
      label: 'Move',
      icon: 'i-heroicons-arrow-right-circle-20-solid',
    },
  ],
  [
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
    },
  ],
];

// Filters
const taskStatus = [
  {
    key: 'not_started',
    label: 'Not Started',
    value: false,
  },
  {
    key: 'in_progress',
    label: 'In Progress',
    value: false,
  },
  {
    key: 'completed',
    label: 'Completed',
    value: true,
  },
];
