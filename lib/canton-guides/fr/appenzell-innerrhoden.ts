import type { CantonGuide } from "../types";
export const guide: CantonGuide = {
  id: "appenzell-innerrhoden",
  path: "/fr/solaire-appenzell-rhodes-interieures",
  canton: "Appenzell Rhodes-Intérieures",
  title:
    "Photovoltaïque en Appenzell Rhodes-Intérieures: aides et règles | PvPro.ch",
  description:
    "Photovoltaïque en Appenzell Rhodes-Intérieures: RU fédérale, conseil solaire à CHF 100, autoproduction des bâtiments neufs et autorisations.",
  h1: "Photovoltaïque en Appenzell Rhodes-Intérieures: aides, conseil et autorisations",
  intro: [
    "En Appenzell Rhodes-Intérieures, les subventions pour l’installation solaire proviennent de la Confédération via Pronovo. Le conseil solaire cantonal, distinct, coûte CHF 100. Les bâtiments neufs doivent produire eux-mêmes une partie de leur électricité. Voici les principales règles.",
  ],
  quickFacts: [
    {
      value: "CHF 100",
      label:
        "coût du conseil solaire, et non subvention pour l’installation PV",
      sourceIds: ["ai-programme"],
    },
    {
      value: "Gratuit",
      label:
        "si le conseil solaire a lieu avec le conseil «chauffez renouvelable»",
      sourceIds: ["ai-programme"],
    },
    {
      value: "Pronovo",
      label:
        "les subventions pour l’installation proviennent de la Confédération",
      sourceIds: ["ai-pronovo"],
    },
    {
      value: "Bâtiments neufs",
      label: "doivent produire eux-mêmes une partie de leur électricité",
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
    },
  ],
  sections: [
    {
      id: "saeulen",
      title: "Appenzell Rhodes-Intérieures en trois piliers",
      paragraphs: [
        "Pour un projet solaire, il faut distinguer subventions fédérales, conseil et procédure de construction. Les CHF 100 rémunèrent le conseil; ils ne constituent pas une contribution à l’installation.",
      ],
      sourceIds: ["ai-pronovo", "ai-programme", "ai-solaranlagen"],
      notice: {
        title: "À ne pas confondre",
        text: "Les CHF 100 sont le coût du conseil, pas la subvention photovoltaïque. Les aides à l’installation passent par la Confédération et Pronovo.",
        status: "important",
      },
      module: {
        kind: "pillars",
        title: "Les trois volets d’un projet solaire",
        intro: "Les compétences et conditions diffèrent pour chacun.",
        items: [
          {
            title: "Subventions fédérales",
            text: "La rétribution unique fédérale (RU) pour une installation photovoltaïque passe par Pronovo. Les sources examinées ne mentionnent aucune subvention cantonale générale pour l’installation.",
            sourceIds: ["ai-pronovo"],
          },
          {
            title: "Conseil solaire à CHF 100",
            text: "Le conseil incitatif en énergie solaire de l’association Energie AR/AI coûte CHF 100. Il est gratuit s’il a lieu en même temps que le conseil «chauffez renouvelable».",
            sourceIds: ["ai-programme"],
          },
          {
            title: "Annonce ou autorisation",
            text: "Une installation solaire suffisamment adaptée, posée sur un toit en zone à bâtir ou agricole, doit être annoncée. Les autres installations nécessitent une autorisation de construire.",
            sourceIds: ["ai-solaranlagen"],
          },
        ],
      },
    },
    {
      id: "eigenstrom",
      title: "Électricité propre des bâtiments neufs",
      paragraphs: [
        "Oui. Depuis le 1er avril 2020, un bâtiment neuf doit produire lui-même une partie de son électricité; le photovoltaïque est une solution possible.",
        "La loi et l’ordonnance révisées sur l’énergie sont entrées en vigueur le 1er avril 2020. Selon l’aide cantonale à l’exécution, l’obligation vaut aussi pour les agrandissements et surélévations dépassant la limite des extensions mineures.",
      ],
      bullets: [
        "La taille concrète est fixée dans le justificatif énergétique. Aucun chiffre général en kilowatts n’est imposé.",
        "Aucune taxe de remplacement ni compensation par un autre bâtiment n’est possible.",
        "Le surplus d’un autre bâtiment ne remplace pas l’exigence du bâtiment neuf concerné.",
        "Un bâtiment certifié Minergie doit lui aussi respecter l’autoproduction.",
        "Une exemption peut être possible dans des circonstances particulières; elle doit être motivée par une efficacité énergétique accrue et le justificatif cantonal.",
      ],
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
      notice: {
        title: "Important pour les bâtiments neufs",
        text: "Il n’existe aucune taxe de remplacement pour cette obligation. Le surplus électrique d’un autre bâtiment ne la remplace pas non plus.",
        status: "important",
      },
    },
    {
      id: "foerderung",
      title: "Bien distinguer les aides",
      paragraphs: [
        "La rétribution unique fédérale (RU) via Pronovo s’applique au photovoltaïque. Les sources examinées ne signalent aucune contribution cantonale générale à l’investissement.",
        "Pronovo gère la procédure fédérale. Il faut y vérifier conditions, délais et montant propre au projet.",
        "Le programme cantonal soutient le conseil incitatif en énergie solaire pour installations thermiques ou électriques. La participation du client est de CHF 100; seule l’association Energie AR/AI fournit ce conseil.",
        "Réservé simultanément avec le conseil «chauffez renouvelable» de l’association, le conseil solaire est gratuit. Seul le conseil combiné est sans participation du client, pas l’installation ni l’électricité.",
      ],
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
    {
      id: "bewilligung",
      title: "Faut-il une autorisation de construire?",
      paragraphs: [
        "Une installation suffisamment adaptée sur un toit en zone à bâtir ou agricole requiert en principe une annonce. Les autres installations, les objets ou zones protégés nécessitent une autorisation.",
        "Les installations hors toiture ou insuffisamment adaptées nécessitent aussi une autorisation, notamment dans les zones de protection des sites bâtis et du paysage; une installation en toiture n’est pas automatiquement dispensée parce qu’elle est photovoltaïque.",
        "Clarifiez la notice et le formulaire cantonaux avec l’autorité compétente avant de commencer.",
      ],
      sourceIds: ["ai-solaranlagen"],
      module: {
        kind: "process-flow",
        title: "Trois étapes de vérification",
        intro:
          "L’emplacement et la conception déterminent si une annonce suffit.",
        items: [
          {
            title:
              "1. L’installation est-elle sur un toit en zone à bâtir ou agricole?",
            text: "Oui: vérifiez son adaptation suffisante et préparez l’annonce. Non: clarifiez l’autorisation.",
            sourceIds: ["ai-solaranlagen"],
          },
          {
            title:
              "2. Est-elle suffisamment adaptée et sans objet protégé concerné?",
            text: "Oui: la voie prévue est l’annonce. Une demande est nécessaire en cas d’adaptation insuffisante ou si un objet, une zone protégée ou un site bâti protégé est concerné.",
            sourceIds: ["ai-solaranlagen"],
          },
          {
            title: "3. Finaliser le justificatif énergétique",
            text: "Avec une demande de permis, remettez dossier énergétique, formulaires, plans et preuves. Le maître d’ouvrage confirme ensuite l’exécution conforme avant occupation ou mise en service.",
            sourceIds: ["ai-energievollzug"],
          },
        ],
      },
    },
    {
      id: "kosten",
      title: "Combien coûte une installation solaire ici?",
      paragraphs: [
        "Le canton ne publie aucun prix PV fixe. Le toit, la taille et les équipements sont déterminants.",
        "Les CHF 100 sont une participation au conseil, pas une contribution à l’investissement. Une bonne offre décrit le bâtiment et détaille les travaux.",
        "Le meilleur comparatif repose donc sur plusieurs offres pour le même projet, et non sur un prix forfaitaire en ligne.",
      ],
      bullets: [
        "Surface, forme et surface utile du toit; type de toiture, sous-construction et adaptation",
        "Puissance et orientation",
        "Échafaudage, accès et chantier",
        "Travaux électriques, compteur et raccordement",
        "Onduleur",
        "Batterie et borne de recharge",
        "Autoconsommation attendue",
        "Installateur, garanties, documentation et prestations",
      ],
      sourceIds: ["ai-programme", "ai-solaranlagen", "ai-pronovo"],
    },
    {
      id: "fuer-wen",
      title: "À qui une installation solaire profite-t-elle particulièrement?",
      paragraphs: [
        "Pour une maison neuve, il faut clarifier tôt autoproduction, justificatif énergétique, conception du toit et raccordement. Pour un agrandissement ou une surélévation importants, vérifiez la limite des travaux mineurs auprès du service cantonal de l’énergie.",
        "Pour les toits existants, le conseil est utile si potentiel, autoconsommation et liens avec chauffage ou mobilité restent ouverts. Les propriétaires d’objets protégés ou les projets en zone de protection des sites bâtis ou du paysage devraient clarifier la procédure avant de demander des offres.",
      ],
      bullets: [
        "Bâtiment neuf ou extension importante: clarifier d’abord autoproduction et justificatif.",
        "Bâtiment existant: recourir au conseil avant la décision d’investissement.",
        "Objet ou zone protégés: coordonner tôt annonce et autorisation avec l’autorité.",
      ],
      sourceIds: [
        "ai-implementation-2020",
        "ai-energievollzug",
        "ai-programme",
        "ai-solaranlagen",
      ],
    },
  ],
  faqs: [
    {
      question: "Existe-t-il une contribution cantonale PV?",
      answer:
        "La rétribution unique fédérale (RU) via Pronovo est attestée. L’offre cantonale est le conseil incitatif solaire; les sources examinées ne mentionnent aucune subvention cantonale générale à l’investissement.",
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
    {
      question: "Combien coûte le conseil solaire?",
      answer:
        "Il coûte CHF 100 et est fourni exclusivement par l’association Energie AR/AI.",
      sourceIds: ["ai-programme"],
    },
    {
      question: "Quand le conseil est-il gratuit?",
      answer:
        "Lorsqu’Energie AR/AI le fournit en même temps que le conseil «chauffez renouvelable». La gratuité porte sur le conseil, pas sur l’installation.",
      sourceIds: ["ai-programme"],
    },
    {
      question: "Les bâtiments neufs doivent-ils produire leur électricité?",
      answer:
        "Oui. Depuis le 1er avril 2020, le droit cantonal exige une part d’autoproduction. Cela vaut aussi pour les agrandissements et surélévations au-dessus de la limite mineure; le photovoltaïque est une solution.",
      sourceIds: ["ai-energievollzug", "ai-implementation-2020"],
    },
    {
      question: "Les bâtiments Minergie doivent-ils aussi autoproduire?",
      answer:
        "Oui. Même certifiés Minergie, ils doivent respecter les exigences cantonales d’autoproduction.",
      sourceIds: ["ai-implementation-2020"],
    },
    {
      question: "Faut-il une autorisation de construire?",
      answer:
        "Une installation en toiture suffisamment adaptée en zone à bâtir ou agricole doit être annoncée. Hors de ce cas, sur un objet protégé ou dans une zone de protection des sites bâtis ou du paysage, une autorisation est nécessaire.",
      sourceIds: ["ai-solaranlagen"],
    },
    {
      question: "Qui verse la RU?",
      answer:
        "La rétribution unique fédérale est traitée via Pronovo. Le conseil cantonal en est distinct et ne la remplace pas.",
      sourceIds: ["ai-pronovo", "ai-programme"],
    },
  ],
  sources: [
    {
      id: "ai-pronovo",
      authority: "Pronovo / Confédération",
      title: "Rétribution unique (RU) pour installations photovoltaïques",
      url: "https://pronovo.ch/de/foerderung/photovoltaik",
    },
    {
      id: "ai-programme",
      authority: "Kanton Appenzell Innerrhoden",
      title: "Aide cantonale: conseil incitatif en énergie solaire",
      url: "https://www.ai.ch/themen/planen-und-bauen/energie/foerderprogramme/gebaeudesanierung",
    },
    {
      id: "ai-energievollzug",
      authority: "Kanton Appenzell Innerrhoden",
      title: "Exécution du droit énergétique et exigences pour bâtiments neufs",
      url: "https://ai.ch/themen/planen-und-bauen/energie/energievollzug",
    },
    {
      id: "ai-implementation-2020",
      authority: "Kanton Appenzell Innerrhoden",
      title:
        "Indications sur la pratique d’exécution de la loi cantonale sur l’énergie, version 1",
      url: "https://ai.ch/themen/planen-und-bauen/energie/energievollzug/dokumente/hinweise-vollzugspraxis-energ-ai-v-1.pdf/download",
    },
    {
      id: "ai-solaranlagen",
      authority: "Kanton Appenzell Innerrhoden",
      title: "Installations solaires: procédures d’annonce et d’autorisation",
      url: "https://www.ai.ch/themen/planen-und-bauen/baugesuch-1/solaranlagen",
    },
  ],
};
