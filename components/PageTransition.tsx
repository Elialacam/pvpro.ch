'use client';

import { usePathname } from 'next/navigation';

/**
 * Lightweight CSS-only page fade. Replaces the previous framer-motion
 * wrapper: opacity-only (GPU-composited, no layout shift) and automatically
 * disabled for users who prefer reduced motion via globals.css.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
