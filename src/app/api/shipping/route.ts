import { NextResponse } from 'next/server'

const API_KEY = process.env.BINDERBYTE_API_KEY || 'sk_chmokol3rc5idahfcj7bdm3bowl4kjiydw79haurmng4thtujjd6ylsola0n81ct'
const BASE_URL = 'https://api.binderbyte.com/v1'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  const provinceId = searchParams.get('province')

  try {
    if (action === 'provinces') {
      const response = await fetch(`${BASE_URL}/list_province?api_key=${API_KEY}`)
      const data = await response.json()
      return NextResponse.json(data.value || [])
    }

    if (action === 'cities' && provinceId) {
      const response = await fetch(`${BASE_URL}/list_city?api_key=${API_KEY}&province=${provinceId}`)
      const data = await response.json()
      return NextResponse.json(data.value || [])
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

    // If specific courier not provided, check all couriers
    const couriers = courier ? [courier] : ['jne', 'jnt', 'sicepat', 'anteraja', 'ninja']
    const results = []

    for (const c of couriers) {
      const response = await fetch(`${BASE_URL}/cost`, {
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
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Ongkir API error:', error)
    return NextResponse.json({ error: 'Failed to calculate shipping' }, { status: 500 })
  }
}
