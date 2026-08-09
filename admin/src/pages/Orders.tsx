import { useState } from 'react'
import { ShoppingBag, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { getOrders, saveOrders } from '../utils/storage'
import { Order } from '../types'
import { formatCurrency, formatDate, getStatusColor, getStatusLabel } from '../components/ui'

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(() => getOrders())
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const filteredOrders = orders
    .filter((o) => {
      const matchSearch =
        o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.id.toLowerCase().includes(searchQuery.toLowerCase())
      const matchStatus = statusFilter === 'all' || o.status === statusFilter
      return matchSearch && matchStatus
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    setOrders(updated)
    saveOrders(updated)
  }

  const orderStats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === 'pending').length,
    processing: orders.filter((o) => o.status === 'processing').length,
    shipped: orders.filter((o) => o.status === 'shipped').length,
    delivered: orders.filter((o) => o.status === 'delivered').length,
    cancelled: orders.filter((o) => o.status === 'cancelled').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading font-bold text-heading-sm text-foreground">Manajemen Pesanan</h1>
        <p className="text-body-sm text-foreground/50 mt-1">Kelola semua pesanan pelanggan</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-card text-center">
          <p className="text-2xl font-heading font-bold text-foreground">{orderStats.total}</p>
          <p className="text-caption text-foreground/50">Total</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card text-center">
          <p className="text-2xl font-heading font-bold text-yellow-600">{orderStats.pending}</p>
          <p className="text-caption text-foreground/50">Menunggu</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card text-center">
          <p className="text-2xl font-heading font-bold text-blue-600">{orderStats.processing}</p>
          <p className="text-caption text-foreground/50">Diproses</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card text-center">
          <p className="text-2xl font-heading font-bold text-purple-600">{orderStats.shipped}</p>
          <p className="text-caption text-foreground/50">Dikirim</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card text-center">
          <p className="text-2xl font-heading font-bold text-green-600">{orderStats.delivered}</p>
          <p className="text-caption text-foreground/50">Terkirim</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card text-center">
          <p className="text-2xl font-heading font-bold text-red-600">{orderStats.cancelled}</p>
          <p className="text-caption text-foreground/50">Batal</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pesanan atau pelanggan..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">Semua Status</option>
          <option value="pending">Menunggu</option>
          <option value="processing">Diproses</option>
          <option value="shipped">Dikirim</option>
          <option value="delivered">Terkirim</option>
          <option value="cancelled">Dibatalkan</option>
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center shadow-card">
            <ShoppingBag size={40} className="mx-auto text-foreground/20 mb-3" />
            <p className="text-body-sm text-foreground/40">Tidak ada pesanan ditemukan</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-card overflow-hidden">
              {/* Order Header */}
              <div
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 cursor-pointer"
                onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-body-sm font-heading font-bold text-accent">{order.id}</span>
                    <span className={`text-caption font-semibold px-2 py-0.5 rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                  </div>
                  <p className="text-body-sm text-foreground/70">{order.customerName}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-body-sm text-foreground/50 hidden md:block">
                    {formatDate(order.createdAt)}
                  </span>
                  <span className="font-heading font-bold text-primary">{formatCurrency(order.total)}</span>
                  {expandedOrder === order.id ? (
                    <ChevronUp size={16} className="text-foreground/40" />
                  ) : (
                    <ChevronDown size={16} className="text-foreground/40" />
                  )}
                </div>
              </div>

              {/* Order Details */}
              {expandedOrder === order.id && (
                <div className="border-t border-border p-5 space-y-4 bg-background/30">
                  {/* Items */}
                  <div>
                    <h4 className="text-body-xs font-semibold text-foreground/50 mb-2">ITEM PESANAN</h4>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-body-sm">
                          <span className="text-foreground/70">{item.productName} x{item.quantity}</span>
                          <span className="font-semibold text-foreground">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div>
                    <h4 className="text-body-xs font-semibold text-foreground/50 mb-2">PENGIRIMAN</h4>
                    <p className="text-body-sm text-foreground/70">{order.shippingAddress}</p>
                    <p className="text-body-sm text-foreground/70">{order.shippingCity}, {order.shippingPostalCode}</p>
                    <p className="text-body-xs text-foreground/40 mt-1">{order.shippingMethod}</p>
                  </div>

                  {/* Payment */}
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-foreground/50">Pembayaran: {order.paymentMethod}</span>
                    <span className="text-body-sm text-foreground/50">Total: {formatCurrency(order.total)}</span>
                  </div>

                  {/* Status Change */}
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <span className="text-body-xs font-semibold text-foreground/50">Ubah Status:</span>
                    {(['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(order.id, status)}
                        className={`text-caption font-semibold px-3 py-1 rounded-full transition-colors ${
                          order.status === status
                            ? getStatusColor(status)
                            : 'bg-muted text-foreground/50 hover:bg-muted/80'
                        }`}
                      >
                        {getStatusLabel(status)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
