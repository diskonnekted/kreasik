import { Product, Order } from '../types'
import { initialProducts } from '../data/products'
import { sampleOrders } from '../data/orders'

const PRODUCTS_KEY = 'kreasik_admin_products'
const ORDERS_KEY = 'kreasik_admin_orders'

export function getProducts(): Product[] {
  const stored = localStorage.getItem(PRODUCTS_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return initialProducts
    }
  }
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts))
  return initialProducts
}

export function saveProducts(products: Product[]): void {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
}

export function getOrders(): Order[] {
  const stored = localStorage.getItem(ORDERS_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return sampleOrders
    }
  }
  localStorage.setItem(ORDERS_KEY, JSON.stringify(sampleOrders))
  return sampleOrders
}

export function saveOrders(orders: Order[]): void {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
}
