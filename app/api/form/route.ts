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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Neue Solaranfrage - ${firstName} ${lastName}`,
        from_name: 'PVPro.ch',
        name: `${firstName} ${lastName}`,
        email,
        phone,
        address: address || 'Nicht angegeben',
        property_type: propertyTypeLabels[propertyType] || propertyType,
        owner: ownershipStatus === 'eigentuemer' ? 'Ja' : 'Nein',
        battery_interest: batteryLabels[batteryInterest] || batteryInterest
      })
    })

    const result = await response.json()

    if (!result.success) {
      throw new Error('Web3Forms error')
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
