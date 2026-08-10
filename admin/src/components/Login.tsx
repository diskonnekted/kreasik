import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Lock, User, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(username, password)
    if (!success) {
      setError('Username atau password salah')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-3xl mb-6 shadow-lg">
            <span className="text-white font-heading font-bold text-4xl">K</span>
          </div>
          <h1 className="font-heading font-bold text-4xl text-foreground mb-2">Kreasik Admin</h1>
          <p className="text-body text-foreground/60">Masuk ke dashboard untuk mengelola toko</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-destructive/10 text-destructive text-body-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-2">
                Username
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-lg border bg-background text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-heading font-semibold py-3 rounded-lg
                       hover:bg-primary/90 transition-colors active:scale-[0.98]"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-body-xs text-foreground/40 text-center">
              Default: admin / kreasik2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
