'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

const formatChf = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");

export default function FoerderRechner() {
  const [kwp, setKwp] = useState(8);

  const foerderung = Math.round(kwp * 350);
  const gesamtkosten = Math.round(kwp * 2600);
  const nachFoerderung = gesamtkosten - foerderung;
  const prozent = Math.round((foerderung / gesamtkosten) * 100);

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
      {/* Top bar */}
      <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-orange-400" />
          </div>
          <p className="text-white font-bold text-lg">Förderrechner</p>
        </div>
        <p className="text-gray-400 text-sm">Berechnen Sie Ihre geschätzte Einmalvergütung</p>
      </div>

      {/* Slider area */}
      <div className="bg-white px-8 py-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Anlagengrösse</p>
            <p className="text-5xl font-black text-gray-900">{kwp} <span className="text-2xl font-bold text-gray-400">kWp</span></p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Geschätzte Förderung</p>
            <p className="text-3xl font-black text-[#F97316]">CHF {formatChf(foerderung)}</p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mb-8">
          <input
            type="range"
            min={3}
            max={30}
            step={1}
            value={kwp}
            onChange={e => setKwp(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #F97316 0%, #F97316 ${((kwp - 3) / 27) * 100}%, #e5e7eb ${((kwp - 3) / 27) * 100}%, #e5e7eb 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>3 kWp</span>
            <span>30 kWp</span>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl p-4 text-center" style={{ background: '#f9fafb' }}>
            <p className="text-xs text-gray-400 mb-1">Gesamtkosten</p>
            <p className="font-black text-gray-800 text-lg">CHF {formatChf(gesamtkosten)}</p>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-xs text-orange-400 font-semibold mb-1">Förderung</p>
            <p className="font-black text-[#F97316] text-lg">− CHF {formatChf(foerderung)}</p>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
            <p className="text-xs text-green-500 font-semibold mb-1">Effektiv</p>
            <p className="font-black text-green-700 text-lg">CHF {formatChf(nachFoerderung)}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>Förderung deckt {prozent}% der Kosten</span>
            <span>{prozent}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${prozent}%`, background: 'linear-gradient(to right, #fb923c, #F97316)' }}
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          * Schätzwerte basierend auf ca. 350 CHF/kWp EIV und 2'600 CHF/kWp Installationskosten
        </p>
      </div>
    </div>
  );
}
