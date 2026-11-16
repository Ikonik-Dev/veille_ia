/* Fiches de veille ajoutées le 2026-11-09 (11). Format : voir README. */
window.VEILLE = (window.VEILLE || []).concat([
 {
  "id": "cV4Mwp0ru7A",
  "titre": "Occupy SaaS : des licenciés de la tech refont leurs logiciels avec l'IA",
  "chaine": "IA IRL",
  "duree": 74,
  "lot": "2026-11-09",
  "categorie": "Actualité",
  "interet": 2,
  "dev": 2,
  "usages": [
   "metiers",
   "dev"
  ],
  "resume": "Un collectif qui se présente comme des ingénieurs licenciés, surtout aux États-Unis, recrée avec Claude des logiciels payants (Auth0, Salesforce) et les publie gratuitement en open source, à installer sur son propre serveur.",
  "points": [
   "Cible : les logiciels facturés à l'utilisateur. Exemple donné : Salesforce Entreprise à 175 € par mois et par commercial.",
   "Projet 1 : un service de connexion qui remplace Auth0 (nommé ZeroAuthy dans la presse). Projet 2 : un clone de Salesforce (SalesCompel), avec un seul développeur humain et le reste fait par l'IA.",
   "Méthode annoncée : repartir de la documentation publique des logiciels, sans copier leur code.",
   "La vidéo affirme qu'une « certification officielle » a été obtenue et qu'un ingénieur refait un tel logiciel en trois semaines avec Claude. Ces deux points ne sont pas confirmés par la presse consultée.",
   "Limite reconnue dans la vidéo : ces outils ne remplacent pas encore des logiciels dotés d'une grosse infrastructure et d'un support."
  ],
  "avis": "Bon support de discussion pour la séance sur l'IA et l'emploi. À vérifier : le collectif existe depuis octobre 2026, ses projets sont sous licence Apache-2.0, et le statut de licencié de ses membres est déclaratif. Aucun intérêt à remplacer un outil de la structure par ces projets à ce stade.",
  "tags": [
   "open source",
   "SaaS",
   "emploi",
   "Claude",
   "clonage"
  ],
  "avisDev": "Montre, selon la vidéo, des logiciels payants refaits en open source avec Claude à partir de leur documentation publique ; les délais et la certification annoncés ne sont pas confirmés."
 },
 {
  "id": "2-YCW6cQMT8",
  "titre": "Un PC IA, concrètement, ça sert à quoi ?",
  "chaine": "Materiel.net",
  "duree": 84,
  "lot": "2026-11-09",
  "categorie": "Technique",
  "interet": 1,
  "dev": 1,
  "usages": [
   "local"
  ],
  "resume": "Publicité d'un assembleur pour un PC haut de gamme « IA » : faire tourner sur sa machine des modèles d'image, de vidéo, d'analyse de documents ou d'automatisation, plutôt que dans le cloud.",
  "points": [
   "Quatre arguments pour le local : confidentialité des données, contrôle des modèles et réglages, indépendance face aux quotas des plateformes, économie pour un usage intensif.",
   "La machine présentée : Ryzen 9 9950X3D, 64 Go de RAM et une carte graphique haut de gamme. La vidéo dit RTX 4090, la description dit RTX 5090 32 Go : incohérence.",
   "Elle cite aussi des usages sans rapport avec l'IA générative (montage, rendu 3D, DLSS dans les jeux)."
  ],
  "avis": "Contenu promotionnel. Les quatre arguments sont justes et reprennent ceux de la masterclass sur l'IA locale, mais la configuration vendue dépasse de loin les besoins d'un RAG documentaire. Utile seulement comme repère de prix et de gamme pour la séance 3.",
  "tags": [
   "IA locale",
   "matériel",
   "GPU",
   "publicité"
  ]
 },
 {
  "id": "post-8-repos",
  "url": "https://www.youtube.com/post/Ugkxj9QWk2HEAWdaH7Mf3aWMTWtVxuwiLIvx",
  "titre": "8 dépôts GitHub IA à tester (post)",
  "chaine": "IA Boss",
  "duree": 0,
  "lot": "2026-11-09",
  "categorie": "Ressource",
  "interet": 2,
  "dev": 2,
  "usages": [
   "dev",
   "local"
  ],
  "resume": "Carrousel d'images présentant 8 dépôts GitHub : vidéo, 3D, business, documents, analyse de données. Les liens ne sont envoyés qu'en échange d'un commentaire ; ils ont été retrouvés et vérifiés sur GitHub le 9 novembre 2026.",
  "points": [
   "WeKnora (Tencent) : transforme des documents en base de connaissances interrogeable (RAG), avec un agent et un wiki. Très actif, près de 37 000 étoiles.",
   "BambooAI : analyse de données en Python qui montre son code et permet de rejouer les calculs. Actif depuis 2023, licence MIT.",
   "Maestro : studio local d'images, de vidéo et de musique, installé via Pinokio ; mode « Director » qui planifie un clip à partir d'un prompt. Demande une grosse carte graphique.",
   "OpenChatCut : montage vidéo piloté par conversation, local, licence AGPL-3.0.",
   "Video Shotcraft : skill pour Claude Code et Codex qui produit des vidéos promotionnelles avec Remotion.",
   "Image Blaster : skills Claude qui transforment une image en environnement 3D. Dernière mise à jour en mai 2026.",
   "Founder Skill : 11 skills Claude pour éprouver une idée de business (conseil d'administration simulé, panel de 100 clients). Publié en une seule fois le 7 octobre 2026.",
   "ArtCraft : outil de mise en scène 3D pour guider la génération d'images et de vidéos. Le même éditeur publie les clones GridCraft (tableur) et DeckCraft (présentations)."
  ],
  "avis": "Sélection inégale. Un seul dépôt compte directement pour la structure : WeKnora, à comparer avec AnythingLLM pour le RAG local de la séance 3 (licence à vérifier). BambooAI peut servir à des démonstrations. Le reste relève de la création de contenu. Méthode de la chaîne : liens contre commentaire, pour collecter de l'engagement.",
  "tags": [
   "GitHub",
   "open source",
   "RAG",
   "vidéo",
   "skills"
  ],
  "avisDev": "WeKnora est un RAG open source à comparer avec son propre projet local, et deux dépôts sont des skills pour Claude Code ; le reste relève de la création de contenu."
 },
 {
  "id": "MNFZoZUExSQ",
  "titre": "Agents IA en local, de zéro à pro en 2 h",
  "chaine": "Naier Saidane",
  "duree": 6814,
  "lot": "2026-11-09",
  "categorie": "Technique",
  "interet": 3,
  "dev": 3,
  "usages": [
   "local",
   "dev"
  ],
  "resume": "Masterclass complète pour faire tourner des modèles et des agents sur sa propre machine : matériel, réglages, mesures, sécurité, puis une partie sur la vente d'offres d'IA locale.",
  "points": [
   "Une IA est locale si le modèle tourne sur votre machine. Test simple : couper le wifi. Claude Code ou Codex ont une interface locale mais un modèle dans le cloud.",
   "Cinq briques : le fichier du modèle, le moteur (llama.cpp, MLX), l'application (Ollama, LM Studio), le harnais qui en fait un agent, et le matériel.",
   "La mémoire GPU décide de tout. Un Mac de 16 Go n'offre qu'environ 12 Go aux modèles. Règle : sur Mac, une RAM au moins double de la taille du fichier pour un agent ; sur PC, une VRAM couvrant le fichier plus 20 à 30 %.",
   "Démonstration : Mistral Small 3.2 (15 Go) met près de 10 minutes à dire bonjour sur un Mac de 16 Go ; Gemma 4 12B répond en 17 secondes.",
   "La compression Q4 est le standard local : fichier environ quatre fois plus léger, bon compromis qualité-coût.",
   "Piège majeur : Ollama donne 4 096 tokens de contexte par défaut et coupe le début du texte sans prévenir, donc les consignes. Fixer le contexte et la température dans un Modelfile.",
   "RAG ou lecture complète : les extraits sont rapides pour une question précise mais faussent une synthèse ; la lecture complète est lente (2 min 40 avant le premier mot sur 100 notes) mais seule fiable.",
   "Tester le modèle sur la vraie tâche avant d'acheter, via OpenRouter en filtrant les fournisseurs en Q4, et répéter l'essai plusieurs fois. Sur la démo, un 8B oublie des notes, un 27B non.",
   "Chaque utilisateur simultané réserve son propre contexte en mémoire : on dimensionne sur les requêtes simultanées, pas sur l'effectif.",
   "Sécurité : Ollama n'a pas d'authentification. Mettre un portier avec clé (Caddy), passer par Tailscale plutôt qu'ouvrir un port, couper le cloud d'Ollama, maîtriser les mises à jour.",
   "Branchements montrés : OpenClaw, n8n, un agent de code et AnythingLLM (assistant documentaire avec RAG local et modèle d'embedding multilingue).",
   "Coût : le local n'est pas moins cher qu'un abonnement. Son argument est la confidentialité, notamment pour les professions soumises au secret."
  ],
  "avis": "La ressource la plus utile du corpus pour un projet local avec Ollama. Le passage sur le contexte tronqué est à vérifier en priorité. La seconde moitié est orientée vente.",
  "tags": [
   "Ollama",
   "LM Studio",
   "IA locale",
   "GPU",
   "Modelfile",
   "RAG",
   "AnythingLLM",
   "n8n",
   "sécurité",
   "Mistral",
   "Gemma",
   "Qwen"
  ],
  "avisDev": "Guide complet pour un projet Ollama : dimensionnement mémoire, contexte par défaut de 4 096 tokens à fixer dans un Modelfile, choix RAG ou lecture complète, sécurisation d'Ollama ; seconde moitié orientée vente."
 },
 {
  "id": "SeQXCpZhbjc",
  "titre": "Il a laissé l'IA gérer sa vie pendant 6 mois",
  "chaine": "Underscore_",
  "duree": 1991,
  "lot": "2026-11-09",
  "categorie": "Témoignage",
  "interet": 3,
  "dev": 3,
  "usages": [
   "dev",
   "fondamentaux"
  ],
  "resume": "Le CTO d'une start-up raconte comment il a délégué une grande partie de sa vie professionnelle et personnelle à un agent IA, avec ses réussites et ses ratés.",
  "points": [
   "Point de départ : une surcharge d'informations (dizaines de sujets, dizaine de canaux) et la charge mentale qui va avec.",
   "Il parle à son agent plusieurs heures par jour : la voix va plus vite que le clavier pour documenter sa vie, et le modèle remet de l'ordre dans un discours désordonné.",
   "Chaque matin, un « podcast » de 10 minutes sur WhatsApp : agenda, anniversaires des proches, actualités.",
   "Réponses automatiques limitées aux accusés de réception et aux informations déjà publiques ; correction automatique de documents quand un relecteur signale une erreur factuelle.",
   "Ratés : faire organiser un week-end par l'agent sans le dire à sa compagne a été mal vécu. L'achat en ligne par contrôle de l'écran reste lent et coûteux ; l'agent prépare le panier, l'humain valide.",
   "Les règles de son système sont des « cicatrices » : ajoutées une à une après chaque erreur.",
   "Coût annoncé : moins de 500 dollars par mois. Migration en cours vers des modèles locaux (Qwen, Gemma) ; la rédaction en français reste leur point faible, Mistral s'en sort mieux.",
   "Conseil de départ : son éditeur habituel, un dossier de connaissances en Markdown et Claude Code, puis des MCP et des skills.",
   "Vidéo sponsorisée par Mammouth AI."
  ],
  "avis": "Très bon support pour réfléchir aux usages réels d'un agent : bénéfice concret sur la charge mentale, mais aussi transparence, sécurité et limites techniques.",
  "tags": [
   "agent personnel",
   "charge mentale",
   "transparence",
   "voix",
   "IA locale",
   "Claude Code",
   "MCP"
  ],
  "avisDev": "Retour d'expérience long sur un agent personnel bâti avec Claude Code, un dossier Markdown, des MCP et des skills, avec ses règles ajoutées après chaque erreur ; vidéo sponsorisée."
 },
 {
  "id": "dk4eorkkni8",
  "titre": "Les réglages indispensables dans Claude",
  "chaine": "Elliott Pierret",
  "duree": 77,
  "lot": "2026-11-09",
  "categorie": "Ressource",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Cinq réglages pour mieux exploiter Claude.",
  "points": [
   "Utiliser l'application de bureau plutôt que le web, notamment pour l'accès aux dossiers.",
   "Ajouter des connecteurs vers ses applications.",
   "Choisir le modèle selon la tâche : Haiku pour le simple et rapide, Sonnet au quotidien, Opus pour le complexe.",
   "Utiliser les Projets pour garder instructions et contexte.",
   "Créer des skills pour les tâches récurrentes."
  ],
  "avis": "Bon mémo pour former des collègues à Claude. Les connecteurs sont à arbitrer avec l'infogérance.",
  "tags": [
   "Claude",
   "réglages",
   "projets",
   "skills",
   "connecteurs",
   "formation"
  ]
 },
 {
  "id": "m76PejDDzJA",
  "titre": "Project NOMAD : l'IA qui marche hors ligne",
  "chaine": "Dr. Firas",
  "duree": 67,
  "lot": "2026-11-09",
  "categorie": "Outil",
  "interet": 2,
  "dev": 2,
  "usages": [
   "local"
  ],
  "resume": "Un projet open source qui transforme un ordinateur en poste autonome : Wikipédia, guides médicaux et de survie, cartes et cours hors ligne, avec une IA locale qui répond à partir de ce contenu.",
  "points": [
   "Trois briques : le savoir téléchargé, une IA qui tourne sur la machine, et l'énergie (station électrique, panneau solaire).",
   "Internet n'est nécessaire qu'une fois, pour tout installer.",
   "Plus de 40 000 étoiles GitHub annoncées ; ton alarmiste sur le « blackout »."
  ],
  "avis": "Bonne démonstration pédagogique d'une IA locale et d'un RAG sur Wikipédia, au-delà du discours sur la survie.",
  "tags": [
   "hors ligne",
   "IA locale",
   "Wikipédia",
   "Kiwix",
   "open source",
   "RAG"
  ],
  "avisDev": "Exemple concret d'IA locale avec RAG sur un contenu hors ligne ; la fiche ne donne pas de détail technique sur la mise en œuvre."
 },
 {
  "id": "5-J_m7PbooU",
  "titre": "Binance volé parce que la porte était grande ouverte",
  "chaine": "ElegArtech",
  "duree": 159,
  "lot": "2026-11-09",
  "categorie": "Actualité",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Analyse du vol d'environ 6,3 milliards de dollars chez Binance : au-delà de l'ordinateur piraté, c'est l'absence de limite sur ce qu'un seul accès pouvait faire qui pose question.",
  "points": [
   "Le portable d'un ingénieur aurait été piraté ; le FBI attribue l'attaque à un groupe nord-coréen.",
   "Les pirates ont fait valider leurs retraits par le système de contrôle lui-même, dans 10 cryptomonnaies.",
   "Concept de James Reason : les « conditions latentes », ces choix faits bien avant l'incident qui permettent qu'il prenne de l'ampleur.",
   "Fixer un plafond est un arbitrage de direction, pas un réglage technique."
  ],
  "avis": "Leçon transposable aux agents IA : limiter ce qu'un accès peut faire et prévoir une validation humaine pour les actions sensibles.",
  "tags": [
   "cybersécurité",
   "gouvernance",
   "risque",
   "accès"
  ]
 },
 {
  "id": "45ZrbWRQ5K0",
  "titre": "Laya, un classifieur local qui répond en 30 ms",
  "chaine": "Melvynx",
  "duree": 41,
  "lot": "2026-11-09",
  "categorie": "Outil",
  "interet": 1,
  "dev": 3,
  "usages": [
   "local",
   "dev"
  ],
  "resume": "Un modèle open source qui n'écrit pas de texte : il choisit la bonne réponse dans une liste, pour trier, classer ou orienter des demandes.",
  "points": [
   "Environ 30 ms en local contre 250 ms pour l'outil cloud comparé (nommé « Jev », non identifié).",
   "Le modèle de base doit être entraîné sur un cas précis, ce qui peut se faire avec Claude Code."
  ],
  "avis": "Idée intéressante pour orienter automatiquement des demandes sans envoyer de données, mais rien de directement exploitable.",
  "tags": [
   "classification",
   "routage",
   "IA locale",
   "open source"
  ],
  "avisDev": "Classifieur local rapide pour trier ou orienter des demandes sans envoyer de données, entraînable avec Claude Code ; le comparatif de vitesse porte sur un outil non identifié."
 },
 {
  "id": "FpC4SVVjlsw",
  "titre": "Agent Reach : ton agent IA sur 14 plateformes",
  "chaine": "Melvynx",
  "duree": 37,
  "lot": "2026-11-09",
  "categorie": "Outil",
  "interet": 1,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "Un dépôt open source qui donne à Claude Code ou Codex un accès en lecture à 14 plateformes : Reddit, X, GitHub, LinkedIn, Instagram, Facebook…",
  "points": [
   "Lit les issues GitHub, les fils Reddit et même des pages qui demandent d'être connecté.",
   "Présenté comme une alternative gratuite à plusieurs API payantes."
  ],
  "avis": "Peu d'usage pour la structure. L'accès à des pages connectées pose des questions de conditions d'utilisation et de sécurité des comptes.",
  "tags": [
   "agents",
   "réseaux sociaux",
   "Claude Code",
   "open source"
  ],
  "avisDev": "Donne à un agent de code un accès en lecture à des issues GitHub et des forums ; l'accès à des pages connectées pose des questions de conditions d'utilisation et de sécurité des comptes."
 },
 {
  "id": "0FqWt98KD-4",
  "titre": "Des mauvais avis de l'App Store à ton appli",
  "chaine": "Paul Automatise",
  "duree": 65,
  "lot": "2026-11-09",
  "categorie": "Business",
  "interet": 1,
  "dev": 1,
  "usages": [
   "metiers"
  ],
  "resume": "Méthode pour trouver une idée d'application : lire les mauvais avis d'une app à succès, les faire analyser par Claude, puis générer l'app avec un outil nommé Blocks.",
  "points": [
   "Captures des avis négatifs, analyse des frustrations par Claude, prompt complet de l'application.",
   "Promesses fortes (« le meilleur business de 2026 ») et appel à commenter pour recevoir la méthode."
  ],
  "avis": "Sans intérêt direct. L'idée de partir des irritants des utilisateurs reste une bonne pratique de conception.",
  "tags": [
   "business",
   "application mobile",
   "avis",
   "Claude"
  ]
 }
]);
