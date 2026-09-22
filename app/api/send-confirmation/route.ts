import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { escapeConfirmationHtml as escapeHtml, getConfirmationCopy } from '@/lib/confirmationTranslations';
import { validLeadLocale } from '@/lib/leadContext';

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
    { headers: { Accept: 'application/json', X_REPLIT_TOKEN: xReplitToken } },
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings?.settings?.api_key) throw new Error('Resend not connected');
  return {
    client: new Resend(connectionSettings.settings.api_key),
    fromEmail: connectionSettings.settings.from_email,
  };
}

function safeValue(value: unknown, maxLength = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const locale = validLeadLocale(body.locale);
    const copy = getConfirmationCopy(locale);
    const firstName = safeValue(body.firstName, 100);
    const lastName = safeValue(body.lastName, 100);
    const email = safeValue(body.email, 254).toLowerCase();
    const address = safeValue(body.address, 300);
    const propertyType = safeValue(body.propertyType, 40);
    const roofType = safeValue(body.roofType, 40);
    const wantsBattery = safeValue(body.wantsBattery, 40);
    const isOwner = safeValue(body.isOwner, 10);

    if (!firstName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid confirmation data' }, { status: 400 });
    }

    const name = escapeHtml([firstName, lastName].filter(Boolean).join(' '));
    const rows = [
      [copy.owner, isOwner === 'yes' ? copy.yes : copy.no],
      [copy.property, copy.properties[propertyType] || propertyType],
      [copy.roof, copy.roofs[roofType] || roofType],
      [copy.battery, copy.batteries[wantsBattery] || wantsBattery],
      [copy.address, address],
    ].map(([label, value]) => `
      <tr>
        <td style="padding:8px 0;color:#888;font-size:14px;border-top:1px solid #e8e0c0;width:40%">${escapeHtml(label)}</td>
        <td style="padding:8px 0;color:#333;font-size:14px;font-weight:bold;border-top:1px solid #e8e0c0">${escapeHtml(value)}</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html>
<html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden">
<tr><td style="background:#16213e;padding:30px 40px;text-align:center"><h1 style="color:#c8a415;font-size:28px;margin:0">PvPro.ch</h1><p style="color:#fff;font-size:14px;margin:8px 0 0">${escapeHtml(copy.tagline)}</p></td></tr>
<tr><td style="padding:40px 40px 20px"><h2 style="color:#1a1a2e;font-size:22px;margin:0 0 16px">${copy.greeting(name)}</h2><p style="color:#555;font-size:16px;line-height:1.6;margin:0">${escapeHtml(copy.intro)}</p></td></tr>
<tr><td style="padding:0 40px 30px"><table width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f0;border-radius:8px;border:1px solid #e8e0c0"><tr><td style="padding:24px"><h3 style="color:#c8a415;font-size:16px;margin:0 0 16px;text-transform:uppercase">${escapeHtml(copy.details)}</h3><table width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr></table></td></tr>
<tr><td style="padding:0 40px 30px"><h3 style="color:#1a1a2e;font-size:18px;margin:0 0 12px">${escapeHtml(copy.next)}</h3>
${copy.steps.map((step, index) => `<p style="color:#555;font-size:15px"><b style="color:#c8a415">${index + 1}.</b>&nbsp; ${escapeHtml(step)}</p>`).join('')}</td></tr>
<tr><td style="background:#1a1a2e;padding:24px 40px;text-align:center"><p style="color:#c8a415;font-weight:bold;margin:0 0 8px">PvPro.ch</p><p style="color:#aaa;font-size:12px;margin:0;line-height:1.6">${escapeHtml(copy.automatic)}<br>© ${new Date().getFullYear()} PvPro.ch – ${escapeHtml(copy.rights)}</p></td></tr>
</table></td></tr></table></body></html>`;

    const textRows = [
      `${copy.owner}: ${isOwner === 'yes' ? copy.yes : copy.no}`,
      `${copy.property}: ${copy.properties[propertyType] || propertyType}`,
      `${copy.roof}: ${copy.roofs[roofType] || roofType}`,
      `${copy.battery}: ${copy.batteries[wantsBattery] || wantsBattery}`,
      `${copy.address}: ${address}`,
    ].join('\n');
    const text = `${copy.greeting([firstName, lastName].filter(Boolean).join(' '))}\n\n${copy.intro}\n\n${copy.details}\n${textRows}\n\n${copy.next}\n${copy.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n${copy.automatic}\n© ${new Date().getFullYear()} PvPro.ch – ${copy.rights}`;

    const { client, fromEmail } = await getResendClient();
    const { data, error } = await client.emails.send({
      from: fromEmail || 'PvPro.ch <anfrage@pvpro.ch>',
      to: [email],
      subject: copy.subject,
      html,
      text,
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