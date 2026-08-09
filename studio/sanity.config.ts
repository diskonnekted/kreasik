import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Kreasik',

  projectId: 'pgicrn8k',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [],
  },
})
