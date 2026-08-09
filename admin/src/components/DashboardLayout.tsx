import { useState, ReactNode } from 'react'
import { useAuth } from '../context/AuthContext'
import Sidebar from './Sidebar'
import { LogOut, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
          <h1 className="font-heading font-bold text-heading-sm text-foreground">
            {collapsed ? 'Admin' : 'Kreasik Admin Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <User size={16} className="text-primary" />
              </div>
              <span className="text-body-sm font-semibold text-foreground/70 hidden sm:block">Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-body-sm text-foreground/50 hover:text-destructive transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
