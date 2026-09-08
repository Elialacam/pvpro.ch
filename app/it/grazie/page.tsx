"use client";

import { useEffect } from 'react';
import ThankYouConfirmation from '@/components/ThankYouConfirmation';

export default function GrazieItPage() {
  useEffect(() => {
    document.title = 'Grazie – La tua richiesta è stata inviata | PVPro';
  }, []);

  return <ThankYouConfirmation locale="it" />;
}
