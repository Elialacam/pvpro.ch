import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const WEB3FORMS_KEY = 'LA_TUA_ACCESS_KEY_QUI'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Nuovo contatto da pvpro.ch - ${name}`,
        from_name: 'PVPro.ch',
        name,
        email,
        phone: phone || 'Non fornito',
        message
      })
    })

    const result = await response.json()

    if (!result.success) {
      throw new Error('Web3Forms error')
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    }, { status: 200 })

  } catch (error: any) {
    console.error('Contact error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
