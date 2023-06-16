import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'wml7licf',
  dataset: 'backend',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-06-16',
  token:
    'skvphV13QoutFgdw7zju7JsdYEbQhhK1X9fe1S9EUlHk0UCvmVt8crHLhJt0D1va0ajJHAiTZGar0P49syR77kTtcYgurGwcyYO2GZPKigFSJ6wcaoYLNlVQZNEsqFgoQGZQVK0kx0qhf3gJmrjuH3YfDNLGFpeyTWEsoPsuEo1kWZmXqvxo', // Only if you want to update content with the client
})
