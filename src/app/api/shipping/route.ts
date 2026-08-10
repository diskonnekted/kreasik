import { NextResponse } from 'next/server'

const API_KEY = process.env.BINDERBYTE_API_KEY || 'sk_chmokol3rc5idahfcj7bdm3bowl4kjiydw79haurmng4thtujjd6ylsola0n81ct'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  const provinceId = searchParams.get('province')

  try {
    if (action === 'provinces') {
      let provinces: any[] = []
      
      try {
        const response = await fetch(`https://api.binderbyte.com/wilayah/province?api_key=${API_KEY}`)
        const data = await response.json()
        console.log('Provinces API response:', data)
        
        if (Array.isArray(data)) {
          provinces = data
        } else if (data?.result?.provinces) {
          provinces = data.result.provinces
        } else if (data?.provinces) {
          provinces = data.provinces
        } else if (data?.value) {
          provinces = data.value
        }
      } catch (apiError) {
        console.log('API fetch failed, using fallback:', apiError)
      }
      
      // Always use fallback if API fails or returns empty
      if (!provinces || !Array.isArray(provinces) || provinces.length === 0) {
        console.log('Using fallback provinces data')
        provinces = [
          { province_id: '11', province: 'Aceh' },
          { province_id: '12', province: 'Sumatera Utara' },
          { province_id: '13', province: 'Sumatera Barat' },
          { province_id: '14', province: 'Riau' },
          { province_id: '15', province: 'Jambi' },
          { province_id: '16', province: 'Sumatera Selatan' },
          { province_id: '17', province: 'Bengkulu' },
          { province_id: '18', province: 'Lampung' },
          { province_id: '19', province: 'Kep. Bangka Belitung' },
          { province_id: '21', province: 'Kepulauan Riau' },
          { province_id: '31', province: 'DKI Jakarta' },
          { province_id: '32', province: 'Jawa Barat' },
          { province_id: '33', province: 'Jawa Tengah' },
          { province_id: '34', province: 'DI Yogyakarta' },
          { province_id: '35', province: 'Jawa Timur' },
          { province_id: '36', province: 'Banten' },
          { province_id: '51', province: 'Bali' },
          { province_id: '52', province: 'Nusa Tenggara Barat' },
          { province_id: '53', province: 'Nusa Tenggara Timur' },
          { province_id: '61', province: 'Kalimantan Barat' },
          { province_id: '62', province: 'Kalimantan Tengah' },
          { province_id: '63', province: 'Kalimantan Selatan' },
          { province_id: '64', province: 'Kalimantan Timur' },
          { province_id: '65', province: 'Kalimantan Utara' },
          { province_id: '71', province: 'Sulawesi Utara' },
          { province_id: '72', province: 'Sulawesi Tengah' },
          { province_id: '73', province: 'Sulawesi Selatan' },
          { province_id: '74', province: 'Sulawesi Tenggara' },
          { province_id: '75', province: 'Gorontalo' },
          { province_id: '76', province: 'Sulawesi Barat' },
          { province_id: '81', province: 'Maluku' },
          { province_id: '82', province: 'Maluku Utara' },
          { province_id: '91', province: 'Papua' },
          { province_id: '92', province: 'Papua Barat' },
        ]
      }
      
      return NextResponse.json(provinces)
    }

    if (action === 'cities' && provinceId) {
      let cities: any[] = []
      
      try {
        const response = await fetch(`https://api.binderbyte.com/wilayah/city?province=${provinceId}&api_key=${API_KEY}`)
        const data = await response.json()
        console.log('Cities API response:', data)
        
        if (Array.isArray(data)) {
          cities = data
        } else if (data?.result?.cities) {
          cities = data.result.cities
        } else if (data?.cities) {
          cities = data.cities
        } else if (data?.value) {
          cities = data.value
        }
      } catch (apiError) {
        console.log('API fetch failed, using fallback:', apiError)
      }
      
      // Fallback for Jawa Tengah (province_id: 33)
      if (!cities || !Array.isArray(cities) || cities.length === 0) {
        console.log('Using fallback cities data')
        const fallbackCities: Record<string, any[]> = {
          '33': [
            { city_id: '481', city_name: 'Kabupaten Banjarnegara' },
            { city_id: '482', city_name: 'Kabupaten Kebumen' },
            { city_id: '483', city_name: 'Kabupaten Purworejo' },
            { city_id: '484', city_name: 'Kabupaten Wonosobo' },
            { city_id: '485', city_name: 'Kabupaten Magelang' },
            { city_id: '486', city_name: 'Kabupaten Banyumas' },
            { city_id: '487', city_name: 'Kabupaten Purbalingga' },
            { city_id: '488', city_name: 'Kabupaten Batang' },
            { city_id: '489', city_name: 'Kota Semarang' },
            { city_id: '490', city_name: 'Kabupaten Semarang' },
            { city_id: '491', city_name: 'Kabupaten Kendal' },
            { city_id: '492', city_name: 'Kabupaten Temanggung' },
            { city_id: '493', city_name: 'Kabupaten Kendal' },
            { city_id: '494', city_name: 'Kabupaten Pemalang' },
            { city_id: '495', city_name: 'Kabupaten Tegal' },
            { city_id: '496', city_name: 'Kabupaten Cilacap' },
          ]
        }
        cities = fallbackCities[provinceId] || []
      }
      
      return NextResponse.json(cities)
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Ongkir API error:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { origin, destination, weight = 1000, courier } = body

    if (!origin || !destination) {
      return NextResponse.json({ error: 'Origin and destination are required' }, { status: 400 })
    }

    const API_KEY = process.env.BINDERBYTE_API_KEY || 'sk_chmokol3rc5idahfcj7bdm3bowl4kjiydw79haurmng4thtujjd6ylsola0n81ct'

    // If specific courier not provided, check all couriers
    const couriers = courier ? [courier] : ['jne', 'jnt', 'sicepat', 'anteraja', 'ninja']
    const results = []

    for (const c of couriers) {
      try {
        const response = await fetch('https://api.binderbyte.com/v1/cost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: API_KEY,
            origin,
            destination,
            weight,
            courier: c,
          }),
        })
        const data = await response.json()

        if (data.status === 200 && data.value) {
          results.push({
            courier: c.toUpperCase(),
            services: data.value.map((service: any) => ({
              name: service.service,
              cost: service.cost,
              etd: service.etd,
            })),
          })
        }
      } catch (courierError) {
        console.log(`Failed to get cost for ${c}:`, courierError)
      }
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Ongkir API error:', error)
    return NextResponse.json({ error: 'Failed to calculate shipping' }, { status: 500 })
  }
}
