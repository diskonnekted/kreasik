'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, ChevronRight, ChevronDown, Check, Loader2, Truck, MapPin } from 'lucide-react'

interface Province {
  province_id: string
  province: string
}

interface City {
  city_id: string
  city_name: string
  province: string
}

interface ShippingService {
  name: string
  cost: number
  etd: string
}

interface ShippingResult {
  courier: string
  services: ShippingService[]
}

interface ShippingCalculatorProps {
  defaultWeight?: number
  onShippingSelect?: (cost: number, etd: string, courier: string, service: string) => void
}

export default function ShippingCalculator({ defaultWeight = 1000, onShippingSelect }: ShippingCalculatorProps) {
  const [provinces, setProvinces] = useState<Province[]>([])
  const [cities, setCities] = useState<City[]>([])

  const [originProvince, setOriginProvince] = useState<Province | null>(null)
  const [destProvince, setDestProvince] = useState<Province | null>(null)
  const [originCity, setOriginCity] = useState<City | null>(null)
  const [destCity, setDestCity] = useState<City | null>(null)

  const [weight, setWeight] = useState(String(defaultWeight))
  const [results, setResults] = useState<ShippingResult[]>([])
  const [loading, setLoading] = useState(false)
  const [citiesLoading, setCitiesLoading] = useState(false)
  const [selectedService, setSelectedService] = useState<{ cost: number; etd: string; courier: string; service: string } | null>(null)

  // Load provinces on mount
  useEffect(() => {
    loadProvinces()
  }, [])

  // Auto-select Banjarnegara as origin when provinces are loaded
  useEffect(() => {
    if (provinces.length > 0 && !originProvince) {
      const jawaTengah = provinces.find((p) => p.province === 'Jawa Tengah')
      if (jawaTengah) {
        setOriginProvince(jawaTengah)
        loadCities(jawaTengah.province_id)
      }
    }
  }, [provinces, originProvince])

  // Auto-select Banjarnegara city when cities are loaded
  useEffect(() => {
    if (cities.length > 0 && !originCity) {
      const banjarnegara = cities.find((c) => c.city_name.toLowerCase().includes('banjarnegara'))
      if (banjarnegara) {
        setOriginCity(banjarnegara)
      }
    }
  }, [cities, originCity])

  const loadProvinces = async () => {
    try {
      const res = await fetch('/api/shipping?action=provinces')
      const data = await res.json()
      setProvinces(data)
    } catch (error) {
      console.error('Failed to load provinces:', error)
    }
  }

  const loadCities = async (provinceId: string) => {
    setCitiesLoading(true)
    try {
      const res = await fetch(`/api/shipping?action=cities&province=${provinceId}`)
      const data = await res.json()
      setCities(data)
    } catch (error) {
      console.error('Failed to load cities:', error)
    } finally {
      setCitiesLoading(false)
    }
  }

  const handleOriginProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prov = provinces.find((p) => p.province_id === e.target.value)
    if (prov) {
      setOriginProvince(prov)
      setOriginCity(null)
      loadCities(prov.province_id)
    }
  }

  const handleDestProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const prov = provinces.find((p) => p.province_id === e.target.value)
    if (prov) {
      setDestProvince(prov)
      setDestCity(null)
      loadCities(prov.province_id)
    }
  }

  const handleCheckShipping = useCallback(async () => {
    if (!originCity?.city_id || !destCity?.city_id) return

    setLoading(true)
    setSelectedService(null)

    try {
      const res = await fetch('/api/shipping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin: originCity.city_id,
          destination: destCity.city_id,
          weight: parseInt(weight) || 1000,
        }),
      })
      const data = await res.json()
      setResults(data)
    } catch (error) {
      console.error('Failed to check shipping:', error)
    } finally {
      setLoading(false)
    }
  }, [originCity, destCity, weight])

  const handleServiceSelect = (service: ShippingService, courier: string) => {
    setSelectedService({
      cost: service.cost,
      etd: service.etd,
      courier,
      service: service.name,
    })
    onShippingSelect?.(service.cost, service.etd, courier, service.name)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Shop Location Badge */}
      <div className="flex items-center gap-2 p-3 bg-accent/5 border border-accent/20 rounded-lg">
        <MapPin size={16} className="text-accent flex-shrink-0" />
        <div>
          <p className="text-caption font-semibold text-accent">Lokasi Toko</p>
          <p className="text-caption text-foreground/60">Kabupaten Banjarnegara, Jawa Tengah</p>
        </div>
      </div>

      {/* Origin - Fixed (Banjarnegara) */}
      <div className="p-4 bg-muted rounded-xl">
        <h4 className="font-heading font-semibold text-body-sm text-foreground/80 flex items-center gap-2 mb-3">
          <Package size={16} />
          Alamat Pengirim
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption text-foreground/60">Provinsi</span>
            <span className="text-body-sm font-semibold">Jawa Tengah</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-caption text-foreground/60">Kota/Kabupaten</span>
            <span className="text-body-sm font-semibold">Kabupaten Banjarnegara</span>
          </div>
        </div>
      </div>

      {/* Destination Selection */}
      <div className="space-y-4">
        <h4 className="font-heading font-semibold text-body-sm text-foreground/80 flex items-center gap-2">
          <Truck size={16} />
          Alamat Penerima
        </h4>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-caption text-foreground/60 mb-1">Provinsi</label>
            <select
              value={destProvince?.province_id || ''}
              onChange={handleDestProvinceChange}
              className="w-full px-3 py-2.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Pilih Provinsi</option>
              {provinces.map((p) => (
                <option key={p.province_id} value={p.province_id}>
                  {p.province}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-caption text-foreground/60 mb-1">Kota/Kabupaten</label>
            <select
              value={destCity?.city_id || ''}
              onChange={(e) => {
                const city = cities.find((c) => c.city_id === e.target.value)
                setDestCity(city || null)
              }}
              disabled={!destProvince || citiesLoading}
              className="w-full px-3 py-2.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            >
              <option value="">Pilih Kota</option>
              {cities.map((c) => (
                <option key={c.city_id} value={c.city_id}>
                  {c.city_name}
                </option>
              ))}
            </select>
            {citiesLoading && (
              <Loader2 size={14} className="animate-spin text-foreground/40 mt-1" />
            )}
          </div>
        </div>
      </div>

      {/* Weight Input */}
      <div>
        <label className="block text-caption text-foreground/60 mb-1">Berat Paket (gram)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="100"
          step="100"
          className="w-full px-3 py-2.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p className="text-caption text-foreground/40 mt-1">Default: 1000g (1kg)</p>
      </div>

      {/* Check Button */}
      <button
        onClick={handleCheckShipping}
        disabled={!originCity?.city_id || !destCity?.city_id || loading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Hitung Ongkir...
          </>
        ) : (
          <>
            Cek Ongkir
            <ChevronRight size={18} />
          </>
        )}
      </button>

      {/* Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            {results.map((result) => (
              <div key={result.courier} className="border border-border rounded-xl overflow-hidden">
                <div className="bg-muted px-4 py-3 font-heading font-semibold text-body-sm text-foreground">
                  {result.courier}
                </div>
                <div className="divide-y divide-border">
                  {result.services.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleServiceSelect(service, result.courier)}
                      className={`w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors text-left ${
                        selectedService?.cost === service.cost && selectedService?.courier === result.courier
                          ? 'bg-accent/5'
                          : ''
                      }`}
                    >
                      <div>
                        <p className="font-heading font-medium text-body-sm text-foreground">{service.name}</p>
                        <p className="text-caption text-foreground/50">Estimasi {service.etd} hari</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-primary text-body-sm">
                          {formatCurrency(service.cost)}
                        </span>
                        {selectedService?.cost === service.cost && (
                          <Check size={16} className="text-accent" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
