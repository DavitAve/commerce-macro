export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'User name',
      type: 'string',
      required: true,
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      required: true,
    },
  ],
}
