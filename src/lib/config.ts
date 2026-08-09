// Shop configuration
export const shopConfig = {
  name: 'Kreasik',
  location: {
    province: 'Jawa Tengah',
    provinceId: null, // Will be set dynamically from API
    city: 'Kabupaten Banjarnegara',
    cityId: null, // Will be set dynamically from API
  },
  freeShippingThreshold: 200000, // Rp 200.000
  contact: {
    email: 'info@kreasik.com',
    phone: '+62 812-3456-7890',
    whatsapp: '6281234567890',
  },
  social: {
    instagram: '@kreasik',
    tiktok: '@kreasik',
    youtube: '@kreasik',
  },
}

// Province and city data from Binderbyte API
export interface Province {
  province_id: string
  province: string
}

export interface City {
  city_id: string
  city_name: string
  province: string
}
