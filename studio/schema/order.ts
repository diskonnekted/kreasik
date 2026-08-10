export const orderSchema = {
  name: 'order',
  title: 'Pesanan',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'ID Pesanan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customerName',
      title: 'Nama Pelanggan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customerEmail',
      title: 'Email Pelanggan',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'customerPhone',
      title: 'No. HP Pelanggan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shippingAddress',
      title: 'Alamat Pengiriman',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shippingCity',
      title: 'Kota',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shippingPostalCode',
      title: 'Kode Pos',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Item Pesanan',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productName', title: 'Nama Produk', type: 'string' },
            { name: 'productId', title: 'ID Produk', type: 'number' },
            { name: 'quantity', title: 'Jumlah', type: 'number' },
            { name: 'price', title: 'Harga', type: 'number' },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'subtotal',
      title: 'Subtotal',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'shippingCost',
      title: 'Biaya Pengiriman',
      type: 'number',
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'shippingMethod',
      title: 'Metode Pengiriman',
      type: 'string',
    },
    {
      name: 'paymentMethod',
      title: 'Metode Pembayaran',
      type: 'string',
      options: {
        list: [
          { title: 'QRIS', value: 'QRIS' },
          { title: 'Transfer Bank', value: 'Transfer Bank' },
        ],
      },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Menunggu', value: 'pending' },
          { title: 'Diproses', value: 'processing' },
          { title: 'Dikirim', value: 'shipped' },
          { title: 'Terkirim', value: 'delivered' },
          { title: 'Dibatalkan', value: 'cancelled' },
        ],
      },
      initialValue: 'pending',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Catatan',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'orderId',
      subtitle: 'customerName',
    },
  },
}
