/* Formations que j'anime : guides de séance (onglet « Animer »). */
window.ANIMATIONS = [
 {
  "id": "seance-1",
  "titre": "L'IA au quotidien — Séance 1",
  "sousTitre": "Comprendre, utiliser, se protéger",
  "date": "2026-11-19",
  "debut": "13:30",
  "fin": "16:00",
  "public": "Environ 20 personnes de l'équipe, tous métiers",
  "diapos": 63,
  "regles": [
   "Aucune vraie donnée dans les démos : tous les exemples sont inventés.",
   "Chaque notion est suivie d'une démo. Pas plus de 3 minutes de parole sans montrer quelque chose.",
   "La méfiance est une bonne nouvelle : on l'accueille, on ne la combat pas."
  ],
  "etapes": [
   {
    "heure": "13:30",
    "duree": 5,
    "titre": "Accueil",
    "diapos": "1 à 5",
    "message": "Pas besoin d'être à l'aise avec l'informatique.",
    "points": [
     "Se présenter comme référent IA.",
     "Annoncer le rythme : un peu de théorie, puis une démo, à chaque fois. Un atelier à la fin.",
     "Présenter les 3 séances : les bases aujourd'hui, Copilot en janvier, l'IA locale ensuite.",
     "**Tour de table, 3 min maximum**, à main levée : qui a déjà utilisé une IA ? Pour quoi faire ? Qui s'en méfie ?",
     "Noter au tableau 2 ou 3 usages cités : ils serviront à l'atelier.",
     "Lire les 3 objectifs : expliquer, distinguer, écrire un bon prompt."
    ]
   },
   {
    "heure": "13:35",
    "duree": 10,
    "titre": "01 · C'est quoi, une IA ?",
    "diapos": "6 à 11",
    "message": "Une IA n'est pas un cerveau. C'est un programme qui a appris avec des données.",
    "points": [
     "**Un mot trompeur** : on peut dire « système qui aide à décider ». Deux familles : l'IA à règles (prévisible), l'IA qui apprend (probable).",
     "**Exercice du chiffre** : choisir un chiffre de 1 à 9, ×37, puis ×3. Tout le monde trouve son chiffre répété 3 fois (5 → 555), car 37 × 3 = 111. Un algorithme classique donne toujours le même résultat.",
     "**Trois ingrédients** : un algorithme, des données, un apprentissage. Données mauvaises = réponses mauvaises.",
     "**Cinq familles** : raisonner, langage, voir, données, agir. Demander un exemple du quotidien pour chacune.",
     "**Six dates** : 1950, 1966, 1997, 2016, fin 2022, 2026. L'idée est ancienne, l'accès pour tous date de fin 2022."
    ]
   },
   {
    "heure": "13:45",
    "duree": 30,
    "titre": "02 · Comment fonctionne une IA qui converse",
    "diapos": "12 à 26",
    "message": "L'IA ne sait pas. Elle calcule la suite la plus probable, mot après mot.",
    "points": [
     "**Trois cercles** : IA, puis machine learning, puis deep learning. ChatGPT et Copilot sont dans le plus petit.",
     "**Modèle et LLM** : le modèle est le moteur, l'outil est l'application.",
     "**Le mot suivant** : « Paris est la capitale de… ».",
     "**Tokens** : des morceaux de mots. Unité de calcul, de mémoire et de prix.",
     "**Contexte** : ce que l'IA voit de la conversation. Une nouvelle conversation pour chaque sujet.",
     "**Prompt** : tout ce qu'on donne, fichiers joints compris.",
     "**Hallucination** : faire répéter « On ne demande à l'IA que ce qu'on est capable de vérifier. »",
     "**Biais** : la montre à 10 h 10, les 99 téléphones de Berlin.",
     "**Le faux qui a l'air vrai** : voix, image, vidéo. Réflexe : raccrocher et rappeler par un numéro connu.",
     "**RAG et agents** : une phrase chacun, sans technique.",
     "**Les 8 mots du jour** : faire deviner chaque définition avant de l'afficher."
    ],
    "demos": [
     {
      "nom": "Démo 1 · Jamais deux fois pareil",
      "duree": 3,
      "prompt": "Termine cette phrase en une ligne : « Le lundi matin, au centre de formation… »",
      "observer": "Lancer 2 fois, dans 2 nouvelles conversations. Deux suites différentes, toutes deux plausibles. Lien avec l'exercice du chiffre."
     },
     {
      "nom": "Démo 2 · La mémoire de la conversation",
      "duree": 3,
      "prompt": "Retiens ceci : notre atelier cuisine a lieu le jeudi à 10 h.",
      "suite": [
       "Quand a lieu l'atelier cuisine ? (même conversation)",
       "Quand a lieu l'atelier cuisine ? (nouvelle conversation)"
      ],
      "observer": "Même conversation : elle répond juste. Nouvelle conversation : elle ne sait plus, ou elle invente (transition vers l'hallucination)."
     },
     {
      "nom": "Démo 3 · On vérifie les sources",
      "duree": 4,
      "prompt": "Cite trois études françaises sur la reconversion professionnelle des adultes en situation de handicap, avec auteurs, année et lien.",
      "observer": "Ouvrir chaque lien en direct. Lien mort = hallucination en direct. Liens réels = l'outil a cherché sur le web, mais on vérifie ce qu'ils disent. Montrer le temps qu'il faut pour vérifier."
     }
    ]
   },
   {
    "heure": "14:15",
    "duree": 15,
    "titre": "03 · Copilot dans nos outils",
    "diapos": "27 à 30",
    "message": "Copilot est déjà là, inclus dans nos licences. Toujours avec le compte professionnel.",
    "points": [
     "**Copilot est déjà là** : Teams, Outlook, le web. Word, Excel, PowerPoint : **à confirmer selon notre abonnement**.",
     "**Ce qu'il fait, ce qu'il ne fait pas** : la question à retenir, « qui lui donne l'information ? ». Avec le plan de base, c'est nous (web, fichier chargé, contenu affiché). Aller chercher seul dans tous nos mails et fichiers, c'est la licence payante.",
     "Montrer le bouclier de protection des données s'il est visible. S'il ne l'est pas, le dire.",
     "Rester en aperçu : la séance 2 est consacrée à Copilot."
    ],
    "demos": [
     {
      "nom": "Démo 4 · Reformuler un mail (dans Teams)",
      "duree": 3,
      "prompt": "Reformule ce mail pour qu'il soit plus courtois et plus court : « Bonjour, je vous rappelle ENCORE que la salle 12 doit être libérée à 17 h. Merci de respecter enfin cette consigne. »",
      "suite": [
       "Plus chaleureux.",
       "En trois lignes."
      ],
      "observer": "Le ton change, le fond reste. On peut affiner. Mail fictif : jamais de vrai mail en démo."
     }
    ]
   },
   {
    "heure": "14:30",
    "duree": 15,
    "titre": "04 · L'IA dans notre établissement",
    "diapos": "31 à 40",
    "message": "L'IA prépare, l'humain décide.",
    "points": [
     "**Et les autres associations ?** 18 % utilisent déjà l'IA, 13 % l'envisagent. Ni en retard, ni en avance.",
     "**Et chez nous ?** « L'IA est déjà utilisée. Mais sans cadre. » Exemples à l'oral, sans nommer personne, sans juger.",
     "**Gagner du temps** : reformuler, structurer un compte rendu à partir de notes anonymisées, préparer un support, simplifier un texte, trouver des idées d'exercices. Et chez vous ?",
     "**Accessibilité** : Windows + H, Seeing AI, Goblin Tools, sous-titres Teams. Le besoin observé, jamais le diagnostic.",
     "**Nos stagiaires et l'IA** : des pistes à discuter. Les détecteurs de texte IA ne sont pas fiables.",
     "**L'emploi** : laisser la parole, le débat est ouvert.",
     "**L'IA prépare. L'humain décide.**",
     "**Quelle tâche me fait perdre du temps ?** Une minute de silence, chacun note une tâche, sans donnée personnelle."
    ],
    "demos": [
     {
      "nom": "Démo 5 · Rendre un texte facile à lire",
      "duree": 3,
      "prompt": "Réécris ce texte pour qu'il soit facile à lire : phrases courtes, mots simples, une idée par phrase. « Les stagiaires sont tenus de signaler toute absence au secrétariat dans les meilleurs délais et de fournir un justificatif sous 48 heures. »",
      "observer": "Les 48 heures et le secrétariat sont-ils toujours là ? Un brouillon simplifié, pas du FALC officiel."
     }
    ]
   },
   {
    "heure": "14:45",
    "duree": 5,
    "titre": "Pause",
    "diapos": "41",
    "message": "On reprend à 14 h 50.",
    "points": [
     "Vérifier que LM Arena et les outils de l'atelier s'ouvrent sur les postes."
    ]
   },
   {
    "heure": "14:50",
    "duree": 20,
    "titre": "05 · Données et sécurité",
    "diapos": "42 à 51",
    "message": "Dans un outil gratuit ou grand public, jamais de données personnelles.",
    "points": [
     "**La règle d'or** : la faire lire à voix haute. Nom, situation, santé, handicap, parcours.",
     "**Gratuit, mais à quel prix ?** Un outil gratuit peut se servir de nos conversations. Copilot avec le compte pro : Microsoft s'engage à ne pas le faire.",
     "**Feux** : vert = générique ou inventé. Orange = interne sans nom, seulement dans Copilot pro. Rouge = jamais (dossiers de stagiaires, santé, RH).",
     "**Enlever le nom ne suffit pas** : 34 ans + Melun + formation comptable + entrée en mars. Dans le doute, on invente.",
     "**Quiz à main levée** : affiche portes ouvertes = vert ; bilan de fin de parcours = rouge ; procédure d'accueil sans nom = orange ; article de presse publié = vert.",
     "**Le cadre** : RGPD, règlement européen sur l'IA. En cas de doute : le référent IA ou la DPO.",
     "**A.V.E.C.** (HAS) : Apprendre, Vérifier, Estimer, Communiquer.",
     "**Trois pièges** : le faux sûr de lui, le contenu non signalé, l'outil installé sans accord.",
     "**Et la planète ?** Nos leviers : un prompt précis, le bon outil, pas d'image « pour voir »."
    ]
   },
   {
    "heure": "15:10",
    "duree": 15,
    "titre": "06 · Bien rédiger un prompt",
    "diapos": "52 à 55",
    "message": "Un bon prompt a 4 briques : rôle, contexte, tâche, format.",
    "points": [
     "**Les 4 briques** : qui parle, pour qui et pourquoi, quoi faire, sous quelle forme. Le format est la plus oubliée.",
     "**Quatre réflexes** : affiner par petites demandes, la faire questionner, vérifier, lui interdire d'inventer."
    ],
    "demos": [
     {
      "nom": "Démo 6 · Avant, après",
      "duree": 4,
      "prompt": "Fais-moi des questions sur Excel.",
      "suite": [
       "Tu es formateur en insertion professionnelle. Je prépare une séance pour des adultes en reconversion. Propose 5 questions pour évaluer la compréhension d'un tableau Excel. Présente-les en liste numérotée, avec la réponse attendue."
      ],
      "observer": "Deux conversations séparées. La première est générique ; la seconde vise le bon public, dans un format utilisable."
     }
    ]
   },
   {
    "heure": "15:25",
    "duree": 25,
    "titre": "07 · Atelier : un sujet, plusieurs IA",
    "diapos": "56 à 60",
    "message": "Les IA ne répondent pas pareil, et aucune n'est fiable à 100 %.",
    "points": [
     "**Consigne** : groupes de 3 ou 4, un sujet réel sans donnée personnelle, un prompt en 4 briques, plusieurs IA, on compare.",
     "**Outils** : LM Arena, Copilot (compte pro), Le Chat, ChatGPT, Claude. Grand public = feu vert uniquement.",
     "Laisser la **grille** affichée : juste ? complet ? adapté ? une invention ? laquelle garder ?",
     "Passer dans les groupes : aucune vraie donnée.",
     "**Sujets de secours** : un mail d'invitation ; un extrait du règlement à simplifier (Copilot pro) ; un quiz sécurité.",
     "**Mise en commun, 10 min** : 2 minutes par groupe."
    ]
   },
   {
    "heure": "15:50",
    "duree": 10,
    "titre": "À retenir, charte et suite",
    "diapos": "61 à 63",
    "message": "L'IA prépare, l'humain vérifie et décide.",
    "points": [
     "**5 points à retenir** : faire reformuler chacun par la salle. Le point 3 (pas de données personnelles) est le plus important.",
     "Revenir sur les 3 objectifs du début.",
     "**Charte IA** : on l'écrit ensemble ; les tâches notées aujourd'hui servent de départ.",
     "**Suite** : séances 2 et 3 en janvier. D'ici là : tester les 4 briques sur une vraie tâche.",
     "Questions jusqu'à 16 h. Recueillir un retour rapide."
    ]
   }
  ],
  "avant": [
   "Salle, vidéoprojecteur et écran de diffusion vérifiés.",
   "Connexion internet du poste de démo.",
   "Copilot ouvert avec le compte professionnel ; bouclier de protection visible ?",
   "Copilot ouvert dans Teams (démo 4).",
   "Onglets ouverts : LM Arena, Le Chat, ChatGPT, Claude.",
   "Prompts des démos prêts (bouton « Copier » sur cette page).",
   "Papier et stylos pour noter une tâche (chapitre 4).",
   "2 ou 3 exemples d'usages non encadrés, sans nommer personne."
  ],
  "apres": [
   "Ramasser les tâches notées : matériau pour la charte et la séance 2.",
   "Répondre aux questions restées ouvertes.",
   "Noter le retour de la salle et l'heure réelle de fin de chaque chapitre.",
   "Faire vérifier avec le prestataire : abonnement Copilot exact, bouclier de protection, journaux d'activité.",
   "Choisir comment recueillir les contributions à la charte.",
   "Envoyer à l'équipe : les 8 mots du jour, la règle d'or, les feux, le défi des 4 briques."
  ],
  "coupes": [
   "Démo 2 (mémoire) : la raconter au lieu de la faire — 3 min.",
   "Démo 5 (texte facile à lire) : montrer seulement le résultat — 2 min.",
   "Biais et faux qui a l'air vrai : un seul exemple chacun — 2 min.",
   "Accessibilité, stagiaires, emploi : passer vite, renvoyer à la charte — 4 min.",
   "Et la planète ? : lire seulement les leviers — 2 min.",
   "Mise en commun : 2 groupes au lieu de tous — 4 min."
  ],
  "intouchables": "La règle d'or, les feux, le quiz, la démo avant/après, l'atelier (au moins 15 min).",
  "incidents": [
   {
    "q": "Copilot ne s'ouvre pas",
    "r": "Ouvrir m365.cloud.microsoft/chat avec le compte pro. Le plan de base peut ralentir aux heures de forte demande : réessayer une minute plus tard. Sinon, raconter la démo."
   },
   {
    "q": "Pas d'internet",
    "r": "Raconter les démos. Atelier sur papier : chaque groupe écrit son prompt en 4 briques, testé plus tard."
   },
   {
    "q": "La démo ne donne pas le résultat attendu",
    "r": "C'est une leçon : l'IA n'est pas prévisible. L'exploiter au lieu de recommencer."
   },
   {
    "q": "Démo 3 : toutes les sources sont réelles",
    "r": "L'outil a cherché sur le web. Ouvrir un lien pour vérifier qu'il dit bien ce qui est annoncé."
   },
   {
    "q": "Démo 2 : l'IA se souvient dans la nouvelle conversation",
    "r": "La mémoire entre conversations est activée : expliquer que c'est un réglage à connaître."
   },
   {
    "q": "LM Arena bloqué",
    "r": "Copilot (compte pro) et Le Chat dans deux onglets côte à côte."
   },
   {
    "q": "Quelqu'un colle une vraie donnée",
    "r": "L'arrêter avec bienveillance, supprimer la conversation, remplacer par des détails inventés."
   }
  ],
  "questions": [
   {
    "theme": "Fonctionnement",
    "q": "Est-ce que l'IA comprend ce qu'elle dit ?",
    "r": "Non. Elle calcule la suite de mots la plus probable. Elle peut écrire un texte juste sans le comprendre au sens humain."
   },
   {
    "theme": "Fonctionnement",
    "q": "Pourquoi elle ne répond pas deux fois pareil ?",
    "r": "Elle choisit à chaque fois une suite probable parmi plusieurs. C'est la démo 1."
   },
   {
    "theme": "Fonctionnement",
    "q": "Où va-t-elle chercher ses réponses ?",
    "r": "Dans ce qu'elle a appris à l'entraînement. Certains outils, comme Copilot, cherchent aussi sur le web au moment de répondre."
   },
   {
    "theme": "Fonctionnement",
    "q": "Est-ce qu'elle apprend de ce que je lui dis ?",
    "r": "Pas pendant la conversation. Mais un outil grand public peut garder nos conversations pour entraîner ses prochaines versions. Avec le compte pro, Copilot s'engage à ne pas le faire."
   },
   {
    "theme": "Fonctionnement",
    "q": "Elle se souvient de moi d'une fois sur l'autre ?",
    "r": "En général non. Certains outils ont une option « mémoire » : un réglage à connaître."
   },
   {
    "theme": "Fonctionnement",
    "q": "Pourquoi elle invente au lieu de dire qu'elle ne sait pas ?",
    "r": "Elle est faite pour produire une suite plausible, pas pour vérifier. « S'il manque une information, signale-le » réduit le risque sans le supprimer."
   },
   {
    "theme": "Fonctionnement",
    "q": "Quelle est la meilleure IA ?",
    "r": "Il n'y en a pas une seule : ça dépend de la tâche et ça change vite. Pour nous, la meilleure est celle qu'on a le droit d'utiliser avec nos données : Copilot avec le compte pro."
   },
   {
    "theme": "Copilot",
    "q": "Copilot, c'est gratuit ?",
    "r": "Le plan de base est inclus dans nos licences. La version qui va chercher seule dans nos mails et fichiers est payante (de 18 à 26 € HT par mois et par personne, prix publics de novembre 2026). Ce que couvre exactement notre abonnement est à confirmer avec le prestataire."
   },
   {
    "theme": "Copilot",
    "q": "Copilot marche dans Word et Excel ?",
    "r": "À confirmer : cela dépend de notre abonnement exact, en cours de vérification avec le prestataire. Je vous redis en séance 2."
   },
   {
    "theme": "Copilot",
    "q": "Copilot lit mes mails ?",
    "r": "Le plan de base ne va pas chercher seul dans la boîte mail. Il voit ce qu'on lui donne et, selon le plan, le contenu affiché à l'écran. À vérifier avant d'y ouvrir un mail sensible."
   },
   {
    "theme": "Copilot",
    "q": "Mon responsable voit-il ce que je demande à Copilot ?",
    "r": "Les administrateurs peuvent avoir des journaux d'activité selon la configuration. Je ne sais pas ce qui est activé chez nous : je vérifie avec le prestataire."
   },
   {
    "theme": "Copilot",
    "q": "Je peux utiliser ChatGPT avec mon compte perso ?",
    "r": "Pour du feu vert (générique ou inventé), oui. Pour tout document interne, non : Copilot avec le compte pro."
   },
   {
    "theme": "Copilot",
    "q": "Je ne vois pas le bouclier de protection.",
    "r": "Vérifier qu'on est connecté avec le compte professionnel. Sinon, pas de document interne, et me prévenir."
   },
   {
    "theme": "Copilot",
    "q": "Pourquoi pas Le Chat de Mistral, qui est français ?",
    "r": "Bonne option gratuite pour du feu vert. Mais nous n'avons pas de contrat avec Mistral : « français » ne veut pas dire « couvert par notre contrat »."
   },
   {
    "theme": "Données",
    "q": "Si j'enlève le nom, je peux mettre un compte rendu ?",
    "r": "Pas dans un outil grand public : les détails croisés suffisent à reconnaître quelqu'un. Dans Copilot pro, seulement après avoir remplacé tous les détails réels. En cas de doute : la DPO."
   },
   {
    "theme": "Données",
    "q": "J'ai déjà mis des données de stagiaires dans ChatGPT…",
    "r": "Pas de panique, pas de culpabilité. Supprimer la conversation, désactiver l'option d'entraînement, prévenir la DPO."
   },
   {
    "theme": "Données",
    "q": "A-t-on le droit d'utiliser l'IA au travail ?",
    "r": "Oui, dans un cadre : la règle d'or, les feux et bientôt notre charte. Le règlement européen demande même à l'employeur de former les équipes."
   },
   {
    "theme": "Données",
    "q": "L'IA peut-elle faire un bilan de stagiaire ?",
    "r": "Non : document sur une personne, feu rouge. Une évaluation de personne est un usage « à haut risque » selon le règlement européen. Elle peut aider à préparer un modèle vide."
   },
   {
    "theme": "Données",
    "q": "Les extensions IA du navigateur, c'est grave ?",
    "r": "Potentiellement : une extension peut lire tout ce qui s'affiche. Rien d'installé sans passer par le référent IA et le prestataire."
   },
   {
    "theme": "Métier",
    "q": "L'IA va-t-elle nous remplacer ?",
    "r": "Personne ne le sait avec certitude. Elle automatise surtout des tâches. La relation, l'accompagnement et les décisions sur les personnes restent humains. C'est un débat."
   },
   {
    "theme": "Métier",
    "q": "Mes stagiaires rendent des devoirs faits avec ChatGPT.",
    "r": "Les détecteurs ne sont pas fiables : jamais de sanction sur leur seule base. Pistes : demander de le signaler, faire expliquer à l'oral, évaluer le raisonnement."
   },
   {
    "theme": "Métier",
    "q": "Faut-il apprendre l'IA aux stagiaires ?",
    "r": "Ils se reconvertissent vers le numérique : s'en servir avec esprit critique devient une compétence attendue. À discuter en équipe, dans la charte."
   },
   {
    "theme": "Métier",
    "q": "Le texte simplifié par l'IA, c'est du FALC ?",
    "r": "Non. C'est un brouillon utile. Le FALC suit des règles précises et se relit avec des personnes concernées."
   },
   {
    "theme": "Éthique",
    "q": "Une requête consomme un demi-litre d'eau ?",
    "r": "Pas tel quel : ce chiffre vient d'une estimation de 2023 sur une série de réponses. Les chiffres publiés en 2025 vont de moins d'un millilitre à environ 45 mL par réponse, méthodes différentes. La consommation globale des datacenters, elle, augmente."
   },
   {
    "theme": "Éthique",
    "q": "Faut-il dire qu'un texte a été écrit avec l'IA ?",
    "r": "Oui, quand on le diffuse. La charte précisera quand et comment."
   },
   {
    "theme": "Éthique",
    "q": "Les images générées, sur nos affiches ?",
    "r": "Possible pour une affiche simple, en le signalant. Les droits d'auteur restent flous : à approfondir avant d'en faire une règle."
   }
  ],
  "definitions": [
   [
    "Intelligence artificielle",
    "Un programme qui imite une capacité humaine : lire, parler, voir, décider."
   ],
   [
    "Algorithme",
    "Une recette : une suite d'étapes à suivre dans l'ordre."
   ],
   [
    "IA à règles",
    "Elle suit des instructions écrites par des humains. Résultat toujours le même."
   ],
   [
    "IA qui apprend",
    "Elle trouve ses règles à partir d'exemples. Résultat probable, pas sûr."
   ],
   [
    "Machine learning",
    "La machine apprend avec des exemples au lieu de suivre des règles."
   ],
   [
    "Deep learning",
    "Un apprentissage en couches successives, base des IA qui conversent."
   ],
   [
    "IA générative",
    "Une IA qui fabrique du contenu : texte, image, son, vidéo."
   ],
   [
    "Modèle",
    "Le résultat de l'apprentissage : le moteur derrière l'outil."
   ],
   [
    "LLM",
    "Grand modèle de langage, entraîné sur d'énormes quantités de textes."
   ],
   [
    "Token",
    "Un morceau de mot. L'IA lit, retient et facture en tokens."
   ],
   [
    "Contexte",
    "Ce que l'IA voit de la conversation en cours."
   ],
   [
    "Prompt",
    "Tout ce qu'on donne à l'IA : question, consignes, fichiers joints."
   ],
   [
    "Hallucination",
    "Une réponse fausse mais crédible, dite avec assurance."
   ],
   [
    "Biais",
    "L'IA reproduit les déséquilibres de ses données."
   ],
   [
    "Deepfake",
    "Une voix, une image ou une vidéo fabriquée pour avoir l'air vraie."
   ],
   [
    "RAG",
    "L'IA cherche d'abord dans nos documents, puis répond à partir de ce qu'elle a trouvé."
   ],
   [
    "Agent",
    "Une IA qui fait des actions avec des outils : chercher, classer, envoyer."
   ],
   [
    "Copilot (plan de base)",
    "Inclus dans nos licences. Répond avec le web, les fichiers qu'on lui donne et le contenu affiché."
   ],
   [
    "Microsoft 365 Copilot (payant)",
    "Va chercher seul dans nos mails, fichiers et réunions, selon les droits de chacun."
   ],
   [
    "Compte professionnel",
    "Le compte fourni par la structure, couvert par notre contrat Microsoft."
   ],
   [
    "Outil grand public",
    "Ouvert à tous, souvent gratuit, sans contrat avec la structure."
   ],
   [
    "Shadow AI",
    "Utiliser une IA sans le dire et sans cadre."
   ],
   [
    "Donnée personnelle",
    "Une information qui permet de reconnaître une personne, même sans son nom."
   ],
   [
    "Donnée sensible",
    "Santé, handicap, origine, religion… très protégées par la loi."
   ],
   [
    "Anonymiser",
    "Rendre impossible de reconnaître la personne. Enlever le nom ne suffit pas toujours."
   ],
   [
    "RGPD",
    "La loi européenne qui protège les données personnelles."
   ],
   [
    "Règlement européen sur l'IA",
    "La loi européenne sur l'IA ; elle demande notamment de former les équipes."
   ],
   [
    "DPO",
    "La personne chargée de la protection des données dans la structure."
   ],
   [
    "FALC",
    "Facile à lire et à comprendre : une méthode avec des règles précises, relue par des personnes concernées."
   ],
   [
    "LM Arena",
    "Un site qui montre deux IA côte à côte ; les conversations peuvent être réutilisées."
   ]
  ]
 }
];
