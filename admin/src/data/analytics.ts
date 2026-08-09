export interface MonthlyRevenue {
  month: string
  revenue: number
  orders: number
}

export const monthlyRevenueData: MonthlyRevenue[] = [
  { month: 'Jan', revenue: 4500000, orders: 12 },
  { month: 'Feb', revenue: 5200000, orders: 15 },
  { month: 'Mar', revenue: 4800000, orders: 14 },
  { month: 'Apr', revenue: 6100000, orders: 18 },
  { month: 'May', revenue: 5500000, orders: 16 },
  { month: 'Jun', revenue: 7200000, orders: 21 },
  { month: 'Jul', revenue: 6800000, orders: 19 },
  { month: 'Aug', revenue: 4363000, orders: 6 },
]

export interface TopProduct {
  name: string
  sales: number
  revenue: number
}

export const topProducts: TopProduct[] = [
  { name: 'Resin Angel Girl', sales: 24, revenue: 8400000 },
  { name: 'Resin Girl In White Dress', sales: 20, revenue: 7300000 },
  { name: 'Resin General Figure', sales: 15, revenue: 4800000 },
  { name: 'Resin Soldier Advancing', sales: 18, revenue: 5940000 },
  { name: 'Resin Angel Girl In Ground', sales: 8, revenue: 3040000 },
]
