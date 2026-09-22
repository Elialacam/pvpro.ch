import type { CantonGuide } from "../types";
export const guide: CantonGuide = {
  id: "aargau",
  path: "/fr/solaire-argovie",
  canton: "Argovie",
  title: "Photovoltaïque en Argovie 2026: obligation et subventions | PvPro.ch",
  description:
    "Photovoltaïque en Argovie: obligation solaire des bâtiments neufs, subventions, procédure d’annonce et règles pour toits et façades en 2026.",
  h1: "Photovoltaïque en Argovie: ce qui s’applique aux propriétaires en 2026",
  intro: [
    "En Argovie, l’obligation solaire ne concerne que certains bâtiments neufs, pas toutes les maisons existantes. Découvrez les règles et le soutien disponible pour le conseil et l’assainissement.",
  ],
  quickFacts: [
    {
      value: ">300 m²",
      label:
        "surface déterminante du bâtiment pour les constructions neuves concernées",
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
    },
    {
      value: "20 %",
      label: "surface minimale de modules lorsque l’obligation s’applique",
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
    },
    {
      value: "30 jours",
      label: "délai d’attente après une annonce sans objection",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      value: "CHF 350",
      label:
        "contribution cantonale au conseil sur l’électricité autoproduite; participation propre dès CHF 150",
      sourceIds: ["ag-beratung-2026"],
    },
  ],
  sections: [
    {
      id: "entscheidung",
      title:
        "Arbre de décision: l’obligation solaire argovienne s’applique-t-elle?",
      paragraphs: [
        "Non, l’obligation solaire argovienne selon le § 26a de l’ordonnance sur l’énergie ne s’applique pas à chaque maison. Elle concerne certains bâtiments neufs.",
        "Une surface déterminante du bâtiment supérieure à 300 m² est décisive. Les maisons individuelles (catégorie de bâtiment SIA II) sont exclues même si plusieurs bâtiments dépassent ensemble 300 m².",
      ],
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
      notice: {
        title: "Important pour les propriétaires",
        text: "Plus de 300 m² ne signifie pas que chaque maison individuelle existante est soumise à l’obligation solaire. Vérifiez ensemble construction neuve, catégorie, surface et éventuelles exceptions.",
        status: "important",
      },
      module: {
        kind: "decision-tree",
        title: "Mon bâtiment neuf est-il soumis à l’obligation solaire?",
        intro:
          "Répondez à ces questions dans l’ordre pour déterminer rapidement si votre projet est concerné.",
        items: [
          {
            title: "1. S’agit-il d’un bâtiment neuf?",
            text: "Non: cette obligation ne s’applique pas en général aux bâtiments existants. Oui: vérifiez la catégorie et la surface déterminante.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
          {
            title: "2. Est-ce une maison individuelle (catégorie SIA II)?",
            text: "Oui: la brochure solaire argovienne actuelle les exclut, même si plusieurs bâtiments dépassent ensemble 300 m². Non: vérifiez la surface.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "3. La surface déterminante dépasse-t-elle 300 m²?",
            text: "Non: l’obligation ne s’applique pas. Oui: une installation photovoltaïque ou solaire thermique doit en principe être prévue sur le toit ou la façade.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
          {
            title: "4. Une exception s’applique-t-elle?",
            text: "Oui: des règles de protection ou des coûts prévisibles excessifs peuvent permettre une exception. Détails ci-dessous. Non: l’installation doit couvrir au moins 20 % de la surface déterminante.",
            sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
          },
        ],
      },
    },
    {
      id: "solarpflicht",
      title: "Que signifie concrètement l’obligation solaire argovienne?",
      paragraphs: [
        "Sur un bâtiment neuf concerné, les modules photovoltaïques ou une installation solaire thermique sur toit ou façade doivent couvrir au moins 20 % de la surface déterminante. C’est la surface qui compte, pas une puissance donnée en kilowatts.",
        "Le calcul additionne modules photovoltaïques et absorbeurs vitrés à revêtement sélectif. Le terme officiel pour la surface déterminante est «surface de bâtiment imputable».",
        "La règle ne vise pas chaque maison existante. Outre les maisons individuelles de catégorie II, d’autres exceptions existent, notamment pour les halles gonflables, serres à toit vitré et tunnels plastiques.",
        "Une exemption peut être possible en cas de protection accrue des sites bâtis ou du paysage, ou de disproportion économique. La brochure cite l’absence d’amortissement en 25 ans et un rendement annuel attendu inférieur à 70 kWh/m² pour le photovoltaïque ou 200 kWh/m² pour le solaire thermique. Ce sont des critères légaux, pas une garantie de rendement ou d’amortissement.",
      ],
      bullets: [
        "La surface minimale est de 20 % pour une installation concernée; aucune puissance forfaitaire en kilowatts.",
        "L’exception doit être motivée de façon vérifiable dans les justificatifs de construction et d’énergie.",
      ],
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      id: "foerderung",
      title: "Subventions 2026 en Argovie",
      paragraphs: [
        "La rétribution unique fédérale (RU), gérée par Pronovo, soutient l’installation solaire elle-même. Le canton verse CHF 350 pour le conseil sommaire sur l’électricité autoproduite; CHF 20, CHF 30 ou CHF 100 par m² ne sont accordés qu’avec un assainissement subventionné et du photovoltaïque.",
        "Le montant de la RU est déterminé selon les conditions fédérales applicables au projet. La RU est distincte du conseil cantonal et des contributions à l’enveloppe du bâtiment.",
        "Le conseil sommaire traite notamment du potentiel photovoltaïque, de l’autoconsommation, du stockage, de la mobilité électrique et de la consommation. La participation des clients commence à CHF 150. C’est une prestation de planification, pas une subvention supplémentaire à l’installation.",
        "Les trois contributions à l’enveloppe exigent la pose simultanée de photovoltaïque: CHF 20/m² pour un toit plat végétalisé, CHF 30/m² pour une installation ajoutée sur toit incliné et CHF 100/m² pour une installation intégrée ou en façade sur toit incliné.",
      ],
      bullets: [
        "Toit plat végétalisé avec PV: +CHF 20/m² dans la mesure concernant l’enveloppe.",
        "Toit incliné avec installation ajoutée: +CHF 30/m² dans la mesure concernant l’enveloppe.",
        "Toit incliné avec installation intégrée ou en façade: +CHF 100/m² dans la mesure concernant l’enveloppe.",
        "Ces trois montants ne soutiennent pas une installation PV commandée seule. Vérifiez la demande pour l’assainissement éligible avant les travaux.",
      ],
      sourceIds: ["ag-pronovo", "ag-beratung-2026", "ag-programm-2026"],
      notice: {
        title: "À ne pas confondre",
        text: "Les CHF 350 financent le conseil, pas l’installation solaire. Les CHF 20, CHF 30 et CHF 100 par m² sont aussi liés à un assainissement subventionné de l’enveloppe avec PV.",
        status: "important",
      },
    },
    {
      id: "bewilligung",
      title: "Autorisation ou procédure d’annonce?",
      paragraphs: [
        "Depuis le 1er janvier 2026, une annonce suffit souvent, au lieu d’une demande complète, pour les installations suffisamment adaptées sur toit ou façade. Cela ne vaut pas automatiquement pour chaque façade.",
        "Une autorisation peut être nécessaire pour les objets protégés, les sites bâtis sensibles ou une installation insuffisamment adaptée. L’annonce utilise le formulaire solaire cantonal sur la plateforme EVEN.",
        "Avant les travaux, il faut remettre intégralement vue en élévation, coupe cotée, données de l’installation, fiches techniques et plan d’orientation.",
      ],
      sourceIds: ["ag-solarbroschuere-2026", "ag-energy-law"],
      module: {
        kind: "process-flow",
        title: "La procédure argovienne",
        intro:
          "La conception, l’emplacement et le statut de protection déterminent si l’annonce suffit.",
        items: [
          {
            title: "1. Classer le projet",
            text: "Installation suffisamment adaptée sur toit ou façade: vérifier l’annonce. Adaptation insuffisante, objet protégé ou zone sensible: clarifier l’autorisation avec la commune.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "2. Déposer l’annonce via EVEN",
            text: "Remplissez le formulaire avant les travaux avec vue en élévation, coupe cotée, données, fiches techniques et plan d’orientation.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
          {
            title: "3. Attendre 30 jours",
            text: "Une installation soumise à annonce peut être réalisée si l’autorité ne s’y oppose pas dans les 30 jours suivant sa réception. En cas d’objection ou d’autorisation obligatoire, la décision de l’autorité compétente s’applique.",
            sourceIds: ["ag-solarbroschuere-2026"],
          },
        ],
      },
    },
    {
      id: "kosten",
      title: "Combien coûte une installation solaire ici?",
      paragraphs: [
        "Le canton ne publie aucun prix PV fixe. Le toit, la taille et les équipements sont déterminants.",
        "Une bonne offre décrit le bâtiment concret et détaille les travaux. Vous pouvez ainsi comparer conditions des subventions, autoconsommation et exécution technique.",
        "Le meilleur comparatif repose donc sur plusieurs offres pour le même projet, et non sur un prix forfaitaire en ligne.",
      ],
      bullets: [
        "Surface et forme du toit, surface de modules utilisable et solution ajoutée, intégrée ou en façade adaptée",
        "Puissance et orientation",
        "Échafaudage, accès et chantier",
        "Travaux électriques, compteur et raccordement",
        "Onduleur",
        "Batterie et infrastructure de recharge",
        "Autoconsommation domestique attendue",
        "Expérience, garanties et prestations de l’installateur",
      ],
      sourceIds: ["ag-pronovo", "ag-solarbroschuere-2026"],
    },
    {
      id: "fuer-wen",
      title:
        "À qui le photovoltaïque profite-t-il particulièrement en Argovie?",
      paragraphs: [
        "Planifiez particulièrement tôt un bâtiment neuf dépassant le seuil de surface. Choisissez à temps entre photovoltaïque et solaire thermique afin de coordonner toit, façade, planification électrique et justificatif énergétique.",
        "Pour un bâtiment existant, un conseil sommaire est utile si rénovation du toit, batterie, pompe à chaleur, mobilité électrique ou autoconsommation accrue sont planifiées ensemble. Si l’enveloppe est isolée simultanément, vérifiez les trois bonus sans les confondre avec une aide PV générale.",
      ],
      sourceIds: ["ag-energy-law", "ag-beratung-2026", "ag-programm-2026"],
    },
  ],
  faqs: [
    {
      question: "Existe-t-il une obligation solaire en Argovie?",
      answer:
        "Oui, mais pas pour chaque bâtiment. Certains bâtiments neufs de plus de 300 m² de surface déterminante doivent en principe prévoir du photovoltaïque ou du solaire thermique sur toit ou façade. Vérifiez l’exception des maisons individuelles SIA II et les autres exceptions légales.",
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      question: "Les maisons individuelles sont-elles concernées?",
      answer:
        "Non. La brochure exclut expressément les maisons individuelles SIA II, même si plusieurs bâtiments dépassent ensemble 300 m². Pour les autres catégories, le contrôle de la surface reste important.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      question: "Quelle taille faut-il pour un bâtiment neuf concerné?",
      answer:
        "Les modules photovoltaïques et absorbeurs vitrés à revêtement sélectif doivent couvrir ensemble au moins 20 % de la surface déterminante. La règle ne fixe aucune puissance minimale forfaitaire.",
      sourceIds: ["ag-energy-law", "ag-solarbroschuere-2026"],
    },
    {
      question: "Une installation PV nécessite-t-elle une autorisation?",
      answer:
        "Pas forcément. Une installation suffisamment adaptée sur toit ou façade peut relever de l’annonce. Pour objets protégés, zones sensibles ou adaptation insuffisante, clarifiez l’autorisation; le formulaire passe par EVEN.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
    {
      question: "Quelles subventions existent en 2026?",
      answer:
        "La rétribution unique fédérale passe par Pronovo. Le canton contribue aussi CHF 350 au conseil sur l’électricité autoproduite, avec participation du client dès CHF 150. CHF 20, CHF 30 ou CHF 100 par m² concernent la combinaison isolation de l’enveloppe et photovoltaïque, pas une aide PV autonome.",
      sourceIds: ["ag-pronovo", "ag-beratung-2026", "ag-programm-2026"],
    },
    {
      question:
        "Existe-t-il un bonus pour rénovation du toit et photovoltaïque?",
      answer:
        "Oui, si le photovoltaïque accompagne la mesure subventionnée sur l’enveloppe. Le bonus est de CHF 20/m² pour un toit plat végétalisé, CHF 30/m² pour une installation ajoutée sur toit incliné ou CHF 100/m² pour une installation intégrée sur toit incliné ou en façade.",
      sourceIds: ["ag-programm-2026"],
    },
    {
      question: "Quand puis-je commencer après l’annonce?",
      answer:
        "Une installation suffisamment adaptée soumise à annonce peut être réalisée si l’autorité ne s’y oppose pas dans les 30 jours suivant la réception. L’annonce complète doit d’abord être déposée via EVEN.",
      sourceIds: ["ag-solarbroschuere-2026"],
    },
  ],
  sources: [
    {
      id: "ag-solarbroschuere-2026",
      authority: "Canton d’Argovie",
      title: "Brochure solaire, 4e édition 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/bauen-energie/vollzugshilfen-und-formulare/solarbroschuere-2026.pdf",
    },
    {
      id: "ag-energy-law",
      authority: "Canton d’Argovie",
      title: "Ordonnance sur l’énergie § 26a et exécution du droit énergétique",
      url: "https://gesetzessammlungen.ag.ch/app/de/texts_of_law/773.211/versions/3276",
    },
    {
      id: "ag-programm-2026",
      authority: "Canton d’Argovie",
      title: "Programme de subventions Énergie 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/foerderprogramm-2026.pdf",
    },
    {
      id: "ag-beratung-2026",
      authority: "Canton d’Argovie",
      title: "Conseils du programme de subventions 2026",
      url: "https://www.ag.ch/media/kanton-aargau/bvu/energie/foerderungen/beratungen-foerderprogramm.pdf",
    },
    {
      id: "ag-pronovo",
      authority: "Pronovo / Confédération",
      title: "Rétribution unique (RU) pour installations photovoltaïques",
      url: "https://pronovo.ch/de/foerderung/photovoltaik",
    },
  ],
};
