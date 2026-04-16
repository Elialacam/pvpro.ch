import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

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

    const response = await fetch('https://lead-suryoyo.replit.app/api/webhook/form', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-api-key': 'f528ee7621a5c97665efd7561ac35a3ae0ab10eb4eef03b1',
      },
      body: JSON.stringify({
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

    if (!response.ok) {
      const text = await response.text()
      console.error('LeadSync submission failed:', response.status, text)
      return NextResponse.json(
        { error: 'Submission failed' },
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
