const fs = require('fs')
const path = require('path')
const { createClient } = require('@sanity/client')

// Load environment variables from .env.local manually
const envPath = path.join(__dirname, '.env.local')
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8')
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (match) {
      const key = match[1]
      let value = match[2] || ''
      if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
        value = value.substring(1, value.length - 1)
      }
      process.env[key] = value
    }
  })
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pgicrn8k'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_TOKEN || ''

const sanity = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Get products from localStorage
const products = [
  // Resin products
  {
    id: 13, name: 'Resin Angel Girl', slug: 'resin-angel-girl',
    description: 'Patung resin angel girl dengan detail halus. Karya seni resin berkualitas tinggi untuk para collector.',
    price: 250000, weight: 250, stock: 15, category: '3d-print', badge: 'NEW',
    images: ['/products/resin angel girl.png'], rating: 5, reviews: 12,
    details: ['Material: Resin Premium', 'Height: ~20cm', 'Weight: 250gr'],
    hasVariants: true,
    variants: {
      scales: ['1:64', '1:35', '1:12', '1:6'],
      scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishes: ['Polos', 'Hand Painted'],
      finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  },
  {
    id: 14, name: 'Resin Angel Girl In Ground', slug: 'resin-angel-girl-in-ground',
    description: 'Resin angel girl dengan base landscape. Karya seni resin dengan detail landscape yang memukau.',
    price: 280000, weight: 350, stock: 10, category: '3d-print', badge: 'NEW',
    images: ['/products/resin angel girl in ground.png'], rating: 5, reviews: 8,
    details: ['Material: Resin Premium', 'Height: ~25cm dengan base', 'Weight: 350gr'],
    hasVariants: true, variants: { scales: ['1:64', '1:35', '1:12', '1:6'], scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 }, finishes: ['Polos', 'Hand Painted'], finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 } },
  },
  {
    id: 15, name: 'Resin General Figure', slug: 'resin-general-figure',
    description: 'Figure general dengan armor detail. Perfect untuk display koleksi militer atau gaming.',
    price: 220000, weight: 300, stock: 20, category: '3d-print', badge: 'NEW',
    images: ['/products/resin general figure.png'], rating: 5, reviews: 15,
    details: ['Material: Resin Premium', 'Height: ~18cm', 'Weight: 300gr'],
    hasVariants: true, variants: { scales: ['1:64', '1:35', '1:12', '1:6'], scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 }, finishes: ['Polos', 'Hand Painted'], finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 } },
  },
  {
    id: 16, name: 'Resin Girl In White Dress', slug: 'resin-girl-in-white-dress',
    description: 'Resin girl in white dress yang elegan. Detail pakaian dan rambut sangat halus.',
    price: 265000, weight: 280, stock: 12, category: '3d-print', badge: 'NEW',
    images: ['/products/resin girl in white dress.png'], rating: 5, reviews: 20,
    details: ['Material: Resin Premium', 'Height: ~22cm', 'Weight: 280gr'],
    hasVariants: true, variants: { scales: ['1:64', '1:35', '1:12', '1:6'], scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 }, finishes: ['Polos', 'Hand Painted'], finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 } },
  },
  {
    id: 17, name: 'Resin Girl Sit', slug: 'resin-girl-sit',
    description: 'Resin figure girl duduk dengan pose natural. Cocok untuk desk display.',
    price: 240000, weight: 220, stock: 18, category: '3d-print', badge: 'NEW',
    images: ['/products/resin girl sit.png'], rating: 5, reviews: 10,
    details: ['Material: Resin Premium', 'Height: ~15cm', 'Weight: 220gr'],
    hasVariants: true, variants: { scales: ['1:64', '1:35', '1:12', '1:6'], scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 }, finishes: ['Polos', 'Hand Painted'], finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 } },
  },
  {
    id: 18, name: 'Resin Soldier Advancing', slug: 'resin-soldier-advancing',
    description: 'Figure soldier advancing dengan pose dinamis. Detail uniform dan senjata sempurna.',
    price: 230000, weight: 270, stock: 14, category: '3d-print', badge: 'NEW',
    images: ['/products/resin soldier advancing.png'], rating: 5, reviews: 18,
    details: ['Material: Resin Premium', 'Height: ~18cm', 'Weight: 270gr'],
    hasVariants: true, variants: { scales: ['1:64', '1:35', '1:12', '1:6'], scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 }, finishes: ['Polos', 'Hand Painted'], finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 } },
  },
  // Shirt products (simplified - no variants)
  {
    id: 100, name: 'Shirt Cant Slow Down', slug: 'shirt-cant-slow-down',
    description: 'T-shirt keren dengan desain Cant Slow Down. Cotton combed 30s premium.',
    price: 175000, weight: 180, stock: 30, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt cant slow down.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 101, name: 'Shirt Diablos Route 666', slug: 'shirt-diablos-route-666',
    description: 'T-shirt tema biker dengan desain Diablos Route 666.',
    price: 175000, weight: 180, stock: 25, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt diablos route 666.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 102, name: 'Shirt Full Throttle Baby', slug: 'shirt-full-throttle-baby',
    description: 'T-shirt Full Throttle Baby dengan desain eye-catching.',
    price: 175000, weight: 180, stock: 28, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt full throttle baby.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 103, name: 'Shirt Gimme Danger', slug: 'shirt-gimme-danger',
    description: 'T-shirt Gimme Danger klasik. Desain timeless.',
    price: 175000, weight: 180, stock: 35, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt gimme danger.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 104, name: 'Shirt Hard Work With Less Sleep', slug: 'shirt-hard-work-with-less-sleep',
    description: 'T-shirt motivasi Hard Work With Less Sleep.',
    price: 175000, weight: 180, stock: 32, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt hard work with less sleep.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 105, name: 'Shirt Hysteric Glamour', slug: 'shirt-hysteric-glamour',
    description: 'T-shirt Hysteric Glamour dengan desain stylish.',
    price: 175000, weight: 180, stock: 27, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt hysteric glamour.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 106, name: 'Shirt Keep Going', slug: 'shirt-keep-going',
    description: 'T-shirt Keep Going sederhana tapi powerful.',
    price: 175000, weight: 180, stock: 40, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt keep going.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 107, name: 'Shirt Life Begins After Coffee', slug: 'shirt-life-begins-after-coffee',
    description: 'T-shirt pecinta kopi Life Begins After Coffee.',
    price: 175000, weight: 180, stock: 45, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt life begins after coffee.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 108, name: 'Shirt Live For Victory', slug: 'shirt-live-for-victory',
    description: 'T-shirt Live For Victory penuh semangat.',
    price: 175000, weight: 180, stock: 33, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt live for victory.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 109, name: 'Shirt MER', slug: 'shirt-mer',
    description: 'T-shirt MER minimalis. Desain clean.',
    price: 175000, weight: 180, stock: 38, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt mer.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 110, name: 'Shirt Red Coffee', slug: 'shirt-red-coffee',
    description: 'T-shirt Red Coffee dengan nuansa merah.',
    price: 175000, weight: 180, stock: 29, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt red coffee.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 111, name: 'Shirt Ride To Live', slug: 'shirt-ride-to-live',
    description: 'T-shirt biker Ride To Live.',
    price: 175000, weight: 180, stock: 31, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt ride to live.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 112, name: 'Shirt Roadcrew Bad Rider With Good Engine', slug: 'shirt-roadcrew-bad-rider-with-good-engine',
    description: 'T-shirt Roadcrew Bad Rider With Good Engine.',
    price: 175000, weight: 180, stock: 26, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt roadcrew bad riderwith good engine.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 113, name: 'Shirt Skull Rider', slug: 'shirt-skull-rider',
    description: 'T-shirt Skull Rider dengan desain tengkorak.',
    price: 175000, weight: 180, stock: 34, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt skull rider.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 114, name: 'Shirt Small Engine Big Fun', slug: 'shirt-small-engine-big-fun',
    description: 'T-shirt Small Engine Big Fun warna gelap.',
    price: 175000, weight: 180, stock: 42, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt small engine big fun.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 115, name: 'Shirt Small Engine Big Fun White', slug: 'shirt-small-engine-big-fun-white',
    description: 'T-shirt Small Engine Big Fun versi putih.',
    price: 175000, weight: 180, stock: 37, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt small engine big fun white.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 116, name: 'Shirt We Are The Spark', slug: 'shirt-we-are-the-spark',
    description: 'T-shirt We Are The Spark. Jadilah percikan perubahan.',
    price: 175000, weight: 180, stock: 36, category: 'apparel', badge: 'NEW',
    images: ['/products/shirt we are the spark.png'], rating: 5, reviews: 0,
    details: ['Material: Cotton Combed 30s', 'Printing: DTF Premium', 'Weight: 180 GSM', 'Unisex fit S-XXL'],
    hasVariants: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
]

