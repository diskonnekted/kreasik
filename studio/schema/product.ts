export const productSchema = {
  name: 'product',
  title: 'Produk',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 200 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi',
      type: 'blockContent',
    },
    {
      name: 'images',
      title: 'Gambar Produk',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
    },
    {
      name: 'price',
      title: 'Harga Dasar',
      type: 'number',
      description: 'Harga untuk varian pertama (misal: 1:64 Polos)',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'weight',
      title: 'Berat (gram)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'stock',
      title: 'Stok',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: '3D Print', value: '3d-print' },
          { title: 'Apparel', value: 'apparel' },
          { title: 'DIY Crafts', value: 'diy' },
          { title: 'Print Products', value: 'print' },
          { title: 'Junkyard', value: 'junkyard' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'Tanpa Badge', value: '' },
          { title: 'NEW', value: 'NEW' },
          { title: 'HOT', value: 'HOT' },
          { title: 'SALE', value: 'SALE' },
        ],
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: 'reviews',
      title: 'Jumlah Review',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Detail Produk',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'hasVariants',
      title: 'Memiliki Varian',
      type: 'boolean',
    },
    {
      name: 'variants',
      title: 'Konfigurasi Varian',
      type: 'object',
      initialValue: {},
      fields: [
        {
          name: 'scales',
          title: 'Pilihan Skala',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: '1:64', value: '1:64' },
              { title: '1:35', value: '1:35' },
              { title: '1:12', value: '1:12' },
              { title: '1:6', value: '1:6' },
            ],
          },
        },
        {
          name: 'scalesPrice',
          title: 'Tambahan Harga per Skala',
          type: 'object',
          fields: [
            { name: 's1_64', title: '1:64', type: 'number' },
            { name: 's1_35', title: '1:35', type: 'number' },
            { name: 's1_12', title: '1:12', type: 'number' },
            { name: 's1_6', title: '1:6', type: 'number' },
          ],
        },
        {
          name: 'finishes',
          title: 'Pilihan Pewarnaan',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'Polos', value: 'Polos' },
              { title: 'Hand Painted', value: 'Hand Painted' },
            ],
          },
        },
        {
          name: 'finishesPrice',
          title: 'Tambahan Harga per Pewarnaan',
          type: 'object',
          fields: [
            { name: 'polos', title: 'Polos', type: 'number' },
            { name: 'handPainted', title: 'Hand Painted', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'sizes',
      title: 'Ukuran Tersedia',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Untuk apparel: S, M, L, XL, XXL',
      options: {
        list: [
          { title: 'S', value: 'S' },
          { title: 'M', value: 'M' },
          { title: 'L', value: 'L' },
          { title: 'XL', value: 'XL' },
          { title: 'XXL', value: 'XXL' },
        ],
      },
    },
    {
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      description: 'Tampilkan produk di toko',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
}
