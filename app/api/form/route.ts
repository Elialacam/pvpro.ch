import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || 'LA_TUA_ACCESS_KEY_QUI'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      propertyType,
      ownershipStatus,
      batteryInterest
    } = body

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const propertyTypeLabels: Record<string, string> = {
      'einfamilienhaus': 'Einfamilienhaus',
      'mehrfamilienhaus': 'Mehrfamilienhaus',
      'sonstiges': 'Sonstiges'
    }

    const batteryLabels: Record<string, string> = {
      'yes': 'Ja',
      'no': 'Nein',
      'unknown': 'Weiss nicht'
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Neue Solaranfrage - ${firstName} ${lastName}`,
        from_name: 'PVPro.ch',
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        address: address || 'Nicht angegeben',
        property_type: propertyTypeLabels[propertyType] || propertyType,
        owner: ownershipStatus === 'eigentuemer' ? 'Ja' : 'Nein',
        battery_interest: batteryLabels[batteryInterest] || batteryInterest
      })
    })

    const contentType = response.headers.get('content-type')
    let result
    if (contentType && contentType.includes('application/json')) {
      result = await response.json()
    } else {
      const text = await response.text()
      console.error('Web3Forms returned non-JSON response:', text)
      throw new Error('Web3Forms returned invalid response format')
    }

    console.log('Web3Forms response:', result)

    if (!result.success) {
      console.error('Web3Forms submission failed:', result)
      return NextResponse.json(
        { error: result.message || 'Web3Forms error' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Anfrage erfolgreich gesendet'
    }, { status: 200 })

  } catch (error: any) {
    console.error('Form error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden' },
      { status: 500 }
    )
  }
}
