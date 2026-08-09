import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AUTH_KEY = 'kreasik_admin_auth'
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'kreasik2025'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function getStoredAuth(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return localStorage.getItem(AUTH_KEY) === 'true'
  } catch {
    return false
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(getStoredAuth)

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      try {
        localStorage.setItem(AUTH_KEY, 'true')
      } catch {}
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    try {
      localStorage.removeItem(AUTH_KEY)
    } catch {}
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
