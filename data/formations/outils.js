/*
 * Outils présentés en formation : mettre dans "formations" l'id de la
 * formation où l'outil a été présenté (voir data/formations/formations.js).
 */
/*
 * Catégories disponibles : "Texte & assistants", "Présentation",
 * "Image", "Audio & voix", "Pédagogie", "Accessibilité",
 * "Organisation", "Recherche", "Microsoft 365" (vous pouvez en créer d'autres).
 */
window.OUTILS = [
  {
    nom: "Gamma",
    url: "https://gamma.app/",
    categorie: "Présentation",
    description:
      "Génère des présentations, documents ou pages web à partir d'une simple consigne.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Mistral AI (Le Chat)",
    url: "https://mistral.ai/fr",
    categorie: "Texte & assistants",
    description:
      "Entreprise française d'IA et son assistant conversationnel Le Chat. Alternative européenne intéressante au regard du RGPD.",
    formations: ["f1-fondamentaux-esms", "f2-associations-microsoft"],
  },
  {
    nom: "Goblin Tools",
    url: "https://goblin.tools/",
    categorie: "Organisation",
    description:
      "Petits outils pensés pour les personnes neuroatypiques : découpe une tâche en étapes (« Magic ToDo »), reformule un texte, estime une durée, analyse le ton d'un message.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Nolej",
    url: "https://www.nolej.io/fr/",
    categorie: "Pédagogie",
    description:
      "Transforme un document ou une vidéo en contenus pédagogiques interactifs (quiz, flashcards, glossaire…). Utile pour adapter des supports.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "ElevenLabs",
    url: "https://elevenlabs.io/",
    categorie: "Audio & voix",
    description:
      "Synthèse vocale très réaliste et clonage de voix. Cité aussi comme exemple de monétisation des données biométriques.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Suno",
    url: "https://suno.com/discover",
    categorie: "Audio & voix",
    description:
      "Crée des chansons complètes (musique et chant) à partir d'une description textuelle.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Recraft",
    url: "https://www.recraft.ai/",
    categorie: "Image",
    description:
      "Génération d'images, d'illustrations, d'icônes et de visuels vectoriels avec un style cohérent.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Genspark",
    url: "https://www.genspark.ai/",
    categorie: "Recherche",
    description:
      "Moteur de recherche à base d'agents IA : compile plusieurs sources en une page de synthèse et peut enchaîner des tâches.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Plaud",
    url: "https://fr.plaud.ai/",
    categorie: "Organisation",
    description:
      "Enregistreur vocal avec transcription et résumé automatiques, pour produire des comptes rendus de réunion. Attention aux données enregistrées.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Seeing AI",
    url: "https://www.seeingai.com/",
    categorie: "Accessibilité",
    description:
      "Application gratuite de Microsoft pour personnes aveugles et malvoyantes : décrit les images, lit les textes à voix haute.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "DeepL",
    url: "https://www.deepl.com/fr/translator",
    categorie: "Texte & assistants",
    description: "Traduction automatique de textes et de documents.",
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Murmur",
    url: "https://www.murmur-recorder.com/fr/",
    categorie: "Texte & assistants",
    description:
      "Murmur est une app de transcription hors ligne pour iPhone, iPad et Android. Elle transforme réunions, interviews et cours en texte consultable directement sur l’appareil et identifie automatiquement chaque locuteur.",
    aVerifier: false,
    formations: ["f1-fondamentaux-esms"],
  },
  {
    nom: "Microsoft 365 Copilot",
    url: "https://m365.cloud.microsoft/",
    categorie: "Microsoft 365",
    description:
      "L'assistant IA de Microsoft. Version Basic incluse dans Microsoft 365 (chat sécurisé, aide dans Word, Excel, Outlook…) ; version Premium payante qui exploite mails, fichiers et réunions de l'organisation.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "Copilot Agent Builder",
    url: "https://m365.cloud.microsoft/",
    categorie: "Microsoft 365",
    description:
      "Création d'agents personnalisés simples (FAQ, questions-réponses sur des documents) directement dans Copilot, sans coder. Pour aller plus loin : Copilot Studio.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "Interprète Teams",
    url: "https://www.microsoft.com/fr-fr/microsoft-teams/",
    categorie: "Microsoft 365",
    description:
      "Traduction vocale multilingue en temps réel pendant les réunions Teams (licence Copilot Premium). Utile pour l'inclusion de participants non francophones.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "Microsoft Loop",
    url: "https://loop.cloud.microsoft/",
    categorie: "Microsoft 365",
    description:
      "Espaces de travail collaboratifs (pages, listes, tableaux) façon Notion, avec Copilot pour rédiger et réviser.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "ChatGPT",
    url: "https://chatgpt.com/",
    categorie: "Texte & assistants",
    description:
      "L'assistant conversationnel d'OpenAI qui a popularisé l'IA générative. Version gratuite : attention aux données saisies.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "Claude",
    url: "https://claude.ai/",
    categorie: "Texte & assistants",
    description:
      "L'assistant d'Anthropic, reconnu pour la rédaction et l'analyse de documents longs. Ses modèles sont aussi disponibles dans Copilot Premium.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "Perplexity",
    url: "https://www.perplexity.ai/",
    categorie: "Recherche",
    description: "Moteur de réponse qui cherche sur le web et cite ses sources.",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "Gemini",
    url: "https://gemini.google.com/",
    categorie: "Texte & assistants",
    description: "L'IA de Google, disponible seule ou intégrée à Google Workspace (Gmail, Docs…).",
    formations: ["f2-associations-microsoft"],
  },
  {
    nom: "LMArena",
    url: "https://lmarena.ai/",
    categorie: "Recherche",
    description:
      "Classement public des modèles d'IA établi à partir de comparaisons à l'aveugle. Pratique pour choisir le bon modèle selon la tâche.",
    formations: ["f2-associations-microsoft"],
  },
];
