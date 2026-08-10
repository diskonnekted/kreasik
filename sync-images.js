const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const sanity = createClient({
  projectId: 'pgicrn8k',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN || 'skdFlUL7QpDOVV1hBo7oVjgDwDi8YUDhPVbllKbT6jRSYTX7zQylu8Q9IV9ddxiT96E2Y0ZAJHpm6JQPiHrhJwG2YXPie7aLsp3wrV9uYz9vLWtROzS9epinBFfjxagOJ4RTyUSktiVgu0hAlsBZppq8HWcbytIC5yCBfr4qAOAzcmgiQSbU',
})

// Hardcoded mapping based on products.ts
const slugToImageMap = {
  'resin-angel-girl': 'resin angel girl.png',
  'resin-angel-girl-in-ground': 'resin angel girl in ground.png',
  'resin-general-figure': 'resin general figure.png',
  'resin-girl-in-white-dress': 'resin girl in white dress.png',
  'resin-girl-sit': 'resin girl sit.png',
  'resin-soldier-advancing': 'resin soldier advancing.png',
  'shirt-cant-slow-down': 'shirt cant slow down.png',
  'shirt-diablos-route-666': 'shirt diablos route 666.png',
  'shirt-full-throttle-baby': 'shirt full throttle baby.png',
  'shirt-gimme-danger': 'shirt gimme danger.png',
  'shirt-hard-work-with-less-sleep': 'shirt hard work with less sleep.png',
  'shirt-hysteric-glamour': 'shirt hysteric glamour.png',
  'shirt-keep-going': 'shirt keep going.png',
  'shirt-life-begins-after-coffee': 'shirt life begins after coffee.png',
  'shirt-live-for-victory': 'shirt live for victory.png',
  'shirt-mer': 'shirt mer.png',
  'shirt-red-coffee': 'shirt red coffee.png',
  'shirt-ride-to-live': 'shirt ride to live.png',
  'shirt-roadcrew-bad-rider-with-good-engine': 'shirt roadcrew bad riderwith good engine.png',
  'shirt-skull-rider': 'shirt skull rider.png',
  'shirt-small-engine-big-fun': 'shirt small engine big fun.png',
  'shirt-small-engine-big-fun-white': 'shirt small engine big fun white.png',
  'shirt-we-are-the-spark': 'shirt we are the spark.png',
}

const imagesPath = path.join(__dirname, 'public', 'products')

console.log('Found', Object.keys(slugToImageMap).length, 'products with images\n')

async function uploadImage(filename) {
  const filePath = path.join(imagesPath, filename)
  
  if (!fs.existsSync(filePath)) {
    console.log('✗ File not found:', filename)
    return null
  }

  const buffer = fs.readFileSync(filePath)
  
  try {
    // Create image asset
    const imageAsset = await sanity.create({
      _type: 'sanity.imageAsset',
      _id: 'image-' + filename.replace(/[^a-zA-Z0-9]/g, '-'),
      contentType: 'image/png',
      url: 'data:image/png;base64,' + buffer.toString('base64'),
    })
    
    console.log('✓ Uploaded:', filename)
    
    // Create the image reference with metadata
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id
      },
      hotspot: null,
      crop: null
    }
  } catch (error) {
    console.error('✗ Error uploading', filename, ':', error.message)
    return null
  }
}

async function updateProduct(slug, image) {
  try {
    const products = await sanity.fetch(
      '*[_type == "product" && slug.current == $slug][0]',
      { slug }
    )

    if (!products) {
      console.log('  Product not found:', slug)
      return false
    }

    const productId = products._id
    
    await sanity.patch(productId).set({
      images: image ? [image] : []
    }).commit()
    
    console.log('  ✓ Updated:', slug)
    return true
  } catch (error) {
    console.error('  ✗ Error updating', slug, ':', error.message)
    return false
  }
}

async function syncAll() {
  let uploaded = 0
  let updated = 0
  let failed = 0

  for (const [slug, filename] of Object.entries(slugToImageMap)) {
    console.log('\nProcessing:', slug)
    
    const image = await uploadImage(filename)
    
    if (image) {
      uploaded++
      const success = await updateProduct(slug, image)
      if (success) {
        updated++
      }
    } else {
      failed++
    }
  }

  console.log('\n\n=== Sync Complete ===')
  console.log('Uploaded:', uploaded)
  console.log('Updated:', updated)
  console.log('Failed:', failed)
}

syncAll().catch(console.error)
