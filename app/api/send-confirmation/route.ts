import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

async function getResendClient() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  const connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error('Resend not connected');
  }

  return {
    client: new Resend(connectionSettings.settings.api_key),
    fromEmail: connectionSettings.settings.from_email
  };
}

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, address, propertyType, roofType, wantsBattery, isOwner } = await request.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { client: resend, fromEmail } = await getResendClient();

    const propertyLabels: Record<string, string> = {
      'einfamilienhaus': 'Einfamilienhaus',
      'mehrfamilienhaus': 'Mehrfamilienhaus',
      'sonstiges': 'Sonstiges'
    };

    const roofLabels: Record<string, string> = {
      'pitched': 'Satteldach',
      'monopitch': 'Pultdach',
      'flat': 'Flachdach',
      'other': 'Sonstiges'
    };

    const batteryLabels: Record<string, string> = {
      'yes': 'Ja',
      'no': 'Nein',
      'unknown': 'Noch nicht entschieden'
    };

    const { data, error } = await resend.emails.send({
      from: fromEmail || 'PVPro <noreply@pvpro.ch>',
      to: [email],
      subject: 'Vielen Dank für Ihre Anfrage – PVPro.ch',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, Helvetica, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="color: #c8a415; font-size: 28px; margin: 0; font-weight: bold;">PVPro.ch</h1>
                      <p style="color: #ffffff; font-size: 14px; margin: 8px 0 0 0; opacity: 0.8;">Ihr Solar-Vergleichsportal für die Schweiz</p>
                    </td>
                  </tr>

                  <!-- Greeting -->
                  <tr>
                    <td style="padding: 40px 40px 20px 40px;">
                      <h2 style="color: #1a1a2e; font-size: 22px; margin: 0 0 16px 0;">Guten Tag ${firstName} ${lastName},</h2>
                      <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0;">
                        Vielen Dank für Ihre Anfrage auf PVPro.ch! Wir haben Ihre Daten erhalten und werden uns in Kürze bei Ihnen melden.
                      </p>
                    </td>
                  </tr>

                  <!-- Summary Box -->
                  <tr>
                    <td style="padding: 0 40px 30px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf8f0; border-radius: 8px; border: 1px solid #e8e0c0;">
                        <tr>
                          <td style="padding: 24px;">
                            <h3 style="color: #c8a415; font-size: 16px; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px;">Ihre Angaben</h3>
                            
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 14px; width: 40%;">Eigentümer:</td>
                                <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold;">${isOwner === 'yes' ? 'Ja' : 'Nein'}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 14px; border-top: 1px solid #e8e0c0;">Gebäudetyp:</td>
                                <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold; border-top: 1px solid #e8e0c0;">${propertyLabels[propertyType] || propertyType}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 14px; border-top: 1px solid #e8e0c0;">Dachform:</td>
                                <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold; border-top: 1px solid #e8e0c0;">${roofLabels[roofType] || roofType}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 14px; border-top: 1px solid #e8e0c0;">Batteriespeicher:</td>
                                <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold; border-top: 1px solid #e8e0c0;">${batteryLabels[wantsBattery] || wantsBattery}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; color: #888; font-size: 14px; border-top: 1px solid #e8e0c0;">Adresse:</td>
                                <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold; border-top: 1px solid #e8e0c0;">${address}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Next Steps -->
                  <tr>
                    <td style="padding: 0 40px 30px 40px;">
                      <h3 style="color: #1a1a2e; font-size: 18px; margin: 0 0 12px 0;">Wie geht es weiter?</h3>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 8px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="background-color: #c8a415; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; font-size: 14px; font-weight: bold; vertical-align: middle;">1</td>
                                <td style="padding-left: 12px; color: #555; font-size: 15px;">Wir prüfen Ihre Angaben und Ihren Standort</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="background-color: #c8a415; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; font-size: 14px; font-weight: bold; vertical-align: middle;">2</td>
                                <td style="padding-left: 12px; color: #555; font-size: 15px;">Sie erhalten bis zu 3 unverbindliche Offerten</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="background-color: #c8a415; color: white; width: 28px; height: 28px; border-radius: 50%; text-align: center; font-size: 14px; font-weight: bold; vertical-align: middle;">3</td>
                                <td style="padding-left: 12px; color: #555; font-size: 15px;">Sie vergleichen und wählen das beste Angebot</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1a1a2e; padding: 24px 40px; text-align: center;">
                      <p style="color: #c8a415; font-size: 14px; font-weight: bold; margin: 0 0 8px 0;">PVPro.ch</p>
                      <p style="color: #aaaaaa; font-size: 12px; margin: 0; line-height: 1.6;">
                        Diese E-Mail wurde automatisch generiert.<br>
                        © ${new Date().getFullYear()} PVPro.ch – Alle Rechte vorbehalten.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
