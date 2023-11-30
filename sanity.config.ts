import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {presentationTool} from '@sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'Sanity Live Preview',

  projectId: 'mhzu4gny',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    presentationTool({
      previewUrl: 'http://localhost:3000',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
