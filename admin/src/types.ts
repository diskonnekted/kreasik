export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  weight: number
  stock: number
  category: string
  badge?: string
  images: string[]
  rating: number
  reviews: number
  details: string[]
  hasVariants: boolean
  variants?: {
    scales: string[]
    scalesPrice: Record<string, number>
    finishes: string[]
    finishesPrice: Record<string, number>
  }
  createdAt: string
  updatedAt: string
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: string
  shippingCity: string
  shippingPostalCode: string
  items: OrderItem[]
  subtotal: number
  shippingCost: number
  total: number
  shippingMethod: string
  paymentMethod: string
  status: OrderStatus
  createdAt: string
}

export interface OrderItem {
  productId: number
  productName: string
  quantity: number
  price: number
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
  revenueChange: number
  ordersChange: number
  customersChange: number
}
