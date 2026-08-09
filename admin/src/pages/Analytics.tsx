import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { monthlyRevenueData } from '../data/analytics'
import { topProducts } from '../data/analytics'
import { getOrders } from '../utils/storage'
import { formatCurrency } from '../components/ui'
import { TrendingUp, ShoppingCart, Package, Clock } from 'lucide-react'

const pieData = [
  { name: 'Terkirim', value: 1, color: '#16A34A' },
  { name: 'Dikirim', value: 1, color: '#7C3AED' },
  { name: 'Diproses', value: 1, color: '#2563EB' },
  { name: 'Menunggu', value: 2, color: '#EAB308' },
  { name: 'Batal', value: 1, color: '#DC2626' },
]

const orderStatusData = [
  { name: 'Menunggu', value: 2 },
  { name: 'Diproses', value: 1 },
  { name: 'Dikirim', value: 1 },
  { name: 'Terkirim', value: 1 },
  { name: 'Batal', value: 1 },
]

export default function AnalyticsPage() {
  const orders = getOrders()
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0)
  const totalOrders = orders.length
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
  const deliveryRate = totalOrders > 0
    ? ((orders.filter((o) => o.status === 'delivered').length / totalOrders) * 100).toFixed(0)
    : '0'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading font-bold text-heading-sm text-foreground">Analitik & Laporan</h1>
        <p className="text-body-sm text-foreground/50 mt-1">Statistik penjualan dan performa toko</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} className="text-primary" />
            </div>
            <span className="text-body-sm text-foreground/50">Total Pendapatan</span>
          </div>
          <p className="font-heading font-bold text-heading-md text-foreground">{formatCurrency(totalRevenue)}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <ShoppingCart size={20} className="text-accent" />
            </div>
            <span className="text-body-sm text-foreground/50">Total Pesanan</span>
          </div>
          <p className="font-heading font-bold text-heading-md text-foreground">{totalOrders}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Package size={20} className="text-secondary" />
            </div>
            <span className="text-body-sm text-foreground/50">Rata-rata/order</span>
          </div>
          <p className="font-heading font-bold text-heading-md text-foreground">{formatCurrency(avgOrderValue)}</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Clock size={20} className="text-success" />
            </div>
            <span className="text-body-sm text-foreground/50">Tingkat Pengiriman</span>
          </div>
          <p className="font-heading font-bold text-heading-md text-foreground">{deliveryRate}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 shadow-card">
          <h2 className="font-heading font-semibold text-heading-sm mb-6">Tren Pendapatan Bulanan</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0ECF2" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#881337' }} />
                <YAxis
                  tick={{ fontSize: 12, fill: '#881337' }}
                  tickFormatter={(v) => `Rp ${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#E11D48"
                  strokeWidth={3}
                  dot={{ fill: '#E11D48', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Status Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-card">
          <h2 className="font-heading font-semibold text-heading-sm mb-6">Distribusi Status Pesanan</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {orderStatusData.map((_, idx) => (
                    <Cell key={idx} fill={pieData[idx]?.color || '#94A3B8'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {orderStatusData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pieData[idx]?.color }} />
                <span className="text-caption text-foreground/60">{item.name} ({item.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-card">
        <h2 className="font-heading font-semibold text-heading-sm mb-6">Jumlah Pesanan per Bulan</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0ECF2" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#881337' }} />
              <YAxis tick={{ fontSize: 12, fill: '#881337' }} />
              <Tooltip
                formatter={(value: number) => [`${value} pesanan`, 'Pesanan']}
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #FECDD3',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              />
              <Bar dataKey="orders" fill="#2563EB" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="bg-white rounded-xl p-6 shadow-card">
        <h2 className="font-heading font-semibold text-heading-sm mb-4">Top Produk Berdasarkan Pendapatan</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">Produk</th>
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">Terjual</th>
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">Pendapatan</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, idx) => (
                <tr key={idx} className="border-b border-border/50 last:border-0">
                  <td className="py-3 text-body-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-body-xs font-bold text-foreground/30 w-5">{idx + 1}.</span>
                      {product.name}
                    </div>
                  </td>
                  <td className="py-3 text-body-sm text-foreground/70">{product.sales} unit</td>
                  <td className="py-3 text-body-sm font-heading font-bold text-primary">
                    {formatCurrency(product.revenue)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
