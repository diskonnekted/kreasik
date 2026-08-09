import { Package, ShoppingBag, Users, TrendingUp } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { getProducts, getOrders } from '../utils/storage'
import { formatCurrency } from '../components/ui'
import { monthlyRevenueData } from '../data/analytics'
import { topProducts } from '../data/analytics'

const stats = [
  {
    label: 'Total Pendapatan',
    value: formatCurrency(44463000),
    icon: <TrendingUp size={24} />,
    change: '+12%',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    label: 'Total Pesanan',
    value: '91',
    icon: <ShoppingBag size={24} />,
    change: '+8%',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    label: 'Total Produk',
    value: String(getProducts().length),
    icon: <Package size={24} />,
    change: '+6',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    label: 'Total Pelanggan',
    value: '24',
    icon: <Users size={24} />,
    change: '+23%',
    color: 'text-success',
    bg: 'bg-success/10',
  },
]

const chartColors = ['#E11D48', '#FB7185', '#E11D48', '#FB7185', '#E11D48', '#FB7185', '#E11D48', '#2563EB']

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-body-xs font-semibold text-success bg-success/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-body-sm text-foreground/50 mb-1">{stat.label}</p>
            <p className="font-heading font-bold text-heading-md text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-card">
          <h2 className="font-heading font-semibold text-heading-sm mb-6">Pendapatan Bulanan</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0ECF2" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#881337' }} />
                <YAxis
                  tick={{ fontSize: 12, fill: '#881337' }}
                  tickFormatter={(v) => `Rp ${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #FECDD3',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
                <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                  {monthlyRevenueData.map((_, idx) => (
                    <Cell key={idx} fill={chartColors[idx % chartColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 shadow-card">
          <h2 className="font-heading font-semibold text-heading-sm mb-6">Produk Terlaris</h2>
          <div className="space-y-4">
            {topProducts.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-body-xs font-bold text-foreground/30 w-5">{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-body-sm font-semibold text-foreground truncate">{product.name}</p>
                  <p className="text-body-xs text-foreground/40">{product.sales} terjual</p>
                </div>
                <span className="text-body-sm font-heading font-bold text-primary">{formatCurrency(product.revenue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl p-6 shadow-card">
        <h2 className="font-heading font-semibold text-heading-sm mb-4">Pesanan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">ID Pesanan</th>
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">Pelanggan</th>
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold hidden sm:table-cell">Tanggal</th>
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">Total</th>
                <th className="text-left text-caption text-foreground/50 pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {getOrders()
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .slice(0, 5)
                .map((order) => (
                  <tr key={order.id} className="border-b border-border/50 last:border-0">
                    <td className="text-body-sm font-semibold text-accent py-3">{order.id}</td>
                    <td className="text-body-sm text-foreground/70 py-3">{order.customerName}</td>
                    <td className="text-body-sm text-foreground/50 py-3 hidden sm:table-cell">
                      {new Date(order.createdAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="text-body-sm font-heading font-bold text-foreground py-3">
                      {formatCurrency(order.total)}
                    </td>
                    <td className="py-3">
                      <span className={`text-caption font-semibold px-2 py-1 rounded-full ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'shipped' ? 'bg-purple-100 text-purple-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status === 'delivered' ? 'Terkirim' :
                         order.status === 'shipped' ? 'Dikirim' :
                         order.status === 'processing' ? 'Diproses' :
                         order.status === 'cancelled' ? 'Dibatalkan' :
                         'Menunggu'}
                      </span>
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
