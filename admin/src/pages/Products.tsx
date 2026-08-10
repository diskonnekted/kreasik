import { useState, useEffect, useRef } from 'react'
import { Package, Plus, Edit, Trash2, Search, X, Save, Camera, Check } from 'lucide-react'
import { getProducts, saveProducts } from '../utils/storage'
import { Product } from '../types'
import { formatCurrency } from '../components/ui'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSave = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)))
    } else {
      setProducts([...products, { ...product, id: Date.now(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }])
    }
    saveProducts(products.map((p) => (p.id === product.id ? product : p)))
    setShowModal(false)
    setEditingProduct(null)
  }

  const handleDelete = (id: number) => {
    const updated = products.filter((p) => p.id !== id)
    setProducts(updated)
    saveProducts(updated)
    setDeleteConfirm(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-heading-sm text-foreground">Manajemen Produk</h1>
          <p className="text-body-sm text-foreground/50 mt-1">Kelola semua produk Anda</p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(null)
            setShowModal(true)
          }}
          className="flex items-center gap-2 bg-primary text-white font-heading font-semibold px-5 py-2.5 rounded-lg
                   hover:bg-primary/90 transition-colors active:scale-[0.98] self-start"
        >
          <Plus size={18} />
          Tambah Produk
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari produk..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background">
              <tr>
                <th className="text-left text-caption text-foreground/50 px-5 py-3 font-semibold">Produk</th>
                <th className="text-left text-caption text-foreground/50 px-5 py-3 font-semibold hidden sm:table-cell">Kategori</th>
                <th className="text-left text-caption text-foreground/50 px-5 py-3 font-semibold">Harga</th>
                <th className="text-left text-caption text-foreground/50 px-5 py-3 font-semibold hidden md:table-cell">Varian</th>
                <th className="text-left text-caption text-foreground/50 px-5 py-3 font-semibold hidden md:table-cell">Stok</th>
                <th className="text-left text-caption text-foreground/50 px-5 py-3 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <Package size={40} className="mx-auto text-foreground/20 mb-3" />
                    <p className="text-body-sm text-foreground/40">Tidak ada produk ditemukan</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => {
                  const priceRange = product.hasVariants && product.variants
                    ? getVariantPriceRange(product.price, product.variants)
                    : null
                  return (
                    <tr key={product.id} className="border-t border-border/50 hover:bg-background/50 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect fill="%23F0ECF2" width="40" height="40"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23881337" font-size="14">IMG</text></svg>')
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-body-sm font-semibold text-foreground truncate">{product.name}</p>
                            <p className="text-body-xs text-foreground/40">{product.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 hidden sm:table-cell">
                        <span className="text-body-sm text-foreground/60 capitalize">{product.category}</span>
                      </td>
                      <td className="px-5 py-3">
                        <div>
                          <span className="text-body-sm font-heading font-bold text-primary">{formatCurrency(product.price)}</span>
                          {priceRange && priceRange.min !== priceRange.max && (
                            <span className="text-body-xs text-foreground/40 block">— {formatCurrency(priceRange.max)}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3 hidden md:table-cell">
                        {product.hasVariants && product.variants ? (
                          <div className="flex flex-col gap-1">
                            <span className="text-caption text-foreground/50">Skala: {product.variants.scales.join(', ')}</span>
                            <span className="text-caption text-foreground/50">Finish: {product.variants.finishes.join(', ')}</span>
                          </div>
                        ) : (
                          <span className="text-caption text-foreground/30">-</span>
                        )}
                      </td>
                      <td className="px-5 py-3 hidden md:table-cell">
                        <span className={`text-body-sm font-semibold ${
                          product.stock > 10 ? 'text-success' : product.stock > 0 ? 'text-yellow-600' : 'text-destructive'
                        }`}>
                          {product.stock} unit
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingProduct(product)
                              setShowModal(true)
                            }}
                            className="p-1.5 rounded-lg hover:bg-accent/10 text-accent transition-colors"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                          {deleteConfirm === product.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleDelete(product.id)}
                                className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                                title="Konfirmasi"
                              >
                                <Check size={16} />
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="p-1.5 rounded-lg hover:bg-foreground/10 text-foreground/40 transition-colors"
                                title="Batal"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(product.id)}
                              className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                              title="Hapus"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ProductModal
          product={editingProduct}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false)
            setEditingProduct(null)
          }}
        />
      )}
    </div>
  )
}

