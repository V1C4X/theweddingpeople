import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Wedding People — Premium Wedding Hire in Auckland'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#3d5247',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#c9b99a',
            }}
          >
            Auckland Wedding Hire
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 300,
              color: '#faf8f5',
              lineHeight: 1.1,
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            The Wedding People
          </div>
          <div
            style={{
              width: '60px',
              height: '1px',
              background: '#c9b99a',
              marginTop: '8px',
              marginBottom: '8px',
            }}
          />
          <div
            style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'rgba(250, 248, 245, 0.6)',
              textAlign: 'center',
              maxWidth: '600px',
            }}
          >
            Statement bar · Furniture · Tableware · Linen
          </div>
          <div
            style={{
              fontSize: '13px',
              letterSpacing: '0.2em',
              color: '#c9b99a',
              marginTop: '24px',
            }}
          >
            theweddingpeople.nz
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
