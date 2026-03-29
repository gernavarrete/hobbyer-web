import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hobbyer Partners — Conectá tu negocio con tu comunidad'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#101622',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'rgba(13,89,242,0.15)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255,107,0,0.1)',
            filter: 'blur(100px)',
          }}
        />
        {/* Badge pill */}
        <div
          style={{
            background: '#FF6B00',
            color: '#ffffff',
            fontSize: 24,
            fontWeight: 700,
            padding: '8px 24px',
            borderRadius: 9999,
            marginBottom: 32,
            letterSpacing: '0.05em',
          }}
        >
          Mendoza 2026
        </div>
        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#0d59f2',
            letterSpacing: '-2px',
            marginBottom: 24,
          }}
        >
          Hobbyer Partners
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: '#ffffff',
            opacity: 0.9,
          }}
        >
          Conectá tu negocio con tu comunidad
        </div>
      </div>
    ),
    { ...size }
  )
}
