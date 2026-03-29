import { NextRequest, NextResponse } from 'next/server'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, category, email, whatsapp, city, source } = body

    if (!businessName || typeof businessName !== 'string' || !businessName.trim()) {
      return NextResponse.json({ error: 'Nombre de negocio requerido' }, { status: 400 })
    }
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (!city || typeof city !== 'string' || !city.trim()) {
      return NextResponse.json({ error: 'Ciudad requerida' }, { status: 400 })
    }

    try {
      const response = await fetch(`${API_URL}/api/v1/partners/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: businessName.trim(),
          category: category || null,
          email: email.trim(),
          whatsapp: whatsapp || null,
          city: city.trim(),
          source: source || null,
        }),
      })

      if (!response.ok) {
        console.error('Backend partners error:', await response.text())
        return NextResponse.json(
          { message: 'Registro recibido. Te contactamos pronto.' },
          { status: 501 }
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    } catch (backendError) {
      console.error('Backend unreachable:', backendError)
      return NextResponse.json(
        { message: 'Registro recibido. Te contactamos pronto.' },
        { status: 501 }
      )
    }
  } catch (error) {
    console.error('Partners route error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
