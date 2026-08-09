const API_KEY = 'sk_chmokol3rc5idahfcj7bdm3bowl4kjiydw79haurmng4thtujjd6ylsola0n81ct'
const BASE_URL = 'https://api.binderbyte.com/v1'

export async function getProvinces() {
  try {
    const response = await fetch(`${BASE_URL}/list_province?api_key=${API_KEY}`, {
      next: { revalidate: 3600 }, // Cache 1 hour
    })
    const data = await response.json()
    return data.value || []
  } catch (error) {
    console.error('Error fetching provinces:', error)
    return []
  }
}

export async function getCities(provinceId: string) {
  try {
    const response = await fetch(`${BASE_URL}/list_city?api_key=${API_KEY}&province=${provinceId}`, {
      next: { revalidate: 3600 },
    })
    const data = await response.json()
    return data.value || []
  } catch (error) {
    console.error('Error fetching cities:', error)
    return []
  }
}

export async function checkShippingCost(origin: string, destination: string, weight: number) {
  try {
    const couriers = ['jne', 'jnt', 'sicepat', 'anteraja', 'ninja']
    const results = []

    for (const courier of couriers) {
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
          courier,
        }),
      })
      const data = await response.json()

      if (data.status === 200 && data.value) {
        results.push({
          courier: courier.toUpperCase(),
          services: data.value.map((service: any) => ({
            name: service.service,
            cost: service.cost,
            etd: service.etd,
          })),
        })
      }
    }
    return results
  } catch (error) {
    console.error('Error checking shipping cost:', error)
    return []
  }
}
