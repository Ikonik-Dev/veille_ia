/* Fiches de veille ajoutées le 2026-10-19 (22). Format : voir README. */
window.VEILLE = (window.VEILLE || []).concat([
 {
  "id": "rVC-86vbVpk",
  "titre": "C'est quoi vLLM ? 3 mécanismes à connaître",
  "chaine": "Benoit Ferrere",
  "duree": 130,
  "lot": "2026-10-19",
  "categorie": "Technique",
  "interet": 3,
  "dev": 2,
  "usages": [
   "local",
   "dev"
  ],
  "resume": "vLLM est un moteur d'inférence, comme llama.cpp ou SGLang : il fait tourner des modèles open-weight et optimise la mémoire GPU, surtout sur de gros volumes de requêtes.",
  "points": [
   "KV cache : le modèle garde les calculs des tokens précédents pour ne pas les refaire. Ce n'est pas propre à vLLM, mais c'est très gourmand en mémoire.",
   "PagedAttention : la mémoire est découpée en blocs alloués au fur et à mesure, au lieu d'être réservée d'avance. Moins de gaspillage, plus de requêtes en parallèle.",
   "Continuous batching : une requête terminée libère sa place immédiatement pour la suivante."
  ],
  "avis": "Bon repère technique. vLLM brille sur les gros volumes ; pour un usage local à un ou quelques utilisateurs, Ollama ou llama.cpp restent plus simples.",
  "tags": [
   "vLLM",
   "inférence",
   "GPU",
   "KV cache",
   "llama.cpp"
  ],
  "avisDev": "Explique clairement KV cache, PagedAttention et continuous batching ; vLLM vise les gros volumes, Ollama ou llama.cpp restent plus simples pour quelques utilisateurs."
 },
 {
  "id": "Ak-wMJiqp6w",
  "titre": "Les 7 patterns de RAG",
  "chaine": "Benoit Ferrere",
  "duree": 17,
  "lot": "2026-10-19",
  "categorie": "Technique",
  "interet": 3,
  "dev": 3,
  "usages": [
   "local",
   "dev"
  ],
  "resume": "Vidéo sans parole ; le contenu est dans la description. Sept façons d'organiser un RAG, avec pour chacune le cas d'usage et le piège.",
  "points": [
   "RAG naïf : questions ciblées sur une base simple. Piège : une règle et son exception coupées dans deux morceaux donnent une réponse sourcée mais fausse.",
   "Advanced RAG (hybride et reranking) : mêler mots-clés exacts et sens, puis reclasser. Un reranker ne retrouve pas un document absent de la première recherche.",
   "Hiérarchique : information à plusieurs niveaux (rapport, section, passage).",
   "Auto-correctif : on évalue les documents récupérés et on reformule la recherche s'ils sont insuffisants.",
   "Graph RAG : la réponse dépend de relations (fournisseur, contrat, projet). Une relation mal extraite propage l'erreur.",
   "Multimodal : information dans des images, tableaux ou audio. Tout convertir en texte peut casser la structure.",
   "Agentique : l'agent décide à chaque étape de chercher, interroger une base ou vérifier une exception.",
   "Méthode conseillée : partir du type d'information à retrouver, puis de la façon dont la recherche peut échouer."
  ],
  "avis": "Grille de lecture très utile pour concevoir ou améliorer un RAG local.",
  "tags": [
   "RAG",
   "chunking",
   "reranking",
   "Graph RAG",
   "agentique"
  ],
  "avisDev": "Grille directement applicable pour concevoir ou améliorer un RAG local, avec pour chaque pattern son piège ; contenu limité au texte de la description."
 },
 {
  "id": "370yiaLV3tE",
  "titre": "Les 16 termes les plus utilisés en IA",
  "chaine": "chillotech",
  "duree": 2156,
  "lot": "2026-10-19",
  "categorie": "Ressource",
  "interet": 3,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Le vocabulaire de l'IA présenté dans un ordre logique, de « IA » jusqu'à « MCP », chaque terme s'appuyant sur le précédent.",
  "points": [
   "Ordre : IA, machine learning, deep learning, modèle, tokens, LLM, contexte, prompt, hallucination, embeddings, base vectorielle, RAG, fine-tuning, agent, outils, MCP.",
   "Un prompt efficace en trois parties : un rôle, une tâche, un format de sortie.",
   "RAG pour que l'IA connaisse vos documents ; fine-tuning pour qu'elle adopte votre métier ou votre ton. Le plus souvent, le RAG suffit.",
   "MCP : un standard commun pour connecter des outils aux IA, comparé à l'USB-C.",
   "Les tokens en sortie coûtent plus cher qu'en entrée ; l'auteur insiste sur le suivi de la consommation.",
   "Quelques approximations sans gravité pour débutants. La fin promeut une formation payante."
  ],
  "avis": "Idéal pour former des collègues débutants : progressif, concret, en français.",
  "tags": [
   "vocabulaire",
   "formation",
   "LLM",
   "tokens",
   "prompt",
   "RAG",
   "MCP",
   "débutant"
  ]
 },
 {
  "id": "MilSgMyGITU",
  "titre": "Un PDF devient une vidéo avec NotebookLM",
  "chaine": "stepagency",
  "duree": 39,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 3,
  "dev": 0,
  "usages": [
   "fondamentaux"
  ],
  "resume": "NotebookLM, l'outil gratuit de Google, résume un PDF, un lien ou une vidéo YouTube en vidéo d'environ une minute, avec voix off et visuels.",
  "points": [
   "Créer un notebook et importer ses sources.",
   "Dans le panneau Studio, choisir Résumé vidéo, format court, langue française, consigne facultative.",
   "Trois résumés vidéo par jour en version gratuite ; la génération peut prendre un moment."
  ],
  "avis": "Idéal pour rendre une procédure ou une note interne plus digeste. Seulement pour des documents non confidentiels : ils sont traités par Google.",
  "tags": [
   "NotebookLM",
   "Google",
   "résumé vidéo",
   "formation"
  ]
 },
 {
  "id": "CItBUagS0-w",
  "titre": "Alternatives gratuites aux logiciels payants",
  "chaine": "Loucash",
  "duree": 42,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 3,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Le site gratos.app liste les équivalents libres des logiciels qu'on paie et fournit pour chacun un prompt pour les installer avec ChatGPT ou Claude.",
  "points": [
   "On coche les logiciels payés, le site affiche les alternatives open source.",
   "Exemple cité : n8n à la place de Zapier."
  ],
  "avis": "Utile pour repérer des économies, mais chaque remplacement est à évaluer avec le prestataire informatique : installation, maintenance et sécurité restent à la charge de la structure.",
  "tags": [
   "open source",
   "gratuit",
   "n8n",
   "logiciels"
  ]
 },
 {
  "id": "hyoonDrL1LU",
  "titre": "Le skill de Cloudflare qui chasse les failles",
  "chaine": "Melvynx",
  "duree": 34,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 2,
  "dev": 3,
  "usages": [
   "dev",
   "fondamentaux"
  ],
  "resume": "Un skill Claude Code cartographie une application, envoie des agents tester connexion, base de données, API et injection de prompt, puis un agent sceptique tente de réfuter chaque faille.",
  "points": [
   "Seules les failles confirmées arrivent dans le rapport final, avec leur correctif.",
   "Plus de 28 000 étoiles GitHub annoncées. Dépôt cité : github.com/cloudflare/security-audit-skill."
  ],
  "avis": "Intéressant si la structure développe ses propres outils. Dépôt à vérifier avant usage.",
  "tags": [
   "sécurité",
   "audit",
   "Claude Code",
   "skill",
   "Cloudflare"
  ],
  "avisDev": "Skill Claude Code d'audit de sécurité avec un agent chargé de réfuter les failles, à tester sur ses propres applications ; dépôt à vérifier avant usage."
 },
 {
  "id": "lVSYNa4dKQg",
  "titre": "Construis ton Jarvis en un week-end",
  "chaine": "Le Raphiné",
  "duree": 65,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 2,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "Neuf étapes pour monter un assistant personnel vocal à partir d'un modèle d'IA.",
  "points": [
   "Une machine (vieux PC, Mac mini ou serveur) et un modèle (Claude, ChatGPT, Gemini).",
   "Un harnais agentique, un profil de l'utilisateur, des connexions (mails, agenda, navigateur).",
   "Une mémoire persistante (Letta), des skills, une messagerie avec voix (Hume, ElevenLabs), une interface (Claude Design)."
  ],
  "avis": "Bonne check-list d'architecture pour un projet d'assistant vocal, sans détail technique.",
  "tags": [
   "assistant vocal",
   "agent",
   "mémoire",
   "Letta",
   "ElevenLabs"
  ],
  "avisDev": "Check-list des briques d'un assistant vocal (harnais, mémoire persistante, skills, voix), sans détail de mise en œuvre."
 },
 {
  "id": "cY-qguglUa4",
  "titre": "Agent Standup : tes agents IA en visio",
  "chaine": "IT-Connect",
  "duree": 104,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 2,
  "dev": 3,
  "usages": [
   "dev"
  ],
  "resume": "Visualise les sessions Claude Code, Codex et Mistral Vibe comme un appel visio : statut de chaque agent, écran partagé, sous-agents, tokens consommés, replay jusqu'à la première erreur.",
  "points": [
   "Gratuit, open source (licence MIT), tourne en local.",
   "Piège : en mode français, des extraits de session partent chez Anthropic pour la traduction.",
   "Disponible sur Linux, Windows, Mac, en extension VS Code et Cursor, et en plugin Claude Code."
  ],
  "avis": "Utile pour suivre des agents de code. Garder l'interface en anglais pour que rien ne sorte.",
  "tags": [
   "agents",
   "Claude Code",
   "supervision",
   "open source"
  ],
  "avisDev": "Outil local et open source pour superviser des sessions Claude Code et leurs sous-agents ; en mode français, des extraits de session partent chez Anthropic selon la vidéo."
 },
 {
  "id": "lH3RS69kf8c",
  "titre": "Claude est trop d'accord avec nous",
  "chaine": "unefilleia",
  "duree": 40,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 2,
  "dev": 2,
  "usages": [
   "dev",
   "fondamentaux"
  ],
  "resume": "Le skill « Conseil » fait débattre cinq agents avant qu'un président de séance rende un verdict, pour éviter les réponses complaisantes.",
  "points": [
   "Cinq rôles : contradicteur, architecte, optimiste, regard extérieur, exécutant.",
   "Dépôt « llm-council-skill » ; variante multi-modèles : llm-council d'Andrej Karpathy."
  ],
  "avis": "Utile pour challenger une décision importante.",
  "tags": [
   "complaisance",
   "skill",
   "décision",
   "agents"
  ],
  "avisDev": "Exemple de skill multi-agents pour contrer les réponses complaisantes, réutilisable pour des choix d'architecture ; présentation très brève."
 },
 {
  "id": "x7ZVkvNfxk4",
  "titre": "7 outils IA d'experts",
  "chaine": "Elliott Pierret",
  "duree": 50,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 2,
  "dev": 1,
  "usages": [
   "copilot",
   "fondamentaux"
  ],
  "resume": "Panorama rapide de sept fonctions avancées des assistants IA.",
  "points": [
   "Claude Recorder, ChatGPT Visualize, Computer Use, Skills, GPT Image, Higgsfield.",
   "Copilot Cowork de Microsoft pour automatiser des tâches dans Excel, PowerPoint et Outlook."
  ],
  "avis": "Bon panorama des fonctions agentiques ; Copilot Cowork est à regarder pour un environnement Microsoft 365. Noms d'outils non vérifiés.",
  "tags": [
   "panorama",
   "Copilot",
   "Microsoft 365",
   "Computer Use",
   "skills"
  ]
 },
 {
  "id": "A1JMuEj-KY4",
  "titre": "Le nouveau langage des IA (RecursiveMAS)",
  "chaine": "Nerdy Kings",
  "duree": 113,
  "lot": "2026-10-19",
  "categorie": "Technique",
  "interet": 2,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "Des agents qui se parlent en texte perdent de l'information à chaque échange. RecursiveMAS leur fait échanger directement leurs états internes.",
  "points": [
   "Un petit « traducteur » entre agents, entraîné pour environ 4 dollars, sans réentraîner les modèles.",
   "Résultats annoncés : de 73 à près de 87 % sur des problèmes de maths, jusqu'à 75 % de tokens en moins, jusqu'à 2,4 fois plus rapide.",
   "Limite : les échanges deviennent illisibles pour un humain, donc plus difficiles à contrôler. Source : recursivemas.github.io."
  ],
  "avis": "Piste de recherche à suivre, sans application immédiate.",
  "tags": [
   "recherche",
   "multi-agents",
   "RecursiveMAS"
  ],
  "avisDev": "Piste de recherche sur la communication directe entre agents par états internes ; résultats annoncés par les auteurs, sans application immédiate."
 },
 {
  "id": "76FtaYkr0Ng",
  "titre": "3 vidéos pour apprendre à utiliser Claude",
  "chaine": "unefilleia",
  "duree": 42,
  "lot": "2026-10-19",
  "categorie": "Ressource",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux",
   "dev"
  ],
  "resume": "Un parcours gratuit en trois vidéos anglaises, doublées en français : les bases de Claude, puis Cowork et les skills, puis Claude Code.",
  "points": [
   "Le guide de Claude pour débutants (Metics Media, 1 h).",
   "Formation Claude Cowork (Jack Roberts, 1 h 05).",
   "Lancer un projet avec Claude Code (Ishan Sharma, 1 h 40)."
  ],
  "avis": "Ressource de formation à proposer aux collègues.",
  "tags": [
   "Claude",
   "formation",
   "Cowork",
   "Claude Code",
   "débutant"
  ]
 },
 {
  "id": "8JK4Kn1ppHA",
  "titre": "5 projets Claude pour débutants",
  "chaine": "unefilleia",
  "duree": 36,
  "lot": "2026-10-19",
  "categorie": "Ressource",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux",
   "metiers"
  ],
  "resume": "Cinq petits projets à créer avec Claude pour apprendre en un week-end.",
  "points": [
   "Tracker d'habitudes, bibliothèque de contenus, calculateur d'investissement, planificateur de journée, second cerveau relié à Notion.",
   "Faisable avec les artefacts d'un compte gratuit ; Claude Code demande un abonnement."
  ],
  "avis": "Bonnes idées d'exercices pour un atelier d'initiation.",
  "tags": [
   "Claude",
   "projets",
   "artefacts",
   "atelier",
   "débutant"
  ]
 },
 {
  "id": "_gF4IHgZqBA",
  "titre": "3 sites avec des IA gratuites",
  "chaine": "unefilleia",
  "duree": 39,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Trois sites pour utiliser des modèles d'IA sans abonnement, y compris depuis un téléphone.",
  "points": [
   "LM Arena : comparer les réponses de modèles côte à côte, avec un mode agent.",
   "Design Arena : même principe pour les visuels, diapositives, jeux et 3D.",
   "Google Labs : outils expérimentaux (musique, mini-applications, interfaces)."
  ],
  "avis": "Pratique pour tester des modèles sans abonnement. Usage limité, et aucune donnée sensible à y saisir.",
  "tags": [
   "gratuit",
   "LM Arena",
   "Google Labs",
   "comparaison"
  ]
 },
 {
  "id": "u_GgarcLN60",
  "titre": "11 skills Claude pour LinkedIn",
  "chaine": "Sophiène IA",
  "duree": 54,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "dev"
  ],
  "resume": "« LinkedIn Agent » : onze skills Claude Code pour préparer posts, commentaires, calendrier éditorial et réponses.",
  "points": [
   "Un skill réécrit les textes pour éviter le style IA, puis cinq sous-agents les relisent.",
   "L'utilisateur donne les consignes, relit et valide."
  ],
  "avis": "Utile seulement si LinkedIn compte dans la communication de la structure.",
  "tags": [
   "LinkedIn",
   "communication",
   "skill",
   "Claude Code"
  ]
 },
 {
  "id": "cc2wQNXmna4",
  "titre": "3 applis gratuites qui marchent sans internet",
  "chaine": "unefilleia",
  "duree": 31,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "local"
  ],
  "resume": "Des cartes hors ligne, Wikipédia hors ligne (Kiwix) et une IA open source sur téléphone sans connexion (PocketPal).",
  "points": [
   "Cartes : Organic Maps ou Maps.me.",
   "PocketPal fait tourner un petit modèle directement sur le téléphone."
  ],
  "avis": "Anecdotique, mais PocketPal illustre bien l'IA locale sur mobile.",
  "tags": [
   "hors ligne",
   "mobile",
   "Kiwix",
   "PocketPal",
   "IA locale"
  ]
 },
 {
  "id": "ecb4io3GAGE",
  "titre": "3 sites de prompts IA",
  "chaine": "Meta-tech",
  "duree": 88,
  "lot": "2026-10-19",
  "categorie": "Ressource",
  "interet": 1,
  "dev": 0,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Des bibliothèques de prompts pour générer images et vidéos ; seul youmind.com est nommé.",
  "points": [
   "On choisit un style, on copie le prompt, on le colle dans l'outil de génération."
  ],
  "avis": "Peu utile pour la structure.",
  "tags": [
   "prompts",
   "images",
   "vidéo"
  ]
 },
 {
  "id": "lIU-9o_-4OM",
  "titre": "Google Playground AI : créer des jeux par prompt",
  "chaine": "Jeux Vidéo Magazine",
  "duree": 85,
  "lot": "2026-10-19",
  "categorie": "Actualité",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Une plateforme de Google pour créer des jeux vidéo à partir d'un prompt, les modifier et les partager.",
  "points": [
   "Réservée aux États-Unis et en test ; accessible seulement par VPN depuis la France."
  ],
  "avis": "Anecdotique pour la structure.",
  "tags": [
   "Google",
   "jeux vidéo",
   "génération"
  ]
 },
 {
  "id": "olbLO9ZTAq4",
  "titre": "ArtCraft : des clones gratuits d'Adobe et d'Office",
  "chaine": "Ninon",
  "duree": 48,
  "lot": "2026-10-19",
  "categorie": "Actualité",
  "interet": 1,
  "dev": 1,
  "usages": [
   "metiers",
   "fondamentaux"
  ],
  "resume": "Un développeur aurait recréé avec l'IA des équivalents gratuits d'Adobe, Word, Excel et AutoCAD ; encore des bugs.",
  "points": [
   "Message de fond : l'IA sait déjà reproduire un logiciel de bout en bout."
  ],
  "avis": "Signal intéressant, mais risque juridique pour une structure qui utiliserait ces clones.",
  "tags": [
   "clonage",
   "logiciels",
   "droit d'auteur"
  ]
 },
 {
  "id": "L3JZ5gYERN0",
  "titre": "Skill Replica : cloner une app SaaS",
  "chaine": "Thomas Berton",
  "duree": 51,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 1,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "Onze skills Claude Code pour cloner une application à partir de son URL : analyse, reconstruction, tests, déploiement.",
  "points": [
   "Un skill lit les avis clients de l'application d'origine pour intégrer les fonctions demandées."
  ],
  "avis": "Même risque juridique qu'ArtCraft. Promesse « clone parfait à chaque fois » très marketing.",
  "tags": [
   "clonage",
   "SaaS",
   "Claude Code",
   "skill",
   "droit d'auteur"
  ],
  "avisDev": "Exemple d'enchaînement de skills Claude Code allant de l'analyse au déploiement ; promesse marketing et risque juridique du clonage."
 },
 {
  "id": "KwEmkBM-RQo",
  "titre": "Exploser sur les réseaux sans montrer sa tête",
  "chaine": "FrenchStartupper",
  "duree": 74,
  "lot": "2026-10-19",
  "categorie": "Outil",
  "interet": 1,
  "dev": 0,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Remplacer son visage par un avatar généré via le connecteur Higgsfield dans ChatGPT, en gardant mouvements et cadrage.",
  "points": [
   "Vidéo d'origine, image de référence générée, puis génération vidéo sans prompt."
  ],
  "avis": "À manier avec prudence : tout contenu de ce type doit être signalé comme généré.",
  "tags": [
   "avatar",
   "vidéo",
   "Higgsfield",
   "transparence"
  ]
 },
 {
  "id": "UeHmxZMdw2g",
  "titre": "J'ai demandé à Claude de gagner un maximum d'argent",
  "chaine": "NOCT SENSEI",
  "duree": 1525,
  "lot": "2026-10-19",
  "categorie": "Business",
  "interet": 1,
  "dev": 1,
  "usages": [
   "metiers"
  ],
  "resume": "L'auteur affiche environ 24 000 dollars de chiffre d'affaires en 4 semaines avec un SaaS codé avec Claude Code, et défend l'idée que la valeur est dans l'acquisition de clients, pas dans le produit.",
  "points": [
   "Créer un produit ne vaudrait plus grand-chose puisque l'IA permet à chacun d'en faire un.",
   "Conseil aux débutants : une agence qui installe des systèmes marketing automatisés pour des entreprises de secteurs « ennuyeux ».",
   "Chiffres non vérifiables, discours de créateur de contenu."
  ],
  "avis": "Seul enseignement transposable : l'automatisation des relances et du suivi est un usage simple de l'IA.",
  "tags": [
   "business",
   "marketing",
   "SaaS",
   "Claude Code"
  ]
 }
]);
