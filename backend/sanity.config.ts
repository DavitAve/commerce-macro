import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'commerce-macro-backend',

  projectId: 'wml7licf',
  dataset: 'backend',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
