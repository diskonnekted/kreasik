import { createClient, type SanityClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pgicrn8k'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const useCdn = process.env.NODE_ENV === 'production'

export const sanity: SanityClient = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion: '2024-01-01',
})

export const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export function urlFor(source: string | null) {
  if (!source) return undefined
  return imageBuilder.image(source)
}
