import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';

async function getResendClient() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  const connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings?.settings?.api_key) throw new Error('Resend not connected');

  return {
    client: new Resend(connectionSettings.settings.api_key),
    fromEmail: connectionSettings.settings.from_email,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, address, propertyType, roofType, wantsBattery, electricityAmount, electricityType, electricityPeriod } = body;

    if (!email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { client: resend, fromEmail } = await getResendClient();

    const propertyLabels: Record<string, string> = {
      'einfamilienhaus': 'Einfamilienhaus',
      'mehrfamilienhaus': 'Mehrfamilienhaus',
      'gewerbe': 'Gewerbe',
      'sonstiges': 'Sonstiges',
    };
    const roofLabels: Record<string, string> = {
      'pitched': 'Satteldach',
      'monopitch': 'Pultdach',
      'flat': 'Flachdach',
      'other': 'Sonstiges',
    };
    const batteryLabels: Record<string, string> = {
      'yes': 'Ja',
      'no': 'Nein',
      'unknown': 'Noch nicht entschieden',
    };

    const electricityLabel = electricityAmount
      ? `${electricityAmount} ${electricityType === 'kwh' ? 'kWh' : 'CHF'} / ${electricityPeriod === 'quarterly' ? 'Quartal' : 'Monat'}`
      : null;

    let logoBase64 = '';
    try {
      const logoPath = join(process.cwd(), 'public', 'logo-pvpro.png');
      logoBase64 = readFileSync(logoPath).toString('base64');
    } catch {}

    const logoSrc = logoBase64
      ? `data:image/png;base64,${logoBase64}`
      : 'https://www.pvpro.ch/logo-pvpro.png';

    const rows = [
      propertyType && { label: 'Gebäudetyp', value: propertyLabels[propertyType] || propertyType },
      roofType     && { label: 'Dachform',   value: roofLabels[roofType] || roofType },
      wantsBattery && { label: 'Batteriespeicher', value: batteryLabels[wantsBattery] || wantsBattery },
      electricityLabel && { label: 'Stromverbrauch', value: electricityLabel },
      address      && { label: 'Adresse',    value: address },
    ].filter(Boolean) as { label: string; value: string }[];

    const summaryRows = rows.map((row, i) => `
      <tr>
        <td style="padding: 10px 0; color: #6B7280; font-size: 14px; width: 44%; vertical-align: top;${i > 0 ? ' border-top: 1px solid #F3F4F6;' : ''}">${row.label}</td>
        <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 600; vertical-align: top;${i > 0 ? ' border-top: 1px solid #F3F4F6;' : ''}">${row.value}</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre Anfrage bei PVPro.ch</title>
</head>
<body style="margin:0;padding:0;background-color:#F8F7F5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F7F5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo -->
          <tr>
            <td style="padding: 0 0 28px 0; text-align: center;">
              <img src="${logoSrc}" alt="PVPro.ch" width="130" height="38" style="display:inline-block;height:38px;width:auto;" />
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);">

              <!-- Orange top accent -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(90deg,#F97316,#FB923C);height:4px;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- Greeting -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 36px 40px 24px 40px;">
                    <p style="margin:0 0 6px 0;color:#F97316;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;">Bestätigung Ihrer Anfrage</p>
                    <h1 style="margin:0 0 16px 0;color:#0F172A;font-size:26px;font-weight:800;line-height:1.2;">Hallo ${firstName},<br>vielen Dank für Ihre Anfrage.</h1>
                    <p style="margin:0;color:#6B7280;font-size:15px;line-height:1.6;">
                      Wir haben Ihre Angaben erhalten und melden uns in Kürze persönlich bei Ihnen. Hier ist, was als Nächstes passiert:
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Steps -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 40px 28px 40px;">

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                      <tr>
                        <td style="width:36px;vertical-align:top;padding-top:2px;">
                          <div style="background-color:#F97316;color:#fff;width:26px;height:26px;border-radius:50%;text-align:center;font-size:12px;font-weight:700;line-height:26px;">1</div>
                        </td>
                        <td style="padding-left:12px;vertical-align:top;">
                          <p style="margin:0 0 2px 0;color:#0F172A;font-size:14px;font-weight:700;">Kurzer Anruf zur Bestätigung</p>
                          <p style="margin:0;color:#6B7280;font-size:13px;line-height:1.5;">Wir melden uns telefonisch bei Ihnen, um Ihre Angaben kurz zu bestätigen.</p>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                      <tr>
                        <td style="width:36px;vertical-align:top;padding-top:2px;">
                          <div style="background-color:#F97316;color:#fff;width:26px;height:26px;border-radius:50%;text-align:center;font-size:12px;font-weight:700;line-height:26px;">2</div>
                        </td>
                        <td style="padding-left:12px;vertical-align:top;">
                          <p style="margin:0 0 2px 0;color:#0F172A;font-size:14px;font-weight:700;">Bis zu 3 kostenlose Offerten</p>
                          <p style="margin:0;color:#6B7280;font-size:13px;line-height:1.5;">Wir vergleichen geprüfte Installateure aus Ihrer Region und senden Ihnen die besten Angebote.</p>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;vertical-align:top;padding-top:2px;">
                          <div style="background-color:#F97316;color:#fff;width:26px;height:26px;border-radius:50%;text-align:center;font-size:12px;font-weight:700;line-height:26px;">3</div>
                        </td>
                        <td style="padding-left:12px;vertical-align:top;">
                          <p style="margin:0 0 2px 0;color:#0F172A;font-size:14px;font-weight:700;">Sie entscheiden frei</p>
                          <p style="margin:0;color:#6B7280;font-size:13px;line-height:1.5;">Vergleichen und wählen Sie – ohne Verpflichtung und ohne versteckte Kosten.</p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              ${rows.length > 0 ? `
              <!-- Summary -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 40px 32px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border:1px solid #F3F4F6;">
                      <tr>
                        <td style="padding: 20px 20px 4px 20px;">
                          <p style="margin:0 0 12px 0;color:#9CA3AF;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Ihre Angaben</p>
                          <table width="100%" cellpadding="0" cellspacing="0">
                            ${summaryRows}
                          </table>
                        </td>
                      </tr>
                      <tr><td style="height:16px;"></td></tr>
                    </table>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Checklist -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 40px 32px 40px;border-top:1px solid #F3F4F6;">
                    <p style="margin:20px 0 12px 0;color:#0F172A;font-size:14px;font-weight:700;">Was Sie von uns erwarten können:</p>
                    <table cellpadding="0" cellspacing="0">
                      <tr><td style="padding:4px 0;color:#F97316;font-size:14px;">✓</td><td style="padding:4px 0 4px 10px;color:#6B7280;font-size:14px;">Kostenlose Analyse Ihres Dachs und Energiebedarfs</td></tr>
                      <tr><td style="padding:4px 0;color:#F97316;font-size:14px;">✓</td><td style="padding:4px 0 4px 10px;color:#6B7280;font-size:14px;">Massgeschneiderte Angebote ohne versteckte Kosten</td></tr>
                      <tr><td style="padding:4px 0;color:#F97316;font-size:14px;">✓</td><td style="padding:4px 0 4px 10px;color:#6B7280;font-size:14px;">Nur geprüfte Fachbetriebe aus Ihrer Region</td></tr>
                      <tr><td style="padding:4px 0;color:#F97316;font-size:14px;">✓</td><td style="padding:4px 0 4px 10px;color:#6B7280;font-size:14px;">Schnelle Umsetzung und langfristige Qualität</td></tr>
                    </table>
                    <p style="margin:20px 0 4px 0;color:#6B7280;font-size:14px;">Wir freuen uns auf das Gespräch mit Ihnen.</p>
                    <p style="margin:0;color:#6B7280;font-size:14px;">Freundliche Grüsse<br><strong style="color:#0F172A;">Ihr PvPro Team</strong></p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 0 0 0; text-align: center;">
              <p style="margin:0;color:#9CA3AF;font-size:12px;line-height:1.6;">
                © ${new Date().getFullYear()} PVPro.ch · Solarenergie-Lösungen für die Schweiz<br>
                <a href="https://www.pvpro.ch" style="color:#9CA3AF;text-decoration:none;">www.pvpro.ch</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: fromEmail || 'PVPro <anfrage@pvpro.ch>',
      to: [email],
      subject: 'Ihre Anfrage bei PvPro.ch – so geht es jetzt weiter',
      html,
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
