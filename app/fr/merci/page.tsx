"use client";

import Link from 'next/link';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function MerciPage() {
  useEffect(() => {
    document.title = 'Merci – Votre demande a été envoyée | PVPro';
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-orange-50 to-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <CheckCircle className="w-10 h-10 text-[#F97316]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Merci pour votre demande !</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Votre demande a été reçue avec succès. Nos installateurs partenaires certifiés vous contacteront dans les <strong>24 à 48 heures</strong> avec leurs meilleures offres.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { Icon: Clock, title: '24–48 heures', text: 'Délai de réponse habituel' },
              { Icon: Mail,  title: 'Jusqu\'à 3 offres', text: 'D\'installateurs certifiés' },
              { Icon: Phone, title: 'Contact direct', text: 'Par téléphone ou e-mail' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="rounded-xl p-5 border border-gray-100">
                <Icon className="w-6 h-6 text-[#F97316] mx-auto mb-2" />
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-xs text-gray-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/fr" className="px-6 py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Retour à l'accueil
            </Link>
            <Link href="/fr/comment-ca-marche" className="px-6 py-3 rounded-full font-bold text-gray-700 text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              Comment ça marche ?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
