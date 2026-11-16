/*
 * ============================================================
 *  FORMATIONS SUIVIES — un bloc { ... } par formation.
 *  Les outils présentés en formation sont dans data/formations/outils.js.
 * ============================================================
 *
 *  Mise en forme possible dans les textes :
 *    **texte en gras**
 *    [texte du lien](https://adresse.fr)
 *
 *  Pour ajouter une formation : copier le bloc { ... } d'une
 *  formation existante dans FORMATIONS, changer l'id (sans espace
 *  ni accent) et remplir les champs. Les champs vides sont ignorés.
 *
 */

window.FORMATIONS = [
  {
    id: "f1-fondamentaux-esms",
    titre: "Les fondamentaux de l'IA en établissement médico-social",
    sousTitre: "Notions de base, usages, limites et cadre légal",
    date: "2026-11",
    organisme: "Organisme de formation du secteur",
    intervenant: "Formateurs spécialisés",
    duree: "1 journée",
    format: "Présentiel",
    tags: ["Fondamentaux", "Éthique", "RGPD", "ESMS", "Accessibilité"],
    resume:
      "Comprendre ce qu'est (et n'est pas) l'IA, ses usages concrets en établissement médico-social, ses limites techniques et le cadre légal et éthique qui l'entoure.",

    objectifs: [
      "Comprendre ce qu'est l'IA générative et ce qu'elle ne sait pas faire.",
      "Repérer des usages utiles et sans risque dans un établissement.",
      "Connaître le cadre : protection des données, éthique, règlement européen.",
      "Écrire des consignes (prompts) claires pour des écrits professionnels.",
    ],

    programme: [
      { titre: "Thèmes abordés", points: [
        "Notions de base de l'IA et de l'IA générative",
        "Données personnelles, éthique et responsabilité",
        "Rédaction de prompts et amélioration des écrits professionnels",
        "Supports de présentation et de communication",
        "Organisation d'une veille avec l'aide de l'IA",
      ] },
    ],

    aRetenir: [
      "La CNCDH recommande de parler de **système algorithmique d'aide à la décision** plutôt que d'« intelligence artificielle ».",
      "Une IA ne « bugge » pas quand elle se trompe : elle produit une réponse plausible. Les **hallucinations** font partie de son fonctionnement.",
      "La qualité d'une IA dépend de la **qualité et de la quantité des données** : des données biaisées donnent des résultats biaisés.",
      "Avant tout usage impliquant des données de personnes : se référer au **DPO** (RGPD, données de santé, règlement européen sur l'IA).",
      "Utiliser l'IA pour **préparer**, jamais pour **remplacer** le jugement professionnel ni le lien humain.",
    ],

    notes: [
      {
        titre: "Qu'est-ce que l'IA ?",
        intro:
          "La CNCDH propose d'éviter le terme « intelligence artificielle » au profit de **système algorithmique d'aide à la décision**. Trois ingrédients :",
        points: [
          {
            t: "**Un algorithme** : une suite d'instructions simples pour passer d'un état A à un état B.",
            sous: [
              "Exemple vu en séance : choisir un chiffre de 1 à 9, le multiplier par 37, puis enchaîner des additions — le résultat est prévisible, c'est un algorithme.",
            ],
          },
          {
            t: "**Des données**, exploitées massivement.",
            sous: [
              "Voir ses propres traces : [myactivity.google.com](https://myactivity.google.com/)",
              "Affaire Target (révélée en 2012) : un supermarché américain déduit la grossesse d'une adolescente à partir de ses achats (carte de fidélité) et lui envoie des publicités ciblées avant que son père ne soit au courant → profilage et marché de la donnée.",
              "Applications de suivi de santé (cycles menstruels) : des données apparemment anodines deviennent sensibles selon le contexte politique (débat sur l'IVG aux États-Unis).",
            ],
          },
          {
            t: "**L'apprentissage** (supervisé ou non) : l'algorithme apprend à partir des données qu'on lui fournit.",
            sous: [
              "Étiquetage des données — exemple des pommes et des coings : en supervisé on indique à la machine ce qu'est une pomme ; en non supervisé elle regroupe seule ce qui se ressemble.",
            ],
          },
        ],
      },
      {
        titre: "Les 5 piliers de l'IA",
        intro:
          "Alan Turing (décryptage d'Enigma) a posé les bases théoriques de l'IA.",
        points: [
          {
            t: "**1. Raisonnement** — exécuter très vite des algorithmes",
            sous: [
              "Échecs : Garry Kasparov battu par Deep Blue (IBM) en 1997",
              "Go : AlphaGo (DeepMind) bat Lee Sedol en 2016",
            ],
          },
          {
            t: "**2. Représentation et traitement des données**",
            sous: [
              "Prothèses, interfaces cerveau-ordinateur (Neuralink) — souvent des applications militaires avant la santé",
            ],
          },
          {
            t: "**3. Traitement automatique du langage naturel**",
            sous: [
              "Traduction (DeepL)",
              "Prédiction / génération de mots et de textes",
              "Reconnaissance vocale : Dragon NaturallySpeaking (Nuance, racheté par Microsoft), dictée Windows avec **Windows + H**. Limite : pas de solution satisfaisante pour les voix atypiques (dysarthrie…)",
              "Synthèse vocale : Lee Ridley (« Lost Voice Guy »), humoriste sans parole, a gagné Britain's Got Talent avec une voix de synthèse",
              {
                t: "Risques : piratage, usurpation d'identité vocale, **deepfakes**",
                sous: [
                  "En 2020, Le Monde, l'IRCAM et l'INA recréent l'appel du 18 juin (dont aucun enregistrement n'existe). La voix seule n'était pas crédible ; il a fallu la prosodie d'un comédien (François Morel) pour obtenir un résultat convaincant.",
                ],
              },
            ],
          },
          {
            t: "**4. Vision par ordinateur**",
            sous: [
              "Seeing AI (Microsoft) : application gratuite pour personnes aveugles et malvoyantes — description d'images, lecture de texte (OCR) à voix haute, peut remplacer un agrandisseur",
              "Voitures autonomes (Tesla, nombreuses caméras)",
              "Fauteuils roulants autonomes dans les aéroports",
            ],
          },
          {
            t: "**5. Robotique**",
            sous: [
              "Mobilité : exosquelettes (Wandercraft), électrostimulation",
              "Assistance, surveillance, téléprésence, robots domestiques (tondeuse, aspirateur)",
            ],
          },
        ],
        encadre:
          "Profiter de la robotisation… **sans supprimer le lien humain**, **sans supprimer l'effort physique**, et **en assurant une continuité de service quoi qu'il arrive**.",
      },
      {
        titre: "Applications concrètes en ESMS",
        points: [
          "Réunions → comptes rendus détaillés préparés avec des outils (ex. enregistreur Plaud)",
          "Réhabiliter le brainstorming, jusque-là difficile à exploiter",
          "Optimiser les ressources",
          "Simplifier la rédaction de documents",
          "Améliorer la prise de décision",
          "Faciliter l'organisation des réunions",
          "Découper une activité en étapes séquentielles (Goblin Tools)",
          "Créer facilement des tableaux de langage assisté pour des personnes peu ou pas communicantes",
          "Adapter des contenus pédagogiques (Nolej)",
          "Santé connectée",
          "Communication alternative et améliorée (CAA)",
          "Production de documents en « Facile à lire et à comprendre » (FALC)",
        ],
        encadre:
          "Point de déontologie : le coût des outils privilégie les structures et personnes les plus aisées, et les données biométriques (voix, visage) sont monétisées — ex. clonage de voix chez ElevenLabs.",
      },
      {
        titre: "Les limites techniques",
        points: [
          {
            t: "**Biais et discrimination** : le résultat dépend de la qualité et de la quantité des données d'apprentissage.",
            sous: [
              "Les générateurs d'images affichent presque toujours des montres à 10 h 10 (l'heure des photos publicitaires), même quand on demande 7 h 37.",
              "Reconnaissance faciale : biais documentés et techniques de contournement.",
              "Berlin, 2020 : un artiste promène 99 téléphones dans un chariot → Google Maps signale un embouteillage dans une rue vide.",
            ],
          },
          {
            t: "**Diagnostic et prédiction**",
            sous: [
              "Fragiles quand les jeux de données sont restreints",
              "Risque d'être écarté (« out ») par un système automatisé",
              "Ou à l'inverse excès de prudence",
              "Évolution imprévisible",
            ],
          },
          {
            t: "**Hallucinations et confabulations** — changer de paradigme :",
            sous: [
              "Une IA ne « bugge » pas : elle produit toujours une réponse plausible",
              "La fabrique du mensonge",
              "Le paradoxe : plus l'outil est fluide, plus on lui fait confiance",
            ],
          },
        ],
      },
      {
        titre: "Enjeux réglementaires et légaux",
        citation: {
          texte:
            "une technique n\u2019est jamais neutre car elle redéfinit toujours les rapports sociaux. Il faut comprendre que ce thème de la neutralité s\u2019est construit historiquement mais pose problème, il vise à empêcher toute réflexion réelle sur les choix techniques et les dispositifs techniques eux-mêmes pour renvoyer le débat à la question floue des usages…",
          auteur: "François Jarrige, historien",
        },
        intro:
          "Personne référente dans la structure : le **DPO** (délégué à la protection des données).",
        points: [
          "**RGPD** — Règlement général sur la protection des données",
          {
            t: "**Données de santé** : régime renforcé",
            sous: [
              "L'anonymisation est difficile à garantir (le recoupement de données permet souvent de ré-identifier) → on parle plutôt de pseudonymisation / obfuscation",
            ],
          },
          "**Règlement européen sur l'IA** (AI Act, règlement UE 2024/1689)",
        ],
      },
      {
        titre: "Éthique et bonnes pratiques",
        points: [
          "Transparence et explicabilité",
          "Respect de l'autonomie",
          "Équité et non-discrimination",
          "Référence : HAS, « Premières clefs d'usage de l'IA générative en santé »",
        ],
      },
    ],

    liens: [
      { titre: "Mon activité Google (voir ses traces numériques)", url: "https://myactivity.google.com/" },
      { titre: "HAS — Premières clefs d'usage de l'IA générative en santé", url: "https://has-sante.fr/jcms/p_3703115/fr/premieres-clefs-d-usage-de-l-ia-generative-en-sante" },
    ],
  },
  {
    id: "f2-associations-microsoft",
    titre: "L'IA dans les associations et l'écosystème Microsoft 365",
    sousTitre: "Panorama, usage responsable, méthode et Copilot",
    date: "2026-11",
    organisme: "Cabinet de conseil numérique, partenaire Microsoft",
    intervenant: "Consultant spécialisé Microsoft 365",
    duree: "Une demi-journée",
    format: "Distanciel",
    tags: ["Microsoft 365", "Copilot", "Agents", "Environnement", "Déploiement", "Prompts"],
    resume:
      "Un tour d'horizon de l'IA pour les associations : d'où elle vient, à quoi elle sert, ses risques (éthique, emploi, environnement, données), les 5 piliers d'un usage efficace, puis une présentation détaillée de Microsoft 365 Copilot et d'une feuille de route de déploiement.",

    objectifs: [
      "Comprendre l'IA : origines, adoption et grandes catégories.",
      "Mesurer les bénéfices concrets pour les associations.",
      "Adopter une IA responsable : éthique, biais et impact environnemental.",
      "Sécuriser ses usages face aux risques d'une IA publique et gratuite.",
      "Bien utiliser l'IA : processus, données et instructions.",
      "Découvrir Copilot et préparer son déploiement : agents, données internes, passage à l'action.",
    ],

    programme: [
      { titre: "Thèmes abordés", points: [
        "Histoire, grandes familles et panorama des IA",
        "Bénéfices attendus pour les associations",
        "Éthique, environnement et emploi",
        "Risques des outils gratuits et grand public",
        "Méthode pour bien utiliser l'IA",
        "Copilot dans Microsoft 365 et étapes de déploiement",
      ] },
    ],

    aRetenir: [
      "Ne pas commencer par « Que peut faire l'IA ? » mais par **« Quelle tâche me fait perdre du temps ? »**.",
      "Un bon prompt combine 4 ingrédients : **Objectif + Contexte + Sources + Attentes**.",
      "L'IA ne connaît pas votre association par magie : **la qualité du résultat dépend des informations fournies**. Lui demander de signaler ce qui manque plutôt que d'inventer.",
      "**Le bon modèle pour la bonne tâche** : inutile de mobiliser le modèle le plus puissant (et le plus coûteux en énergie) pour reformuler une phrase.",
      "Une IA « gratuite » et publique peut réutiliser vos données : pour des données internes, privilégier une **IA déployée dans votre environnement** (ex. Copilot avec protection des données).",
      "L'IA automatise des **tâches**, pas des postes. L'employeur a la responsabilité de **former** ses équipes.",
    ],

    notes: [
      {
        titre: "Comprendre l'IA",
        points: [
          {
            t: "**Une histoire en plusieurs vagues**",
            sous: [
              "Alan Turing → ELIZA (premier chatbot) → systèmes experts et « hivers de l'IA » → deep learning → IA générative",
              "Basculement grand public avec ChatGPT (fin 2022 – 2023)",
            ],
          },
          {
            t: "**4 types d'IA**",
            sous: [
              "**Générative** : conversation, création de contenu (chat)",
              "**Intégrée** : dans les outils bureautiques, le CRM…",
              "**Agentique** : agents personnalisés répondant à un besoin métier (Microsoft en propose une vingtaine)",
              "**Prédictive** : anticipe et agit (chez Microsoft : Autopilot, encore complexe et coûteux)",
            ],
          },
          {
            t: "**Panorama des principales IA**",
            sous: [
              "Assistants : ChatGPT (OpenAI), Claude (Anthropic), Perplexity, Meta AI, Grok, DeepSeek, Le Chat (Mistral)",
              "IA intégrées : Gemini (Google), Copilot (Microsoft)",
            ],
          },
          {
            t: "**L'écosystème derrière l'IA**",
            sous: [
              "Puissance de calcul (Nvidia, Samsung, TSMC, ASML) → datacenters → électricité (nuisances locales, besoin de production accru) → cloud (Amazon, Microsoft, Google)",
              "Investissements massifs : Google, Meta, Nvidia, Amazon, Microsoft, OpenAI, Anthropic, Mistral, acteurs chinois",
              "Selon la formation, Mistral reste une start-up fragile face aux géants (risque de rachat, pas de garantie à long terme)",
            ],
          },
        ],
      },
      {
        titre: "État des lieux dans les associations",
        intro:
          "Source principale : étude « La place du numérique dans le projet associatif », Solidatech / Recherches & Solidarités, novembre 2025. **Attention :** les chiffres ci-dessous sont ceux présentés en formation ; le communiqué officiel de l'étude donne d'autres valeurs (par exemple 18 % des associations qui utilisent déjà l'IA). Vérifier avant de les citer.",
        points: [
          "Où en sont les associations : 27 % n'ont pas évoqué le sujet, 26 % l'ont abordé, 25 % manquent d'expertise, 18 % sont en phase d'exploration",
          {
            t: "**L'IA pour quoi faire ?**",
            sous: [
              "Gagner en efficacité au quotidien : 80 %",
              "Créer des supports de communication : 53 %",
              "Faciliter l'analyse des données : 47 %",
              "Création de documents : 42 %",
              "Réponse aux appels à projets / demandes de subventions : 41 %",
              "Aide à la décision : 15 % · Campagnes de collecte : 13 %",
            ],
          },
          {
            t: "**Appréhensions**",
            sous: [
              "Problèmes éthiques : 52 %",
              "Manque de compétences techniques : 47 %",
              "Impact environnemental : 44 %",
              "Sécurité et confidentialité des données : 38 %",
              "Coûts : 27 %",
              "Évoqués aussi en séance : cyberattaques et risque de perte de confiance des donateurs",
            ],
          },
          {
            t: "**Bénéfices projetés** (étude Forrester « Total Economic Impact of Microsoft 365 Copilot », mars 2025, commandée par Microsoft)",
            sous: [
              "Jusqu'à +25 % d'efficacité opérationnelle (moins de temps en réunion, en recherche d'information, en création de contenu)",
              "Jusqu'à +20 % de collecte de fonds en 3 ans",
              "Jusqu'à +18 % de rétention du personnel",
              "Au moins -50 % de coûts technologiques (moins d'outils tiers, ex. traduction)",
              "Environ **60 minutes gagnées par jour et par personne** ; un rapport de 1 à 7 entre coût et productivité selon la formation",
            ],
          },
        ],
      },
      {
        titre: "Une IA responsable",
        points: [
          {
            t: "**6 enjeux éthiques**",
            sous: [
              "Équité : traiter tout le monde de manière juste, sans biais ni discrimination",
              "Fiabilité et sécurité : un fonctionnement sûr, sans causer de dommages",
              "Confidentialité et sécurité : protéger les données des utilisateurs",
              "Inclusivité : une IA accessible et bénéfique à tous",
              "Transparence : expliquer comment l'IA fonctionne et quelles sont ses limites",
              "Responsabilité : garder l'humain aux commandes",
            ],
          },
          {
            t: "**IA et emploi : menace ou opportunité ?**",
            sous: [
              "Ce qu'on craint : 49 % redoutent que l'IA remplace leur emploi ; 50 % craignent surveillance ou perte de sens",
              "Ce que l'IA change vraiment : elle automatise des tâches, pas des postes ; elle soulage les équipes (rédaction, tri, saisie) ; elle augmente les capacités humaines",
              "Mais l'effet sur l'emploi peut être négatif : « il y aura de la casse »",
              "Toutes les associations se posent la question ; 2 à 3 ans d'écart vont se creuser entre celles qui sautent le pas et les autres",
              "L'employeur a la **responsabilité de former** à l'IA ; déployer des agents ne suffit pas, il faut repenser les métiers",
              "Garder l'humain au centre : l'IA amplifie le travail humain, elle ne le remplace pas",
            ],
          },
        ],
      },
      {
        titre: "Impact environnemental",
        intro: "Source citée : Agence internationale de l'énergie (AIE), « Energy and AI », 2025.",
        points: [
          {
            t: "**Les impacts**",
            sous: [
              "Carbone : l'entraînement d'un grand modèle de langage ≈ 300 tonnes de CO₂ (≈ 125 allers-retours New York – Pékin)",
              "Électricité : les datacenters ont consommé ≈ 1,5 % de l'électricité mondiale en 2024 (415 TWh) ; pourrait plus que doubler d'ici 2030 (≈ 945 TWh, ~3 %)",
              "Eau : refroidissement des datacenters. Le chiffre de « 0,5 litre par prompt » parfois cité vient d'une estimation de 2023 portant sur une série de réponses : à ne pas reprendre tel quel. Les estimations publiées par les éditeurs en 2025 vont de quelques dixièmes de millilitre (Google) à environ 45 mL (Mistral) par réponse, avec des méthodes différentes.",
              "Métaux rares : extraction à fort impact pour les composants",
            ],
          },
          {
            t: "**Comment réduire l'impact**",
            sous: [
              "Optimiser les modèles (fine-tuning, architectures efficaces)",
              "Choisir un cloud et des datacenters engagés (zones froides, refroidissement liquide)",
              "**Sobriété numérique** : utiliser l'IA là où elle est utile, avec le bon niveau de modèle",
              "Mesurer et compenser : intégrer l'IA au bilan carbone (ex. Microsoft Emissions Dashboard)",
            ],
          },
          {
            t: "**L'IA peut aussi être une alliée**",
            sous: [
              "Peace Parks Foundation : IA + capteurs pour détecter les braconniers en Afrique australe",
              "Climate TRACE : IA + satellites pour cartographier les émissions de CO₂ de 350 millions de sources",
              "Digital Green : assistant pour 6,3 millions de petits agriculteurs (+12 % de rendement, +24 % de revenus)",
              "Villes : feux de circulation à Barcelone (-21 % d'embouteillages), détection des fuites d'eau à Lyon",
            ],
          },
        ],
      },
      {
        titre: "Sécuriser ses usages",
        points: [
          {
            t: "**Les dangers cachés d'une IA « gratuite » et publique** — 78 % des salariés français qui utilisent l'IA au travail se servent de leurs propres outils (Microsoft & LinkedIn, Work Trend Index)",
            sous: [
              "Perte de confidentialité : données sensibles stockées hors de l'organisation",
              "Non-conformité RGPD : transfert de données personnelles hors UE sans garanties",
              "Dépendance à un tiers : aucun contrôle sur l'usage et la conservation des données",
              "Fuites possibles en cas de faille chez le fournisseur",
              "Vos conversations peuvent servir à entraîner les modèles ; les paramètres de confidentialité existent parfois mais sont **désactivés par défaut**",
            ],
          },
          {
            t: "**Choisir une IA sécurisée et maîtrisée**",
            sous: [
              "Déployée dans votre environnement informatique : vos données restent confinées",
              "Pas d'entraînement public : vos documents restent internes",
              "Contrôles de sécurité intégrés : authentification, permissions, chiffrement",
              "Maîtrise totale des données : indispensable pour la confiance associative",
            ],
          },
        ],
        encadre:
          "Selon la formation, faire tourner une IA en local (sur ses propres serveurs) reste une utopie pour la plupart des associations ; il recommande une solution cloud sécurisée comme Microsoft 365 Copilot.",
      },
      {
        titre: "Bien utiliser l'IA : les 5 piliers",
        points: [
          {
            t: "**1. Analyser le processus humain existant** avant de chercher à l'automatiser",
            sous: [
              "Ne pas demander « Que peut faire l'IA ? » mais « Quelle tâche me fait perdre du temps ? »",
              "Identifier : le résultat attendu, les étapes actuelles, les informations nécessaires, ce que l'IA peut préparer, ce qui doit rester sous contrôle humain",
              "Exemple, compte rendu de réunion : l'IA synthétise, extrait décisions et actions, propose une structure ; **l'humain contrôle, corrige et valide**",
            ],
          },
          {
            t: "**2. Fournir les bonnes données**, idéalement dans un environnement informatique homogène",
            sous: [
              "L'IA s'appuie sur le prompt, les fichiers joints, le document ouvert, le web et, pour les IA intégrées, vos mails, fichiers et réunions (Teams, SharePoint, Outlook)",
              "Exemple de prompt : « À partir uniquement de ces documents, rédige une synthèse de l'action présentant les objectifs, les activités réalisées, les résultats obtenus et les points d'amélioration. **Signale les informations manquantes plutôt que de les inventer.** »",
            ],
          },
          {
            t: "**3. Choisir le bon outil** : la bonne IA est celle qui se trouve au plus près de la tâche et des informations",
            sous: [
              "Chat : rechercher, synthétiser, organiser ses idées, comparer, rédiger un premier jet, analyser des fichiers",
              "Applications : Word (rédiger, résumer), Excel (analyser, formules), PowerPoint (présentations), Outlook (mails), Teams (réunions), OneNote (structurer)",
              "Agent spécialisé : besoin répétitif, domaine défini, instructions réutilisables, sources déterminées, processus métier",
            ],
          },
          {
            t: "**4. Mobiliser le bon niveau d'intelligence** : inutile d'utiliser le modèle le plus puissant pour une tâche simple",
            sous: [
              "Réponse rapide : reformuler, corriger, résumer un message, proposer des titres",
              "Réponse approfondie : analyser plusieurs documents, comparer des scénarios, identifier des risques, argumenter",
              "Agent spécialisé : consignes et sources récurrentes, processus régulier",
            ],
          },
          {
            t: "**5. Donner les bonnes instructions** : Objectif + Contexte + Sources + Attentes",
            sous: [
              "Avant : « Rédige un article sur les avancées des énergies renouvelables. » → résultat très général",
              "Après : « Rédige un article technique détaillé **destiné aux ingénieurs et scientifiques de l'environnement, consacré à l'énergie solaire et éolienne**, en t'appuyant sur des articles de recherche récents et des rapports de l'industrie. Présente les principes scientifiques et leurs applications concrètes. »",
              "Démo image : « un chat » → « un chat pour une invitation d'Halloween » → « …dans un univers de sorcellerie » → « …visuel carré, sans texte, style cartoon pour enfants de 5 ans » : chaque précision rapproche du résultat voulu",
              "Un prompt précis du premier coup évite les allers-retours, donc aussi de la consommation inutile",
            ],
          },
        ],
      },
      {
        titre: "Microsoft 365 Copilot : l'IA intégrée",
        points: [
          {
            t: "**Work IQ** : la couche qui personnalise Copilot pour chaque utilisateur et organisation",
            sous: [
              "Données : Microsoft 365, Dynamics 365 (CRM), sources tierces (350+ connecteurs)",
              "Contexte : mémoire, activité, compréhension métier",
              "Compétences et outils : comment Copilot s'y prend et ce qu'il utilise pour agir",
              "Multi-modèles : OpenAI (GPT-5 et 6), Anthropic (Claude Sonnet et Opus), d'autres à venir",
            ],
          },
          "**Microsoft Graph** : l'infrastructure qui relie utilisateurs, mails, fichiers, réunions, conversations — Copilot peut par exemple intégrer des chiffres d'Excel dans un document Word",
          {
            t: "**Dans les applications** (certaines fonctions réservées à Copilot Premium)",
            sous: [
              "Outlook : rédaction de mails, résumé de fils · Word : brouillon, réécriture, résumé · Excel : analyse en langage naturel, formules · PowerPoint : présentation depuis zéro ou depuis un Word · OneNote : synthèse, extraction d'actions",
              "Premium : Teams (compte rendu de réunions et d'appels, facilitateur, **interprète multilingue en temps réel** — utile aussi pour l'inclusion), OneDrive, SharePoint (agents par site), Loop (équivalent de Notion), Whiteboard, Forms, Clipchamp, Viva, Agent Project Manager dans Planner, Dynamics 365",
            ],
          },
          {
            t: "**Agents prêts à l'emploi**",
            sous: [
              "Inclus : Copilot Chat, Créer (images), Prompt Coach, Idea Coach, Agent Builder (agents simples : FAQ, questions-réponses)",
              "Premium : Recherche (recherches approfondies), Analyste (données complexes), Writing Coach, Learning, Career Coach",
            ],
          },
          {
            t: "**Connecteurs** (350+) : Google Drive, Dropbox, Trello, Asana, Monday, Salesforce, HubSpot, Gmail, Zoom, Notion, Canva…",
            sous: [
              "En général **en lecture seule** : Copilot lit les données tierces mais n'agit pas dessus",
              "Certains doivent être activés par l'administrateur Microsoft 365",
            ],
          },
          {
            t: "**Exemples d'usages par métier**",
            sous: [
              "Administratif : récap des mails, synthèse de rapport, traduction, comparaison de dossiers d'appels à projets, comptes rendus Teams",
              "Communication : veille sur l'image de l'association, brainstorming, communiqué de presse, visuels, newsletter, rapport annuel, FAQ bénéficiaires 24/7",
              "RH : offres d'emploi, préparation d'entretiens, kits d'accueil, entretiens avec interprétariat, plan de développement, gestion des bénévoles",
              "Collecte : enrichissement de données, dossiers de subvention, repérage de mécènes (RSE), analyse des dons, chatbot pour les reçus fiscaux",
            ],
          },
          "Comparer les modèles (performance vs. impact / coût) : classement [LMArena](https://lmarena.ai/)",
        ],
      },
      {
        titre: "Les offres Copilot et le déploiement",
        points: [
          {
            t: "**Copilot Basic** (inclus dans l'abonnement Microsoft 365)",
            sous: [
              "Assistant conversationnel sécurisé (GPT-5), données web, protection des données, IA dans Word/Excel/PowerPoint/Outlook/OneNote, Agent Builder, pièces jointes et connecteurs",
              "Le contexte doit être fourni par l'utilisateur (il ne fouille pas vos mails et fichiers)",
              "Accès : application Copilot (Windows 11 / macOS), navigateur sur [m365.cloud.microsoft](https://m365.cloud.microsoft), mobile",
              "Dans les applications Office : **désactivé par défaut**, à activer (double activation) dans le centre d'administration Microsoft 365",
            ],
          },
          {
            t: "**Copilot Premium** (licence payante)",
            sous: [
              "Accès à toutes vos données Microsoft 365 (mails, fichiers, réunions Teams) via Work IQ",
              "Modèles GPT-5/6 et Claude, tous les agents, accès prioritaire",
            ],
          },
          {
            t: "**De l'assistance à l'autonomie**",
            sous: [
              "Abonnement : Basic (demander) → Premium (travailler)",
              "À la tâche : Agent (spécialiser) → Cowork (déléguer à une équipe d'agents) → Autopilot (anticiper : agent persistant et proactif)",
            ],
          },
          {
            t: "**Feuille de route proposée**",
            sous: [
              "Phase 1 (≈ 3 mois, 0 €) : sensibilisation et formation à Copilot Basic",
              "Phase 2 (6 à 9 mois) : sécurité, conformité RGPD et gouvernance des données",
              "Phase 3 (≈ 3 mois) : mesure des usages de Basic, puis formation et déploiement de Premium",
              "Phase 4 : identification des besoins, déploiement d'agents, Cowork et Autopilot",
            ],
          },
        ],
        encadre:
          "La formation comportait aussi une partie commerciale (audit de licences, accompagnement au déploiement). **Financement** : les formations peuvent être prises en charge par l'OPCO (notamment pour les structures de moins de 50 salariés) — à demander rapidement.",
      },
      {
        titre: "Ma question restée ouverte",
        intro:
          "**Pourquoi serait-il utopique d'utiliser un RAG local plutôt que Microsoft 365 Copilot ?** Le matériel ? L'expertise ?",
        points: [
          "Arguments avancés en formation : coût du matériel (serveur avec carte graphique), expertise rare pour installer, sécuriser et maintenir, qualité des modèles locaux inférieure aux grands modèles, intégration aux outils existants (Outlook, Teams, SharePoint) à reconstruire",
          "Arguments en faveur du local : données qui ne quittent jamais la structure, pas d'abonnement par utilisateur, pas de dépendance à un éditeur, sobriété possible avec de petits modèles",
          "Piste de réflexion : un RAG local ciblé (ex. base documentaire interne) peut compléter Copilot Basic plutôt que le remplacer",
        ],
      },
    ],

    liens: [
      { titre: "Accéder à Copilot (navigateur)", url: "https://m365.cloud.microsoft/" },
      { titre: "Solidatech — études sur le numérique associatif", url: "https://www.solidatech.fr/" },
      { titre: "AIE — Energy and AI (2025)", url: "https://www.iea.org/reports/energy-and-ai" },
      { titre: "LMArena — classement des modèles d'IA", url: "https://lmarena.ai/" },
    ],
  },

  // ,{ id: "prochaine-formation", titre: "...", ... }
];
