import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {blockContent} from './schema/blockContent'
import {productSchema} from './schema/product'
import {orderSchema} from './schema/order'

export default defineConfig({
  name: 'default',
  title: 'Kreasik',

  projectId: 'pgicrn8k',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [blockContent, productSchema, orderSchema],
  },
})
