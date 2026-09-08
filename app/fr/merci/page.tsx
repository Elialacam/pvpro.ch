"use client";

import { useEffect } from 'react';
import ThankYouConfirmation from '@/components/ThankYouConfirmation';

export default function MerciPage() {
  useEffect(() => {
    document.title = 'Merci – Votre demande a été envoyée | PVPro';
  }, []);

  return <ThankYouConfirmation locale="fr" />;
}
