'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '41779770750';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppFloating() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
      {showBubble && (
        <div style={{ position: 'relative', background: 'white', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', border: '1px solid #e5e7eb', padding: '16px', maxWidth: '250px' }}>
          <button
            onClick={() => setShowBubble(false)}
            style={{ position: 'absolute', top: '-8px', right: '-8px', width: '24px', height: '24px', background: '#e5e7eb', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#666' }}
          >
            ✕
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#16a34a' }}>Online</span>
          </div>

          <p style={{ fontSize: '14px', color: '#374151', fontWeight: '500', margin: '0 0 4px 0' }}>
            Hai domande? Scrivici su WhatsApp!
          </p>
          <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0 0 12px 0' }}>
            Risposta in ~2 min.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#25D366', color: 'white', fontSize: '14px', fontWeight: '700', padding: '10px 16px', borderRadius: '999px', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}
          >
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'white' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Scrivi ora
          </a>
        </div>
      )}

      <button
        onClick={() => setShowBubble(!showBubble)}
        style={{ position: 'relative', width: '60px', height: '60px', background: '#25D366', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}
      >
        <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '14px', height: '14px', background: '#22c55e', borderRadius: '50%', border: '2px solid white', boxShadow: '0 0 6px #22c55e' }} />
        <svg viewBox="0 0 24 24" style={{ width: '30px', height: '30px', fill: 'white' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
}
