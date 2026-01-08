/**
 * Test script for pvpro.ch multi-step solar form
 * Tests the complete form submission with Mailgun integration
 */

interface SolarFormData {
  // Step 1
  propertyType: 'einfamilienhaus' | 'mehrfamilienhaus' | 'gewerbegebaeude';
  ownershipStatus: 'eigentuemer' | 'mieter';
  // Step 2
  annualConsumption: 'unter-2000' | '2000-4000' | '4000-6000' | 'ueber-6000';
  batteryInterest: 'ja' | 'nein' | 'unsicher';
  // Step 3
  postalCode: string;
  city: string;
  street?: string;
  roofType: 'flachdach' | 'schraegdach' | 'gemischt' | 'weiss-nicht';
  // Step 4
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments?: string;
  privacyAccepted: boolean;
}

async function testSolarForm(baseUrl: string) {
  console.log('🧪 Testing PVPro.ch Solar Form Submission');
  console.log('📍 Testing URL:', baseUrl);
  console.log('─'.repeat(60));

  const testData: SolarFormData = {
    // Step 1: Property Information
    propertyType: 'einfamilienhaus',
    ownershipStatus: 'eigentuemer',

    // Step 2: Energy Needs
    annualConsumption: '4000-6000',
    batteryInterest: 'ja',

    // Step 3: Location
    postalCode: '8001',
    city: 'Zürich',
    street: 'Teststrasse 123',
    roofType: 'schraegdach',

    // Step 4: Contact Information
    firstName: 'Claude',
    lastName: 'Test',
    email: 'test@example.com',
    phone: '+41 79 123 45 67',
    comments: 'Dies ist ein automatischer Test der Solar-Formular-Integration mit Mailgun.',
    privacyAccepted: true,
  };

  console.log('📝 Test Data:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('─'.repeat(60));

  try {
    // Test the API endpoint directly
    const apiUrl = `${baseUrl}/api/contact`;
    console.log('🚀 Submitting to:', apiUrl);

    // Format the data as the form would send it
    const formattedData = {
      name: `${testData.firstName} ${testData.lastName}`,
      email: testData.email,
      phone: testData.phone,
      message: formatFormDataAsText(testData),
      html: formatFormDataAsHTML(testData),
      subject: `🌞 Neue Solar-Anfrage: ${testData.firstName} ${testData.lastName} | ${testData.city}`,
      formType: 'solar',
      formData: testData,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    console.log('📊 Response Status:', response.status, response.statusText);

    const result = await response.json();
    console.log('📨 Response Data:', JSON.stringify(result, null, 2));

    if (response.ok && result.success) {
      console.log('');
      console.log('✅ SUCCESS! Form submission completed');
      console.log('📧 Email should be sent to: localclark@gmail.com');
      console.log('📮 Mailgun Message ID:', result.id);
      console.log('');
      console.log('─'.repeat(60));
      console.log('✅ TEST PASSED - Solar form with Mailgun integration working!');
      console.log('─'.repeat(60));
      return true;
    } else {
      console.error('');
      console.error('❌ FAILED! Form submission error');
      console.error('Error:', result.error || 'Unknown error');
      console.error('');
      console.error('─'.repeat(60));
      console.error('❌ TEST FAILED');
      console.error('─'.repeat(60));
      return false;
    }
  } catch (error) {
    console.error('');
    console.error('❌ EXCEPTION during test:');
    console.error(error);
    console.error('');
    console.error('─'.repeat(60));
    console.error('❌ TEST FAILED');
    console.error('─'.repeat(60));
    return false;
  }
}

// Helper functions to format the form data
function formatFormDataAsText(data: SolarFormData): string {
  const propertyLabels: Record<string, string> = {
    einfamilienhaus: 'Einfamilienhaus',
    mehrfamilienhaus: 'Mehrfamilienhaus',
    gewerbegebaeude: 'Gewerbegebäude',
  };

  const ownershipLabels: Record<string, string> = {
    eigentuemer: 'Eigentümer',
    mieter: 'Mieter',
  };

  const consumptionLabels: Record<string, string> = {
    'unter-2000': 'Unter 2.000 kWh',
    '2000-4000': '2.000 - 4.000 kWh',
    '4000-6000': '4.000 - 6.000 kWh',
    'ueber-6000': 'Über 6.000 kWh',
  };

  const batteryLabels: Record<string, string> = {
    ja: 'Ja, interessiert',
    nein: 'Nein',
    unsicher: 'Noch unsicher',
  };

  const roofLabels: Record<string, string> = {
    flachdach: 'Flachdach',
    schraegdach: 'Schrägdach',
    gemischt: 'Gemischt',
    'weiss-nicht': 'Weiss nicht',
  };

  return `
═══════════════════════════════════════════════════
   NEUE SOLARANLAGE ANFRAGE
═══════════════════════════════════════════════════

📋 KONTAKTDATEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${data.firstName} ${data.lastName}
Email:    ${data.email}
Telefon:  ${data.phone}

🏠 IMMOBILIE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Immobilientyp:     ${propertyLabels[data.propertyType] || data.propertyType}
Eigentumsstatus:   ${ownershipLabels[data.ownershipStatus] || data.ownershipStatus}

⚡ ENERGIEBEDARF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Jährlicher Verbrauch:        ${consumptionLabels[data.annualConsumption] || data.annualConsumption}
Batteriespeicher-Interesse:  ${batteryLabels[data.batteryInterest] || data.batteryInterest}

📍 STANDORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLZ:       ${data.postalCode}
Stadt:     ${data.city}
Dachtyp:   ${roofLabels[data.roofType] || data.roofType}

${data.comments ? `💬 ZUSÄTZLICHE INFORMATIONEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.comments}
` : ''}
═══════════════════════════════════════════════════
🌐 Quelle: pvpro.ch
📅 Datum:  ${new Date().toLocaleString('de-CH', {
    dateStyle: 'full',
    timeStyle: 'short'
  })}
═══════════════════════════════════════════════════
  `.trim();
}

function formatFormDataAsHTML(data: SolarFormData): string {
  const propertyLabels: Record<string, string> = {
    einfamilienhaus: 'Einfamilienhaus',
    mehrfamilienhaus: 'Mehrfamilienhaus',
    gewerbegebaeude: 'Gewerbegebäude',
  };

  const ownershipLabels: Record<string, string> = {
    eigentuemer: 'Eigentümer',
    mieter: 'Mieter',
  };

  const consumptionLabels: Record<string, string> = {
    'unter-2000': 'Unter 2.000 kWh',
    '2000-4000': '2.000 - 4.000 kWh',
    '4000-6000': '4.000 - 6.000 kWh',
    'ueber-6000': 'Über 6.000 kWh',
  };

  const batteryLabels: Record<string, string> = {
    ja: 'Ja, interessiert',
    nein: 'Nein',
    unsicher: 'Noch unsicher',
  };

  const roofLabels: Record<string, string> = {
    flachdach: 'Flachdach',
    schraegdach: 'Schrägdach',
    gemischt: 'Gemischt',
    'weiss-nicht': 'Weiss nicht',
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
        Neue Solaranlage Anfrage 🌞
      </h2>

      <h3 style="color: #333; margin-top: 30px;">Kontaktdaten</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Name:</td>
          <td style="padding: 8px;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Email:</td>
          <td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Telefon:</td>
          <td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td>
        </tr>
      </table>

      <h3 style="color: #333; margin-top: 30px;">Immobilie</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Immobilientyp:</td>
          <td style="padding: 8px;">${propertyLabels[data.propertyType] || data.propertyType}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Eigentumsstatus:</td>
          <td style="padding: 8px;">${ownershipLabels[data.ownershipStatus] || data.ownershipStatus}</td>
        </tr>
      </table>

      <h3 style="color: #333; margin-top: 30px;">Energiebedarf</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Jährlicher Verbrauch:</td>
          <td style="padding: 8px;">${consumptionLabels[data.annualConsumption] || data.annualConsumption}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Interesse an Batteriespeicher:</td>
          <td style="padding: 8px;">${batteryLabels[data.batteryInterest] || data.batteryInterest}</td>
        </tr>
      </table>

      <h3 style="color: #333; margin-top: 30px;">Standort</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Postleitzahl:</td>
          <td style="padding: 8px;">${data.postalCode}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Stadt:</td>
          <td style="padding: 8px;">${data.city}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Dachtyp:</td>
          <td style="padding: 8px;">${roofLabels[data.roofType] || data.roofType}</td>
        </tr>
      </table>

      ${data.comments ? `
      <h3 style="color: #333; margin-top: 30px;">Zusätzliche Informationen</h3>
      <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #10b981; margin-top: 10px;">
        ${data.comments}
      </div>
      ` : ''}

      <div style="margin-top: 40px; padding: 20px; background: #f3f4f6; border-radius: 8px; text-align: center;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          Diese Anfrage wurde über das Kontaktformular auf <strong>pvpro.ch</strong> gesendet
        </p>
        <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
          Zeitstempel: ${new Date().toLocaleString('de-CH')}
        </p>
      </div>
    </div>
  `;
}

// Run the test
const args = process.argv.slice(2);
const baseUrl = args[0] || 'https://pvpro.ch';

testSolarForm(baseUrl).then(success => {
  process.exit(success ? 0 : 1);
});
