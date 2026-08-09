import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart3,
  Menu,
  X,
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'products', label: 'Produk', icon: <Package size={20} /> },
  { id: 'orders', label: 'Pesanan', icon: <ShoppingBag size={20} /> },
  { id: 'analytics', label: 'Analitik', icon: <BarChart3 size={20} /> },
]

export default function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentPath = location.pathname

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-card"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 bg-white border-r border-border flex flex-col
                    transition-all duration-300
                    ${collapsed ? 'w-20' : 'w-64'}
                    ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-border flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-heading font-bold text-lg">K</span>
          </div>
          {!collapsed && (
            <span className="font-heading font-bold text-xl text-foreground">Kreasik</span>
          )}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.id === 'dashboard'
                ? currentPath === '/' || currentPath === '/dashboard'
                : currentPath === `/${item.id}`
            return (
              <Link
                key={item.id}
                to={`/${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                          ${isActive
                            ? 'bg-primary text-white'
                            : 'text-foreground/60 hover:bg-background hover:text-foreground'
                          }`}
                title={collapsed ? item.label : undefined}
              >
                {item.icon}
                {!collapsed && <span className="font-body font-semibold text-body-sm">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center gap-2 p-4 border-t border-border text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          <Menu size={18} />
          {!collapsed && <span className="text-body-xs">Collapse</span>}
        </button>
      </aside>
    </>
  )
}
