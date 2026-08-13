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
  {
    id: 401, name: 'Bupati Dipayudha', slug: 'diy-bupati-dipayudha',
    description: 'Produk kerajinan tangan kreatif Bupati Dipayudha berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft bupati dipayudha.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 402, name: 'Dawet Ayu 2', slug: 'diy-dawet-ayu-2',
    description: 'Produk kerajinan tangan kreatif Dawet Ayu 2 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft dawet ayu 2.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 404, name: 'Dawet Ayu 5', slug: 'diy-dawet-ayu-5',
    description: 'Produk kerajinan tangan kreatif Dawet Ayu 5 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft dawet ayu 5.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 405, name: 'Dawet Ayu', slug: 'diy-dawet-ayu',
    description: 'Produk kerajinan tangan kreatif Dawet Ayu berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft dawet ayu.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 406, name: 'Panglima Besar', slug: 'diy-panglima-besar',
    description: 'Produk kerajinan tangan kreatif Panglima Besar berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft panglima besar.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 407, name: 'Patung Jendral Sudirman', slug: 'diy-patung-jendral-sudirman',
    description: 'Produk kerajinan tangan kreatif Patung Jendral Sudirman berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft patung jendral sudirman.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 408, name: 'Patung Sukarno', slug: 'diy-patung-sukarno',
    description: 'Produk kerajinan tangan kreatif Patung Sukarno berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft patung sukarno.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 409, name: 'Pengibaran Bendera Proklamasi 1945', slug: 'diy-pengibaran-bendera-proklamasi-1945',
    description: 'Produk kerajinan tangan kreatif Pengibaran Bendera Proklamasi 1945 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft pengibaran bendera proklamasi 1945.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 410, name: 'Piala Padel', slug: 'diy-piala-padel',
    description: 'Produk kerajinan tangan kreatif Piala Padel berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft piala padel.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 411, name: 'Plakat ADV', slug: 'diy-plakat-adv',
    description: 'Produk kerajinan tangan kreatif Plakat ADV berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat adv.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 412, name: 'Plakat Design Poster', slug: 'diy-plakat-design-poster',
    description: 'Produk kerajinan tangan kreatif Plakat Design Poster berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat design poster.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 413, name: 'Plakat Fatayat NU', slug: 'diy-plakat-fatayat-nu',
    description: 'Produk kerajinan tangan kreatif Plakat Fatayat NU berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat fatayat nu.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 414, name: 'Plakat Hari Koperasi', slug: 'diy-plakat-hari-koperasi',
    description: 'Produk kerajinan tangan kreatif Plakat Hari Koperasi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat hari koperasi.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 415, name: 'Plakat Kriya Kayu', slug: 'diy-plakat-kriya-kayu',
    description: 'Produk kerajinan tangan kreatif Plakat Kriya Kayu berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat kriya kayu.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 416, name: 'Plakat LKBB', slug: 'diy-plakat-lkbb',
    description: 'Produk kerajinan tangan kreatif Plakat LKBB berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat lkbb.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 417, name: 'Plakat Lomba Menyanyi', slug: 'diy-plakat-lomba-menyanyi',
    description: 'Produk kerajinan tangan kreatif Plakat Lomba Menyanyi berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat lomba menyanyi.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 418, name: 'Plakat MAN 2', slug: 'diy-plakat-man-2',
    description: 'Produk kerajinan tangan kreatif Plakat MAN 2 berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat man 2.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 419, name: 'Plakat PKL', slug: 'diy-plakat-pkl',
    description: 'Produk kerajinan tangan kreatif Plakat PKL berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat pkl.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 420, name: 'Plakat Rohis', slug: 'diy-plakat-rohis',
    description: 'Produk kerajinan tangan kreatif Plakat Rohis berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat rohis.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  },
  {
    id: 421, name: 'Plakat Smansabara', slug: 'diy-plakat-smansabara',
    description: 'Produk kerajinan tangan kreatif Plakat Smansabara berkualitas tinggi untuk koleksi dan pajangan dekorasi Anda.',
    price: 150000, weight: 300, stock: 20, category: 'diy', badge: 'NEW',
    images: ['/products/craft plakat smansabara.JPG'], rating: 5, reviews: 0,
    details: ["Material: Premium Resin/Wood","Handmade craftsmanship","Exclusive design"],
    hasVariants: false,
  }, finishes: ['Polos', 'Hand Painted'], finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 } },
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
