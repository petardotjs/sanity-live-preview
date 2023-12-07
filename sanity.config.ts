import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {presentationTool} from '@sanity/presentation'
import {table} from '@sanity/table'
import {codeInput} from '@sanity/code-input'

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
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
