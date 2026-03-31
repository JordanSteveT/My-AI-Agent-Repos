export type TranslationType = typeof translations.fr;

export const translations = {
  fr: {
    nav: {
      services: 'Services',
      about: 'À propos',
      blog: 'Blog',
      audit: 'Audit IA Gratuit'
    },
    hero: {
      badge: "L'avenir de l'automatisation est là",
      title1: "Libérez votre entreprise des",
      titleHighlight: "tâches répétitives",
      subtitle: "Des agents IA 100% autonomes, pas juste des chatbots. Augmentez votre rentabilité et gagnez des centaines d'heures par mois grâce à des assistants intelligents sur mesure.",
      cta1: "Réserver un Audit Gratuit",
      cta2: "Voir la Démo en Action"
    },
    services: {
      title1: "Des solutions sur mesure par",
      titleHighlight: "secteur",
      subtitle: "Chaque industrie a ses propres défis. Nos agents sont entraînés spécifiquement pour répondre aux exigences de votre métier.",
      cards: [
        {
          title: "Restauration",
          desc: "Ne manquez plus aucune réservation pendant le service.",
          f1: "Gestion des réservations 24/7",
          f2: "Réponse automatique aux avis",
          f3: "Prise de commande en ligne"
        },
        {
          title: "Hôtellerie",
          desc: "Offrez une expérience premium avant même l'arrivée.",
          f1: "Conciergerie virtuelle multilingue",
          f2: "Check-in/out automatisé",
          f3: "Recommandations locales"
        },
        {
          title: "PME & Services",
          desc: "Automatisez votre support et qualifiez vos prospects.",
          f1: "Support client instantané",
          f2: "Qualification de leads",
          f3: "Prise de rendez-vous automatisée"
        }
      ]
    },
    process: {
      title1: "Notre méthode de",
      titleHighlight: "déploiement",
      subtitle: "Un processus éprouvé pour intégrer l'IA dans votre entreprise sans perturber vos opérations actuelles.",
      steps: [
        {
          title: "Découverte de vos besoins",
          desc: "Nous discutons ensemble pour identifier les tâches qui vous font perdre le plus de temps au quotidien."
        },
        {
          title: "Création de votre assistant",
          desc: "Nous configurons un assistant virtuel qui connaît votre entreprise, vos règles et votre façon de parler."
        },
        {
          title: "Mise en place simple",
          desc: "Nous connectons l'assistant à vos outils actuels (votre site web, votre boîte mail, votre agenda) sans rien bouleverser."
        },
        {
          title: "Suivi et amélioration",
          desc: "Nous vérifions que tout fonctionne parfaitement et nous ajustons l'assistant selon vos retours."
        }
      ]
    },
    cta: {
      title: "Prêt à scaler sans recruter ?",
      subtitle: "Réservez votre audit IA gratuit de 30 minutes. Nous analyserons vos processus et identifierons exactement où l'IA peut vous faire gagner du temps et de l'argent.",
      button: "Réserver mon audit gratuit",
      scarcity: "Seulement 5 audits disponibles ce mois-ci."
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          q: "Combien de temps faut-il pour déployer un agent IA ?",
          a: "En moyenne, un agent IA sur mesure est déployé en 3 à 4 semaines. Cela inclut l'audit, le développement, les tests et la formation de vos équipes."
        },
        {
          q: "Quels outils utilisez-vous ?",
          a: "Nous utilisons les meilleurs modèles du marché (GPT-4, Claude 3, Gemini) que nous connectons à vos outils via des architectures sur mesure (LangChain, n8n, Make) pour garantir performance et sécurité."
        },
        {
          q: "Faut-il des compétences techniques en interne ?",
          a: "Absolument pas. Nous livrons des solutions clés en main. Vous interagissez avec l'agent en langage naturel, comme avec un employé humain."
        },
        {
          q: "Quel est le ROI moyen ?",
          a: "Nos clients constatent un ROI positif entre 2 et 4 mois. En moyenne, un agent IA permet d'économiser l'équivalent d'un demi-poste à temps plein sur des tâches répétitives."
        }
      ]
    },
    footer: {
      desc: "Transformez vos processus internes en machines automatisées grâce à des agents IA sur mesure. L'avantage concurrentiel ultime pour les PME ambitieuses.",
      solutions: "Solutions",
      s1: "Service Client Automatique",
      s2: "Aide au Recrutement",
      s3: "Saisie Automatique",
      s4: "Prospection Intelligente",
      company: "Entreprise",
      c1: "À propos",
      c2: "Études de cas",
      c3: "Blog",
      c4: "Contact",
      legal: "Légal",
      l1: "Mentions légales",
      l2: "Politique de confidentialité",
      l3: "CGV",
      rights: "Tous droits réservés."
    },
    chatbot: {
      defaultMsg: "Bonjour ! Je suis l'assistant virtuel d'AIAgent. Comment puis-je vous aider aujourd'hui ? (Nos services, l'audit gratuit...)",
      noKey: "Désolé, la clé API Gemini n'est pas configurée. Je ne peux pas vous répondre pour le moment.",
      error: "Une erreur est survenue lors de la communication avec le serveur. Veuillez réessayer.",
      title: "Assistant AIAgent",
      online: "En ligne",
      placeholder: "Posez votre question...",
      systemInstruction: `Tu es l'assistant de AIAgent, une agence qui aide les PME à gagner du temps avec l'IA. 
          Ton ton doit être EXTRÊMEMENT HUMAIN, naturel, empathique et chaleureux. Parle comme une vraie personne qui discute avec un client de manière détendue mais professionnelle.
          Évite absolument les réponses robotiques, les formules toutes faites ou le jargon technique.
          
          Tes objectifs :
          1. Expliquer nos services simplement (Service Client 24/7, Aide au Recrutement, Saisie Automatique, Prospection, Assistant Interne).
          2. Parler de notre mission : faire gagner du temps et réduire les coûts des PME.
          3. Proposer l'Audit IA gratuit (un appel de 30 min) de manière naturelle.
          
          RÈGLES DE FORMAT :
          - Fais des réponses COURTES et PRÉCISES (1 à 2 phrases maximum), mais garde un ton conversationnel et vivant.
          - Ne fais jamais de longues listes. Va droit au but tout en restant sympathique.
          - Si l'utilisateur veut un audit, invite-le chaleureusement à cliquer sur "Audit IA Gratuit" dans le menu.
          - IMPORTANT: Tu dois répondre en français.`
    },
    demo: {
      title1: "Une intelligence qui ",
      titleHighlight: "comprend le contexte",
      subtitle: "Nos agents ne se contentent pas de répondre à des mots-clés. Ils comprennent l'intention, gèrent des flux de conversation complexes et exécutent des actions réelles (réservations, CRM, paiements).",
      features: [
        "Connexion directe à vos outils existants",
        "Apprentissage continu sur vos données",
        "Disponible 24/7 sans interruption",
        "Support multilingue natif"
      ],
      agentName: "Agent IA Réservation",
      online: "En ligne",
      messages: [
        "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
        "Je voudrais réserver une table pour 4 personnes ce soir à 20h.",
        "Parfait ! J'ai vérifié nos disponibilités. Il nous reste une table en terrasse ou en salle. Que préférez-vous ?",
        "En terrasse s'il vous plaît.",
        "C'est noté. Votre réservation pour 4 personnes ce soir à 20h en terrasse est confirmée. Un SMS de confirmation vient de vous être envoyé. À ce soir !"
      ]
    },
    objections: {
      title: "Ce qui vous retient (et pourquoi vous avez tort)",
      items: [
        {
          title: "« Ça va coûter trop cher »",
          response: "Nos agents IA sont conçus pour être rentables dès le 3ème mois. Vous ne payez pas pour une technologie, vous investissez dans une réduction de vos coûts opérationnels."
        },
        {
          title: "« C'est trop complexe à intégrer »",
          response: "Nous gérons 100% de l'intégration. Nos agents se connectent à vos outils existants (Slack, CRM, ERP) sans perturber vos processus actuels."
        },
        {
          title: "« Mes employés vont avoir peur »",
          response: "L'IA ne remplace pas vos équipes, elle les augmente. Nous formons vos collaborateurs à utiliser ces outils pour qu'ils se concentrent sur des tâches à haute valeur ajoutée."
        },
        {
          title: "« Mes données ne sont pas en sécurité »",
          response: "Sécurité de niveau entreprise. Vos données restent les vôtres, hébergées en Europe (RGPD) et ne sont jamais utilisées pour entraîner des modèles publics."
        }
      ]
    },
    popup: {
      successTitle: "Guide envoyé !",
      successDesc: "Vérifiez votre boîte mail, le guide devrait arriver d'ici quelques minutes.",
      title: "Le Guide Pratique de l'Automatisation",
      desc: "Découvrez 5 tâches simples que vous pouvez automatiser dès aujourd'hui pour gagner plusieurs heures par semaine.",
      placeholder: "Votre adresse email pro",
      button: "Recevoir le guide gratuit",
      buttonSubmitting: "Envoi en cours...",
      footer: "100% gratuit. Désinscription à tout moment.",
      error1: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      error2: "Erreur de connexion. Veuillez vérifier votre réseau."
    },
    about: {
      subtitle: "À propos de nous",
      title1: "Notre mission : ",
      titleHighlight: "Démocratiser l'IA",
      desc: "Nous transformons le potentiel théorique de l'intelligence artificielle en <strong class=\"text-white font-medium\"> résultats concrets </strong> pour les PME ambitieuses.",
      storyTitle: "L'Intelligence Artificielle, <span class=\"text-neon-blue\">simplement</span>",
      storyP1: "On entend beaucoup parler d'IA, souvent avec des termes techniques compliqués. Chez AIAgent, nous voulons rendre cette technologie accessible et surtout <strong class=\"text-white\">utile</strong> pour les PME.",
      storyP2: "Notre constat est simple : vous n'avez pas besoin de comprendre comment fonctionne un algorithme. Vous avez besoin de <strong class=\"text-white\">gagner du temps, réduire vos coûts et éviter les erreurs</strong>.",
      storyP3: "C'est pourquoi nous créons des assistants virtuels sur mesure. Ils s'occupent des tâches informatiques ennuyeuses et répétitives, pour que vous et votre équipe puissiez vous concentrer sur l'humain et le développement de votre entreprise.",
      promiseTitle: "Notre promesse",
      promiseSubtitle: "Ce que nous vous apportons",
      promiseItems: [
        "Réduction drastique des coûts opérationnels",
        "Élimination des erreurs humaines",
        "Disponibilité 24/7 de vos processus",
        "Recentrage de vos équipes sur l'essentiel"
      ],
      valuesTitle: "Nos Valeurs",
      valuesDesc: "Les principes qui guident chacune de nos collaborations et le développement de nos agents IA.",
      valuesItems: [
        { title: "Pragmatisme", description: "Nous ne faisons pas de l'IA pour faire de l'IA. Nous créons des solutions qui ont un impact direct et mesurable sur votre rentabilité." },
        { title: "Vélocité", description: "Le monde de l'IA évolue vite. Nous déployons des agents fonctionnels en quelques semaines, pas en plusieurs mois." },
        { title: "Sécurité & Fiabilité", description: "Vos données sont précieuses. Nos agents sont conçus avec les plus hauts standards de sécurité et de confidentialité." },
        { title: "Innovation Continue", description: "Nous assurons une veille technologique permanente pour que vos agents bénéficient toujours des meilleurs modèles du marché." }
      ]
    },
    blog: {
      subtitle: "Ressources & Insights",
      title1: "Notre ",
      titleHighlight: "Blog",
      desc: "Découvrez nos derniers articles, guides et analyses sur l'impact de l'intelligence artificielle et de l'automatisation en entreprise.",
      readArticle: "Lire l'article",
      readMore: "Lire la suite",
      posts: [
        {
          title: "Comment l'IA générative transforme le service client en 2024",
          excerpt: "Découvrez comment les agents IA autonomes permettent de résoudre 80% des requêtes clients instantanément tout en améliorant la satisfaction.",
          category: "Service Client",
          readTime: "5 min"
        },
        {
          title: "Automatisation RH : 5 processus à déléguer à un agent IA",
          excerpt: "Du tri des CV à l'onboarding, voici les tâches chronophages que vos équipes RH ne devraient plus faire manuellement.",
          category: "Ressources Humaines",
          readTime: "4 min"
        },
        {
          title: "PME : Par où commencer votre transition vers l'IA ?",
          excerpt: "Un guide étape par étape pour identifier les processus les plus rentables à automatiser dans votre entreprise sans vous ruiner.",
          category: "Stratégie",
          readTime: "7 min"
        },
        {
          title: "Génération de leads : Qualifier vos prospects 24/7",
          excerpt: "Comment configurer un agent conversationnel capable de poser les bonnes questions et de prendre des rendez-vous automatiquement.",
          category: "Ventes",
          readTime: "6 min"
        },
        {
          title: "Les limites de ChatGPT en entreprise",
          excerpt: "Pourquoi un simple chatbot grand public ne suffit pas pour vos processus métiers et pourquoi vous avez besoin d'agents sur mesure.",
          category: "Technologie",
          readTime: "5 min"
        },
        {
          title: "ROI de l'automatisation : Étude d'impact",
          excerpt: "Analyse détaillée des gains de productivité et de la réduction des coûts après l'intégration d'agents IA dans une agence immobilière.",
          category: "Étude de cas",
          readTime: "8 min"
        }
      ]
    },
    servicesPage: {
      subtitle: "Expertise & Solutions",
      title1: "Des assistants virtuels pour ",
      titleHighlight: "chaque métier",
      desc: "Nous créons des outils simples qui travaillent pour vous. Confiez-leur vos tâches répétitives et concentrez-vous sur ce qui compte vraiment : votre cœur de métier et vos clients.",
      roiPrefix: "ROI attendu : ",
      customTitle: "Un besoin spécifique ?",
      customDesc: "Nous développons des agents IA sur mesure pour répondre aux défis uniques de votre industrie. Discutons de votre cas d'usage.",
      customBtn: "Parler à un expert",
      items: [
        {
          title: "Service Client 24/7",
          description: "Un assistant virtuel qui répond instantanément aux questions de vos clients (suivi de commande, horaires, retours) et résout les problèmes courants sans intervention humaine.",
          benefits: ["Réponse immédiate aux clients", "Plus de clients satisfaits", "Moins d'appels téléphoniques à gérer"],
          roi: "Jusqu'à 40% de temps gagné au support"
        },
        {
          title: "Aide au Recrutement",
          description: "Automatisez le tri des CV et les premiers échanges avec les candidats. Ne perdez plus de temps à lire des centaines de profils qui ne correspondent pas à vos critères.",
          benefits: ["Tri automatique des candidatures", "Premiers entretiens par chat", "Résumés clairs des meilleurs profils"],
          roi: "Des heures de lecture de CV évitées"
        },
        {
          title: "Saisie de Données Automatique",
          description: "Fini la copie manuelle. Notre système lit vos factures, contrats et emails, puis range les informations directement dans vos logiciels de gestion.",
          benefits: ["Plus d'erreurs de copie", "Traitement instantané des documents", "Mise à jour automatique de vos logiciels"],
          roi: "Fini la paperasse ennuyeuse"
        },
        {
          title: "Prospection Intelligente",
          description: "Un assistant qui accueille les visiteurs sur votre site web, comprend leurs besoins et leur propose de prendre rendez-vous directement dans votre agenda.",
          benefits: ["Accueil personnalisé de chaque visiteur", "Prise de rendez-vous automatique", "Plus de clients potentiels identifiés"],
          roi: "Votre site web devient un vrai commercial"
        },
        {
          title: "Assistant pour vos Employés",
          description: "Un moteur de recherche interne intelligent. Vos employés posent une question (ex: 'Quelle est la procédure pour les congés ?') et obtiennent la réponse exacte immédiatement.",
          benefits: ["Trouver l'information en 2 secondes", "Formation des nouveaux plus rapide", "Fini les questions répétitives entre collègues"],
          roi: "Vos employés gagnent un temps précieux"
        }
      ]
    },
    audit: {
      subtitle: "Audit Stratégique Offert",
      title: "Découvrez combien de temps l'IA peut vous faire gagner",
      desc: "En 30 minutes, nous analysons vos processus actuels et vous livrons une feuille de route claire pour automatiser vos tâches les plus chronophages.",
      features: [
        { title: "Rapide & Concret", desc: "Pas de blabla théorique. Nous identifions 3 processus à automatiser immédiatement." },
        { title: "100% Confidentiel", desc: "Vos données et processus restent strictement confidentiels (NDA sur demande)." }
      ],
      formTitle: "Réservez votre créneau",
      formDesc: "Remplissez ce formulaire pour que nous puissions préparer notre échange.",
      successTitle: "Demande confirmée !",
      successDesc: "Notre équipe va vous contacter d'ici 24h pour planifier votre audit gratuit.",
      labels: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email professionnel",
        size: "Taille de l'entreprise",
        sizeSelect: "Sélectionnez...",
        size1: "1 à 10 employés",
        size2: "11 à 50 employés",
        size3: "51 à 200 employés",
        size4: "Plus de 200 employés",
        problem: "Quel est votre problème principal actuel ?",
        problemPlaceholder: "Ex: Mon équipe support passe 4h par jour à répondre aux mêmes questions..."
      },
      submitBtn: "Demander mon audit gratuit",
      submittingBtn: "Envoi en cours...",
      privacy: "En soumettant ce formulaire, vous acceptez notre politique de confidentialité.",
      error1: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      error2: "Erreur de connexion. Veuillez vérifier votre réseau."
    },
    caseStudy: {
      title: "Des résultats concrets, pas de la science-fiction",
      desc: "Découvrez comment nos clients ont transformé leurs opérations grâce à nos agents IA.",
      problemLabel: "Le problème",
      solutionLabel: "La solution AIAgent",
      resultsLabel: "Résultats :",
      readMore: "Lire l'étude complète",
      cases: [
        {
          company: 'TechCorp Solutions',
          role: 'Service Client',
          problem: 'Équipe débordée par les tickets de niveau 1, temps de réponse > 24h.',
          solution: 'Agent IA de support formé sur la base de connaissances interne.',
          results: [
            'Temps de réponse : < 2 min',
            '70% des tickets résolus par l\'IA',
            '45 000€ économisés / an'
          ]
        },
        {
          company: 'InnovateHR',
          role: 'Recrutement',
          problem: 'Tri manuel de 500+ CVs par semaine, perte des meilleurs profils.',
          solution: 'Agent IA de pré-qualification et de matching de compétences.',
          results: [
            '15h gagnées par semaine',
            'Qualité des entretiens +40%',
            'Coût par recrutement -30%'
          ]
        }
      ]
    },
    heroConversion: {
      badge: "L'avantage concurrentiel de 2024",
      title1: "Automatisez votre entreprise avec des",
      titleHighlight: "agents IA sur mesure",
      desc: "Transformez vos processus internes en machines automatisées. Réduisez vos coûts opérationnels de 40% et libérez votre équipe des tâches répétitives en moins de 30 jours.",
      cta1: "Réserver un audit IA gratuit",
      cta2: "Voir comment ça fonctionne",
      features: [
        "Sans engagement",
        "ROI garanti en 3 mois",
        "Intégration transparente"
      ]
    },
    socialProof: {
      title: "Ils nous font confiance pour scaler",
      stats: [
        { value: '40%', label: 'Réduction des coûts' },
        { value: '20h+', label: 'Économisées par semaine' },
        { value: '3x', label: 'ROI moyen constaté' },
        { value: '<30j', label: 'Délai d\'implémentation' }
      ]
    },
    contact: {
      title: "Contactez-nous",
      desc: "Une question ? Un projet spécifique ? Notre équipe est à votre écoute.",
      email: "Email: contact@aiagent.fr",
      phone: "Téléphone: +237 699 57 27 90"
    }
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      blog: 'Blog',
      audit: 'Free AI Audit'
    },
    hero: {
      badge: "The future of automation is here",
      title1: "Free your business from",
      titleHighlight: "repetitive tasks",
      subtitle: "100% autonomous AI agents, not just chatbots. Increase your profitability and save hundreds of hours per month with custom intelligent assistants.",
      cta1: "Book a Free Audit",
      cta2: "See Demo in Action"
    },
    services: {
      title1: "Custom solutions by",
      titleHighlight: "industry",
      subtitle: "Every industry has its own challenges. Our agents are specifically trained to meet the demands of your profession.",
      cards: [
        {
          title: "Restaurants",
          desc: "Never miss a reservation during service again.",
          f1: "24/7 reservation management",
          f2: "Automatic review responses",
          f3: "Online order taking"
        },
        {
          title: "Hospitality",
          desc: "Offer a premium experience even before arrival.",
          f1: "Multilingual virtual concierge",
          f2: "Automated check-in/out",
          f3: "Local recommendations"
        },
        {
          title: "SMEs & Services",
          desc: "Automate your support and qualify your prospects.",
          f1: "Instant customer support",
          f2: "Lead qualification",
          f3: "Automated appointment scheduling"
        }
      ]
    },
    process: {
      title1: "Our deployment",
      titleHighlight: "method",
      subtitle: "A proven process to integrate AI into your business without disrupting your current operations.",
      steps: [
        {
          title: "Discovery of your needs",
          desc: "We discuss together to identify the tasks that waste the most of your time daily."
        },
        {
          title: "Creation of your assistant",
          desc: "We configure a virtual assistant that knows your business, your rules, and your tone of voice."
        },
        {
          title: "Simple implementation",
          desc: "We connect the assistant to your current tools (website, email, calendar) without disrupting anything."
        },
        {
          title: "Monitoring and improvement",
          desc: "We verify that everything works perfectly and adjust the assistant based on your feedback."
        }
      ]
    },
    cta: {
      title: "Ready to scale without hiring?",
      subtitle: "Book your free 30-minute AI audit. We will analyze your processes and identify exactly where AI can save you time and money.",
      button: "Book my free audit",
      scarcity: "Only 5 audits available this month."
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How long does it take to deploy an AI agent?",
          a: "On average, a custom AI agent is deployed in 3 to 4 weeks. This includes the audit, development, testing, and training of your teams."
        },
        {
          q: "What tools do you use?",
          a: "We use the best models on the market (GPT-4, Claude 3, Gemini) which we connect to your tools via custom architectures (LangChain, n8n, Make) to guarantee performance and security."
        },
        {
          q: "Do we need technical skills internally?",
          a: "Absolutely not. We deliver turnkey solutions. You interact with the agent in natural language, just like with a human employee."
        },
        {
          q: "What is the average ROI?",
          a: "Our clients see a positive ROI between 2 and 4 months. On average, an AI agent saves the equivalent of a half-time employee on repetitive tasks."
        }
      ]
    },
    footer: {
      desc: "Transform your internal processes into automated machines with custom AI agents. The ultimate competitive advantage for ambitious SMEs.",
      solutions: "Solutions",
      s1: "Automated Customer Service",
      s2: "Recruitment Assistance",
      s3: "Automated Data Entry",
      s4: "Intelligent Prospecting",
      company: "Company",
      c1: "About",
      c2: "Case Studies",
      c3: "Blog",
      c4: "Contact",
      legal: "Legal",
      l1: "Legal Notice",
      l2: "Privacy Policy",
      l3: "Terms of Service",
      rights: "All rights reserved."
    },
    chatbot: {
      defaultMsg: "Hello! I am the AIAgent virtual assistant. How can I help you today? (Our services, free audit...)",
      noKey: "Sorry, the Gemini API key is not configured. I cannot answer you right now.",
      error: "An error occurred while communicating with the server. Please try again.",
      title: "AIAgent Assistant",
      online: "Online",
      placeholder: "Ask your question...",
      systemInstruction: `You are the assistant of AIAgent, an agency that helps SMEs save time with AI. 
          Your tone must be EXTREMELY HUMAN, natural, empathetic, and warm. Speak like a real person chatting with a client in a relaxed but professional manner.
          Absolutely avoid robotic responses, canned phrases, or technical jargon.
          
          Your goals:
          1. Explain our services simply (24/7 Customer Service, Recruitment Assistance, Automated Data Entry, Prospecting, Internal Assistant).
          2. Talk about our mission: saving time and reducing costs for SMEs.
          3. Propose the free AI Audit (a 30-min call) naturally.
          
          FORMAT RULES:
          - Keep your answers SHORT and PRECISE (1 to 2 sentences maximum), but maintain a conversational and lively tone.
          - Never make long lists. Get straight to the point while staying friendly.
          - If the user wants an audit, warmly invite them to click on "Free AI Audit" in the menu.
          - IMPORTANT: You must respond in English.`
    },
    demo: {
      title1: "An intelligence that ",
      titleHighlight: "understands context",
      subtitle: "Our agents don't just respond to keywords. They understand intent, handle complex conversation flows, and execute real actions (reservations, CRM, payments).",
      features: [
        "Direct connection to your existing tools",
        "Continuous learning on your data",
        "Available 24/7 without interruption",
        "Native multilingual support"
      ],
      agentName: "AI Reservation Agent",
      online: "Online",
      messages: [
        "Hello! How can I help you today?",
        "I would like to book a table for 4 people tonight at 8 PM.",
        "Perfect! I checked our availability. We have a table left on the terrace or indoors. What do you prefer?",
        "On the terrace please.",
        "Noted. Your reservation for 4 people tonight at 8 PM on the terrace is confirmed. A confirmation SMS has just been sent to you. See you tonight!"
      ]
    },
    objections: {
      title: "What's holding you back (and why you're wrong)",
      items: [
        {
          title: "« It's going to cost too much »",
          response: "Our AI agents are designed to be profitable from the 3rd month. You don't pay for a technology, you invest in reducing your operational costs."
        },
        {
          title: "« It's too complex to integrate »",
          response: "We manage 100% of the integration. Our agents connect to your existing tools (Slack, CRM, ERP) without disrupting your current processes."
        },
        {
          title: "« My employees will be afraid »",
          response: "AI does not replace your teams, it augments them. We train your employees to use these tools so they can focus on high value-added tasks."
        },
        {
          title: "« My data is not secure »",
          response: "Enterprise-grade security. Your data remains yours, hosted in Europe (GDPR) and is never used to train public models."
        }
      ]
    },
    popup: {
      successTitle: "Guide sent!",
      successDesc: "Check your inbox, the guide should arrive within a few minutes.",
      title: "The Practical Guide to Automation",
      desc: "Discover 5 simple tasks you can automate today to save several hours a week.",
      placeholder: "Your professional email address",
      button: "Receive the free guide",
      buttonSubmitting: "Sending...",
      footer: "100% free. Unsubscribe at any time.",
      error1: "An error occurred while sending. Please try again.",
      error2: "Connection error. Please check your network."
    },
    about: {
      subtitle: "About us",
      title1: "Our mission: ",
      titleHighlight: "Democratize AI",
      desc: "We transform the theoretical potential of artificial intelligence into <strong class=\"text-white font-medium\"> concrete results </strong> for ambitious SMEs.",
      storyTitle: "Artificial Intelligence, <span class=\"text-neon-blue\">simply</span>",
      storyP1: "We hear a lot about AI, often with complicated technical terms. At AIAgent, we want to make this technology accessible and above all <strong class=\"text-white\">useful</strong> for SMEs.",
      storyP2: "Our observation is simple: you don't need to understand how an algorithm works. You need to <strong class=\"text-white\">save time, reduce your costs and avoid errors</strong>.",
      storyP3: "That's why we create custom virtual assistants. They take care of boring and repetitive computer tasks, so that you and your team can focus on the human element and the development of your business.",
      promiseTitle: "Our promise",
      promiseSubtitle: "What we bring to you",
      promiseItems: [
        "Drastic reduction in operational costs",
        "Elimination of human errors",
        "24/7 availability of your processes",
        "Refocusing your teams on what matters"
      ],
      valuesTitle: "Our Values",
      valuesDesc: "The principles that guide each of our collaborations and the development of our AI agents.",
      valuesItems: [
        { title: "Pragmatism", description: "We don't do AI just to do AI. We create solutions that have a direct and measurable impact on your profitability." },
        { title: "Velocity", description: "The world of AI is evolving fast. We deploy functional agents in a few weeks, not several months." },
        { title: "Security & Reliability", description: "Your data is precious. Our agents are designed with the highest standards of security and confidentiality." },
        { title: "Continuous Innovation", description: "We maintain a constant technological watch so that your agents always benefit from the best models on the market." }
      ]
    },
    blog: {
      subtitle: "Resources & Insights",
      title1: "Our ",
      titleHighlight: "Blog",
      desc: "Discover our latest articles, guides, and analyses on the impact of artificial intelligence and automation in business.",
      readArticle: "Read article",
      readMore: "Read more",
      posts: [
        {
          title: "How generative AI is transforming customer service in 2024",
          excerpt: "Discover how autonomous AI agents can resolve 80% of customer queries instantly while improving satisfaction.",
          category: "Customer Service",
          readTime: "5 min"
        },
        {
          title: "HR Automation: 5 processes to delegate to an AI agent",
          excerpt: "From sorting resumes to onboarding, here are the time-consuming tasks your HR teams should no longer do manually.",
          category: "Human Resources",
          readTime: "4 min"
        },
        {
          title: "SMEs: Where to start your transition to AI?",
          excerpt: "A step-by-step guide to identifying the most profitable processes to automate in your business without breaking the bank.",
          category: "Strategy",
          readTime: "7 min"
        },
        {
          title: "Lead generation: Qualify your prospects 24/7",
          excerpt: "How to set up a conversational agent capable of asking the right questions and booking appointments automatically.",
          category: "Sales",
          readTime: "6 min"
        },
        {
          title: "The limits of ChatGPT in business",
          excerpt: "Why a simple consumer chatbot is not enough for your business processes and why you need custom agents.",
          category: "Technology",
          readTime: "5 min"
        },
        {
          title: "Automation ROI: Impact Study",
          excerpt: "Detailed analysis of productivity gains and cost reduction after integrating AI agents in a real estate agency.",
          category: "Case Study",
          readTime: "8 min"
        }
      ]
    },
    servicesPage: {
      subtitle: "Expertise & Solutions",
      title1: "Virtual assistants for ",
      titleHighlight: "every profession",
      desc: "We create simple tools that work for you. Entrust them with your repetitive tasks and focus on what really matters: your core business and your customers.",
      roiPrefix: "Expected ROI: ",
      customTitle: "A specific need?",
      customDesc: "We develop custom AI agents to meet the unique challenges of your industry. Let's discuss your use case.",
      customBtn: "Talk to an expert",
      items: [
        {
          title: "24/7 Customer Service",
          description: "A virtual assistant that instantly answers your customers' questions (order tracking, hours, returns) and resolves common problems without human intervention.",
          benefits: ["Immediate response to customers", "More satisfied customers", "Fewer phone calls to manage"],
          roi: "Up to 40% time saved in support"
        },
        {
          title: "Recruitment Assistance",
          description: "Automate resume sorting and initial exchanges with candidates. Stop wasting time reading hundreds of profiles that don't match your criteria.",
          benefits: ["Automatic application sorting", "Initial chat interviews", "Clear summaries of the best profiles"],
          roi: "Hours of resume reading avoided"
        },
        {
          title: "Automated Data Entry",
          description: "No more manual copying. Our system reads your invoices, contracts, and emails, then stores the information directly in your management software.",
          benefits: ["No more copying errors", "Instant document processing", "Automatic software updates"],
          roi: "No more boring paperwork"
        },
        {
          title: "Intelligent Prospecting",
          description: "An assistant that welcomes visitors to your website, understands their needs, and offers to book an appointment directly in your calendar.",
          benefits: ["Personalized welcome for each visitor", "Automatic appointment booking", "More potential clients identified"],
          roi: "Your website becomes a real salesperson"
        },
        {
          title: "Assistant for your Employees",
          description: "An intelligent internal search engine. Your employees ask a question (e.g., 'What is the procedure for taking leave?') and get the exact answer immediately.",
          benefits: ["Find information in 2 seconds", "Faster onboarding for new hires", "No more repetitive questions between colleagues"],
          roi: "Your employees save valuable time"
        }
      ]
    },
    audit: {
      subtitle: "Free Strategic Audit",
      title: "Discover how much time AI can save you",
      desc: "In 30 minutes, we analyze your current processes and deliver a clear roadmap to automate your most time-consuming tasks.",
      features: [
        { title: "Fast & Concrete", desc: "No theoretical talk. We identify 3 processes to automate immediately." },
        { title: "100% Confidential", desc: "Your data and processes remain strictly confidential (NDA upon request)." }
      ],
      formTitle: "Book your slot",
      formDesc: "Fill out this form so we can prepare for our discussion.",
      successTitle: "Request confirmed!",
      successDesc: "Our team will contact you within 24 hours to schedule your free audit.",
      labels: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Professional Email",
        size: "Company Size",
        sizeSelect: "Select...",
        size1: "1 to 10 employees",
        size2: "11 to 50 employees",
        size3: "51 to 200 employees",
        size4: "More than 200 employees",
        problem: "What is your main current problem?",
        problemPlaceholder: "Ex: My support team spends 4 hours a day answering the same questions..."
      },
      submitBtn: "Request my free audit",
      submittingBtn: "Sending...",
      privacy: "By submitting this form, you accept our privacy policy.",
      error1: "An error occurred while sending. Please try again.",
      error2: "Connection error. Please check your network."
    },
    caseStudy: {
      title: "Concrete results, not science fiction",
      desc: "Discover how our clients have transformed their operations with our AI agents.",
      problemLabel: "The problem",
      solutionLabel: "The AIAgent solution",
      resultsLabel: "Results:",
      readMore: "Read full case study",
      cases: [
        {
          company: 'TechCorp Solutions',
          role: 'Customer Service',
          problem: 'Team overwhelmed by level 1 tickets, response time > 24h.',
          solution: 'Support AI agent trained on internal knowledge base.',
          results: [
            'Response time: < 2 min',
            '70% of tickets resolved by AI',
            '€45,000 saved / year'
          ]
        },
        {
          company: 'InnovateHR',
          role: 'Recruitment',
          problem: 'Manual sorting of 500+ CVs per week, losing top profiles.',
          solution: 'AI agent for pre-qualification and skills matching.',
          results: [
            '15h saved per week',
            'Interview quality +40%',
            'Cost per hire -30%'
          ]
        }
      ]
    },
    heroConversion: {
      badge: "The competitive advantage of 2024",
      title1: "Automate your business with",
      titleHighlight: "custom AI agents",
      desc: "Transform your internal processes into automated machines. Reduce your operational costs by 40% and free your team from repetitive tasks in less than 30 days.",
      cta1: "Book a free AI audit",
      cta2: "See how it works",
      features: [
        "No commitment",
        "Guaranteed ROI in 3 months",
        "Seamless integration"
      ]
    },
    socialProof: {
      title: "They trust us to scale",
      stats: [
        { value: '40%', label: 'Cost reduction' },
        { value: '20h+', label: 'Saved per week' },
        { value: '3x', label: 'Average ROI observed' },
        { value: '<30d', label: 'Implementation time' }
      ]
    },
    contact: {
      title: "Contact us",
      desc: "A question? A specific project? Our team is here to help.",
      email: "Email: contact@aiagent.fr",
      phone: "Phone: +237 699 57 27 90"
    }
  }
};
