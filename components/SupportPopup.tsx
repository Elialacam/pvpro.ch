'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function SupportPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const closed = sessionStorage.getItem('support-popup-closed');
    if (closed) return;
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  if (pathname === '/anfrage') return null;
  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 left-5 z-[9998]"
      style={{ width: 300 }}
    >
      <div
        className="relative rounded-2xl overflow-visible shadow-2xl"
        style={{ background: '#C9EBF8', padding: '20px 20px 28px 20px' }}
      >
        {/* Close button */}
        <button
          onClick={() => { setVisible(false); sessionStorage.setItem('support-popup-closed', '1'); }}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
          aria-label="Schliessen"
        >
          <X className="w-4 h-4" style={{ color: '#0a3560' }} strokeWidth={2.5} />
        </button>

        {/* Content row */}
        <div className="flex items-end gap-3">
          {/* Text */}
          <div className="flex-1">
            <p className="font-black text-base leading-tight mb-2" style={{ color: '#0a3560' }}>
              Kostenlose<br />Beratung
            </p>
            <p className="text-xs leading-snug mb-4" style={{ color: '#0a3560' }}>
              Mit wenigen Klicks zur kostenlosen Offerte. Wir rufen Sie zurück und besprechen gemeinsam Ihr Anliegen.
            </p>
            <Link
              href="/anfrage"
              className="inline-block rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: '#0a3560' }}
            >
              Offerte anfordern
            </Link>
          </div>

          {/* Photo */}
          <div className="shrink-0 self-end" style={{ marginBottom: -28, marginRight: -4 }}>
            <img
              src="/images/support-popup.png"
              alt="Support"
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid white',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