function getVariantPriceRange(basePrice: number, variants: NonNullable<Product['variants']>) {
  const minScale = variants.scalesPrice[variants.scales[0]] ?? 0
  const maxScale = Math.max(...Object.values(variants.scalesPrice))
  const minFinish = variants.finishesPrice[variants.finishes[0]] ?? 0
  const maxFinish = Math.max(...Object.values(variants.finishesPrice))
  return {
    min: basePrice + minScale + minFinish,
    max: basePrice + maxScale + maxFinish,
  }
}

function ProductModal({
  product,
  onSave,
  onClose,
}: {
  product: Product | null
  onSave: (product: Product) => void
  onClose: () => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const is3DPrint = (product?.category || '3d-print') === '3d-print'
  const [hasVariants, setHasVariants] = useState(is3DPrint)
  const [formData, setFormData] = useState<Omit<Product, 'id' | 'rating' | 'reviews' | 'createdAt' | 'updatedAt'>>({
    name: product?.name || '',
    slug: product?.slug || '',
    description: product?.description || '',
    price: product?.price || 0,
    weight: product?.weight || 0,
    stock: product?.stock || 0,
    category: product?.category || '3d-print',
    badge: product?.badge || 'NEW',
    images: product?.images || [],
    details: product?.details || [],
    hasVariants: product?.hasVariants ?? is3DPrint,
    variants: product?.variants ? {
      scales: product.variants.scales,
      scalesPrice: product.variants.scalesPrice,
      finishes: product.variants.finishes,
      finishesPrice: product.variants.finishesPrice,
    } : {
      scales: ['1:64', '1:35', '1:12', '1:6'],
      scalesPrice: { '1:64': 0, '1:35': 12000, '1:12': 23000, '1:6': 47000 },
      finishes: ['Polos', 'Hand Painted'],
      finishesPrice: { 'Polos': 0, 'Hand Painted': 120000 },
    },
  })
  const [imagePreview, setImagePreview] = useState<string[]>(product?.images || [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: product?.id || Date.now(),
      ...formData,
      rating: product?.rating || 5,
      reviews: product?.reviews || 0,
      createdAt: product?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Product)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) => {
        if (ev.target?.result) {
          const newImages = [...imagePreview, ev.target.result as string]
          setImagePreview(newImages)
          setFormData({ ...formData, images: newImages })
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (idx: number) => {
    const newImages = imagePreview.filter((_, i) => i !== idx)
    setImagePreview(newImages)
    setFormData({ ...formData, images: newImages })
  }

  const updateScalesPrice = (scale: string, value: number) => {
    setFormData({
      ...formData,
      variants: {
        ...formData.variants!,
        scalesPrice: { ...formData.variants!.scalesPrice, [scale]: value },
      },
    })
  }

  const updateFinishesPrice = (finish: string, value: number) => {
    setFormData({
      ...formData,
      variants: {
        ...formData.variants!,
        finishesPrice: { ...formData.variants!.finishesPrice, [finish]: value },
      },
    })
  }

  const previewPrice = formData.hasVariants && formData.variants
    ? getVariantPriceRange(formData.price, formData.variants)
    : null

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="font-heading font-bold text-heading-sm">
            {product ? 'Edit Produk' : 'Tambah Produk Baru'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Image Upload */}
          <div>
            <label className="block text-body-sm font-semibold text-foreground/70 mb-2">Gambar Produk</label>
            <div className="flex flex-wrap gap-3 mb-3">
              {imagePreview.map((img, idx) => (
                <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border group">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 w-5 h-5 bg-destructive text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-20 h-20 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-foreground/30 hover:border-primary hover:text-primary transition-colors"
              >
                <Camera size={20} />
                <span className="text-caption mt-1">Upload</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Name & Slug */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Nama Produk *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Deskripsi *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>

          {/* Price, Weight, Stock, Category */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-1">
                Harga Dasar (1:64 Polos) *
                {previewPrice && previewPrice.min !== previewPrice.max && (
                  <span className="block text-foreground/40 font-normal mt-0.5">
                    Rentang: {formatCurrency(previewPrice.min)} — {formatCurrency(previewPrice.max)}
                  </span>
                )}
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Berat (gr)</label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Stok *</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Kategori *</label>
              <select
                value={formData.category}
                onChange={(e) => {
                  const cat = e.target.value
                  setFormData({ ...formData, category: cat, hasVariants: cat === '3d-print' })
                }}
                className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="3d-print">3D Print</option>
                <option value="apparel">Apparel</option>
                <option value="diy">DIY Crafts</option>
                <option value="print">Print Products</option>
                <option value="junkyard">Junkyard</option>
              </select>
            </div>
          </div>

          {/* Variant Toggle */}
          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
            <div>
              <p className="text-body-sm font-semibold text-foreground">Aktifkan Varian</p>
              <p className="text-body-xs text-foreground/50 mt-0.5">
                {formData.category === '3d-print' ? 'Skala & pewarnaan' : 'Nonaktif'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (formData.category !== '3d-print') {
                  setFormData({ ...formData, category: '3d-print' })
                  return
                }
                setHasVariants(!formData.hasVariants)
                setFormData({
                  ...formData,
                  hasVariants: !formData.hasVariants,
                  variants: !formData.hasVariants ? formData.variants : undefined,
                })
              }}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                formData.hasVariants ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                formData.hasVariants ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          {/* Variant Configuration */}
          {formData.hasVariants && formData.variants && (
            <div className="p-4 bg-primary/5 rounded-lg space-y-4">
              <h3 className="font-heading font-semibold text-body-sm text-primary">Konfigurasi Varian</h3>

              {/* Scales */}
              <div>
                <p className="text-body-xs font-semibold text-foreground/60 mb-2">Skala (tambahan harga dari harga dasar)</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.variants.scales.map((scale) => (
                    <div key={scale}>
                      <label className="block text-caption text-foreground/50 mb-1">{scale}</label>
                      <input
                        type="number"
                        value={formData.variants!.scalesPrice[scale]}
                        onChange={(e) => updateScalesPrice(scale, parseInt(e.target.value) || 0)}
                        className="w-full px-2 py-2 rounded border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        min="0"
                        step="1000"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Finishes */}
              <div>
                <p className="text-body-xs font-semibold text-foreground/60 mb-2">Pewarnaan (tambahan harga dari harga dasar)</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.variants.finishes.map((finish) => (
                    <div key={finish}>
                      <label className="block text-caption text-foreground/50 mb-1">{finish}</label>
                      <input
                        type="number"
                        value={formData.variants!.finishesPrice[finish]}
                        onChange={(e) => updateFinishesPrice(finish, parseInt(e.target.value) || 0)}
                        className="w-full px-2 py-2 rounded border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        min="0"
                        step="1000"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Preview Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-caption text-foreground/50 py-2">Finish \ Scale</th>
                      {formData.variants?.scales.map((s) => (
                        <th key={s} className="text-caption text-foreground/50 py-2">{s}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {formData.variants?.finishes.map((finish) => (
                      <tr key={finish} className="border-b border-primary/10">
                        <td className="text-caption font-semibold text-foreground/70 py-2 text-left pl-2">{finish}</td>
                        {formData.variants?.scales.map((scale) => {
                          const price = formData.price
                            + (formData.variants!.scalesPrice[scale] ?? 0)
                            + (formData.variants!.finishesPrice[finish] ?? 0)
                          return (
                            <td key={scale} className="text-caption font-heading font-bold text-primary py-2">
                              {formatCurrency(price)}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Badge */}
          <div>
            <label className="block text-body-sm font-semibold text-foreground/70 mb-1">Badge</label>
            <select
              value={formData.badge || ''}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value || undefined })}
              className="w-full px-3 py-2.5 rounded-lg border bg-background text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Tidak ada</option>
              <option value="NEW">NEW</option>
              <option value="HOT">HOT</option>
              <option value="SALE">SALE</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border text-body-sm font-heading font-semibold hover:bg-muted transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary text-white font-heading font-semibold px-5 py-2.5 rounded-lg
                       hover:bg-primary/90 transition-colors active:scale-[0.98]"
            >
              <Save size={16} />
              {product ? 'Simpan Perubahan' : 'Tambah Produk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
