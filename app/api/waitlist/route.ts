import { NextRequest, NextResponse } from 'next/server'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, hobby, source } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    const response = await fetch(
      `${API_URL}/api/v1/waitlist/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name || null,
          hobby: hobby || null,
          source: source || 'waitlist',
        }),
      }
    )

    if (!response.ok) {
      console.error('Backend error:', await response.text())
      return NextResponse.json(
        { error: 'Error del servidor' },
        { status: 500 }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Waitlist route error:', error)
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}
