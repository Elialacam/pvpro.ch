'use client';

import useScrollTracking from '@/hooks/useScrollTracking';

/**
 * Client component that tracks scroll depth
 * Add this to the layout to enable scroll tracking on all pages
 */
export default function ScrollTracking() {
  useScrollTracking();
  return null;
}
