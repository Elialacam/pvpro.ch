import { type LeadLocale, validLeadLocale } from '@/lib/leadContext';

type Copy = {
  subject: string; tagline: string; greeting: (name: string) => string; intro: string;
  details: string; owner: string; property: string; roof: string; battery: string; address: string;
  yes: string; no: string; next: string; steps: [string, string, string]; automatic: string; rights: string;
  properties: Record<string, string>; roofs: Record<string, string>; batteries: Record<string, string>;
};

const sharedValues = {
  de: {
    properties: { einfamilienhaus: 'Einfamilienhaus', mehrfamilienhaus: 'Mehrfamilienhaus', gewerbe: 'Gewerbe', sonstiges: 'Sonstiges' },
    roofs: { pitched: 'Satteldach', monopitch: 'Pultdach', flat: 'Flachdach', other: 'Sonstiges' },
    batteries: { yes: 'Ja', no: 'Nein', unknown: 'Noch nicht entschieden' },
  },
  fr: {
    properties: { einfamilienhaus: 'Maison individuelle', mehrfamilienhaus: 'Immeuble résidentiel', gewerbe: 'Bâtiment commercial', sonstiges: 'Autre' },
    roofs: { pitched: 'Toit à deux pentes', monopitch: 'Toit monopente', flat: 'Toit plat', other: 'Autre' },
    batteries: { yes: 'Oui', no: 'Non', unknown: 'Pas encore décidé' },
  },
  it: {
    properties: { einfamilienhaus: 'Casa unifamiliare', mehrfamilienhaus: 'Condominio', gewerbe: 'Edificio commerciale', sonstiges: 'Altro' },
    roofs: { pitched: 'Tetto a falda', monopitch: 'Tetto a unica falda', flat: 'Tetto piano', other: 'Altro' },
    batteries: { yes: 'Sì', no: 'No', unknown: 'Non ancora deciso' },
  },
  en: {
    properties: { einfamilienhaus: 'Detached house', mehrfamilienhaus: 'Apartment building', gewerbe: 'Commercial building', sonstiges: 'Other' },
    roofs: { pitched: 'Pitched roof', monopitch: 'Monopitch roof', flat: 'Flat roof', other: 'Other' },
    batteries: { yes: 'Yes', no: 'No', unknown: 'Not decided yet' },
  },
};

export const confirmationCopy: Record<LeadLocale, Copy> = {
  de: { subject: 'Vielen Dank für Ihre Anfrage – PvPro.ch', tagline: 'Ihr Solar-Vergleichsportal für die Schweiz', greeting: n => `Guten Tag ${n},`, intro: 'Vielen Dank für Ihre Anfrage auf PvPro.ch! Wir haben Ihre Daten erhalten und werden uns in Kürze bei Ihnen melden.', details: 'Ihre Angaben', owner: 'Eigentümer', property: 'Gebäudetyp', roof: 'Dachform', battery: 'Batteriespeicher', address: 'Adresse', yes: 'Ja', no: 'Nein', next: 'Wie geht es weiter?', steps: ['Wir prüfen Ihre Angaben und Ihren Standort', 'Sie erhalten bis zu 3 unverbindliche Offerten', 'Sie vergleichen und wählen das beste Angebot'], automatic: 'Diese E-Mail wurde automatisch generiert.', rights: 'Alle Rechte vorbehalten.', ...sharedValues.de },
  fr: { subject: 'Merci pour votre demande – PvPro.ch', tagline: 'Votre portail suisse de comparaison solaire', greeting: n => `Bonjour ${n},`, intro: 'Merci pour votre demande sur PvPro.ch ! Nous avons bien reçu vos informations et vous contacterons prochainement.', details: 'Vos informations', owner: 'Propriétaire', property: 'Type de bâtiment', roof: 'Forme du toit', battery: 'Batterie de stockage', address: 'Adresse', yes: 'Oui', no: 'Non', next: 'Quelle est la suite ?', steps: ['Nous vérifions vos informations et votre emplacement', 'Vous recevez jusqu’à 3 offres sans engagement', 'Vous comparez et choisissez la meilleure offre'], automatic: 'Cet e-mail a été généré automatiquement.', rights: 'Tous droits réservés.', ...sharedValues.fr },
  it: { subject: 'Grazie per la sua richiesta – PvPro.ch', tagline: 'Il portale svizzero di confronto per il fotovoltaico', greeting: n => `Buongiorno ${n},`, intro: 'Grazie per la sua richiesta su PvPro.ch! Abbiamo ricevuto i suoi dati e la contatteremo a breve.', details: 'I suoi dati', owner: 'Proprietario', property: 'Tipo di edificio', roof: 'Forma del tetto', battery: 'Batteria di accumulo', address: 'Indirizzo', yes: 'Sì', no: 'No', next: 'Come si procede?', steps: ['Verifichiamo i suoi dati e la località', 'Riceve fino a 3 preventivi senza impegno', 'Confronta e sceglie l’offerta migliore'], automatic: 'Questa e-mail è stata generata automaticamente.', rights: 'Tutti i diritti riservati.', ...sharedValues.it },
  en: { subject: 'Thank you for your request – PvPro.ch', tagline: 'Your Swiss solar comparison portal', greeting: n => `Hello ${n},`, intro: 'Thank you for your request on PvPro.ch! We have received your details and will contact you shortly.', details: 'Your details', owner: 'Owner', property: 'Building type', roof: 'Roof shape', battery: 'Battery storage', address: 'Address', yes: 'Yes', no: 'No', next: 'What happens next?', steps: ['We review your details and location', 'You receive up to 3 no-obligation quotes', 'You compare and choose the best offer'], automatic: 'This email was generated automatically.', rights: 'All rights reserved.', ...sharedValues.en },
};

export function getConfirmationCopy(locale: unknown): Copy {
  return confirmationCopy[validLeadLocale(locale)];
}

export function escapeConfirmationHtml(value: unknown): string {
  return typeof value === 'string'
    ? value.replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
      })[character]!)
    : '';
}