async function uploadImage(imgPath) {
  const absolutePath = path.join(__dirname, 'public', imgPath)
  if (!fs.existsSync(absolutePath)) {
    console.warn(`  File not found: ${absolutePath}`)
    return null
  }
  
  try {
    const stream = fs.createReadStream(absolutePath)
    const asset = await sanity.assets.upload('image', stream, {
      filename: path.basename(absolutePath)
    })
    return asset._id
  } catch (error) {
    console.error(`  Failed to upload image ${imgPath}:`, error.message)
    return null
  }
}

async function migrateProducts() {
  console.log('Migrating products to Sanity...')
  let created = 0
  let updated = 0

  for (const product of products) {
    const slug = product.slug

    // Check if product exists
    const existing = await sanity.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug })

    // Upload images to Sanity first
    const sanityImages = []
    for (let idx = 0; idx < product.images.length; idx++) {
      const imgPath = product.images[idx]
      console.log(`  Uploading image for ${product.name}: ${imgPath}...`)
      const assetId = await uploadImage(imgPath)
      if (assetId) {
        sanityImages.push({
          _key: idx.toString(),
          _type: 'image',
          asset: {
            _ref: assetId,
            _type: 'reference',
          },
        })
      }
    }

    const sanityProduct = {
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: slug },
      description: [{ _key: Date.now().toString(), _type: 'block', children: [{ _type: 'span', text: product.description }], markDefs: [] }],
      images: sanityImages,
      price: product.price,
      weight: product.weight,
      stock: product.stock,
      category: product.category,
      badge: product.badge || null,
      rating: product.rating,
      reviews: product.reviews,
      details: product.details,
      hasVariants: product.hasVariants,
      variants: product.hasVariants && product.variants ? {
        scales: product.variants.scales,
        scalesPrice: {
          s1_64: product.variants.scalesPrice['1:64'] || 0,
          s1_35: product.variants.scalesPrice['1:35'] || 0,
          s1_12: product.variants.scalesPrice['1:12'] || 0,
          s1_6: product.variants.scalesPrice['1:6'] || 0,
        },
        finishes: product.variants.finishes,
        finishesPrice: {
          polos: product.variants.finishesPrice['Polos'] || 0,
          handPainted: product.variants.finishesPrice['Hand Painted'] || 0,
        },
      } : null,
      sizes: product.sizes || null,
      isActive: true,
    }

    if (existing) {
      // Update existing
      await sanity.patch(existing._id).set(sanityProduct).execute()
      updated++
      console.log(`  Updated: ${product.name}`)
    } else {
      // Create new
      await sanity.create(sanityProduct)
      created++
      console.log(`  Created: ${product.name}`)
    }
  }

  console.log(`\nMigration complete!`)
  console.log(`Created: ${created}`)
  console.log(`Updated: ${updated}`)
}

migrateProducts().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
