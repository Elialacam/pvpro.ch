'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (completeRef.current) clearTimeout(completeRef.current);
    if (hideRef.current) clearTimeout(hideRef.current);

    setWidth(0);
    setVisible(true);

    timerRef.current = setTimeout(() => setWidth(85), 30);
    completeRef.current = setTimeout(() => setWidth(100), 250);
    hideRef.current = setTimeout(() => setVisible(false), 550);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (completeRef.current) clearTimeout(completeRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
    };
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 z-[10000] h-[2px] pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, #F97316, #fb923c)',
        width: `${width}%`,
        opacity: visible ? 1 : 0,
        transition: width === 0
          ? 'none'
          : width === 100
          ? 'width 0.25s ease-out, opacity 0.25s ease 0.05s'
          : 'width 0.4s cubic-bezier(0.1, 0.5, 0.3, 1), opacity 0.1s',
      }}
    />
  );
}
