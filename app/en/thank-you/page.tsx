"use client";

import { useEffect } from 'react';
import ThankYouConfirmation from '@/components/ThankYouConfirmation';

export default function ThankYouEnPage() {
  useEffect(() => {
    document.title = 'Thank You – Your request has been sent | PVPro';
  }, []);

  return <ThankYouConfirmation locale="en" />;
}
