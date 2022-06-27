export const user = {
  name: 'user',
  description: 'User information.',
  options: [
    {
      name: 'summary',
      description: 'User summary.',
      type: 1,
      options: [
        {
          type: 6,
          name: 'user',
          description: 'user',
          required: true,
        },
      ],
    },
    {
      name: 'predictions',
      description: 'List predictions.',
      type: 1,
      options: [
        {
          type: 6,
          name: 'user',
          description: 'user',
          required: true,
        },
      ],
    },
  ],
};