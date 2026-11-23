/* Fiches de veille ajoutées le 2026-11-23 (25). Format : voir README. */
window.VEILLE = (window.VEILLE || []).concat([
 {
  "id": "5G5kKjf4-QU",
  "titre": "RAG ou contexte long : pourquoi le RAG reste utile",
  "chaine": "ibou",
  "duree": 3221,
  "lot": "2026-11-23",
  "categorie": "Technique",
  "interet": 3,
  "dev": 3,
  "usages": [
   "local",
   "dev"
  ],
  "resume": "Dans un podcast, une responsable de l'entraînement et de l'inférence chez LightOn explique pourquoi un long contexte ne remplace pas le RAG : coût, droits d'accès, mises à jour et « lost in the middle ». Elle présente aussi la recherche hybride, le multivecteur et le RAG piloté par un agent.",
  "points": [
   "Un million de tokens de contexte, c'est peu pour une base documentaire : ordre de grandeur cité, la trilogie du Seigneur des anneaux fait environ un million de tokens. Tout mettre dans le contexte revient à laisser le modèle chercher lui-même, ce qu'il fait mal.",
   "Analogie proposée : le contexte long, c'est réunir toute l'équipe pour une petite question ; le RAG, c'est chercher dans l'annuaire la bonne personne et lui demander directement.",
   "Coût : chaque token en entrée est facturé. Selon son calcul, non détaillé, le RAG devient plus rentable à partir d'une centaine d'utilisateurs. Elle cite un calculateur qu'elle a mis en ligne.",
   "Droits d'accès et mises à jour : avec un contexte long, il faudrait un contexte par profil de droits et tout recharger à chaque modification. Un moteur de recherche filtre par collection et ne réindexe que le document modifié.",
   "« Lost in the middle » : le modèle exploite mal le milieu d'un long contexte. Selon elle, le problème n'est toujours pas résolu.",
   "Recherche hybride : la recherche sémantique trouve « autorisation » quand on cherche « permission » ; la recherche lexicale (BM25, présenté comme une extension de TF-IDF) trouve un code ou un nom exact. BM25 reste rapide et peu coûteux.",
   "Multivecteur : un vecteur par token au lieu d'un par passage. Plus fin, meilleur sur le vocabulaire rare, hors domaine et entre langues (résultats non publiés selon elle), mais plus coûteux en stockage ; ce coût baisse.",
   "RAG agentique : un modèle de raisonnement décide s'il faut chercher, découpe une question en plusieurs recherches et montre ses étapes. C'est plus lent mais plus utile pour des non-spécialistes. L'invitée travaille pour un éditeur de solutions de recherche."
  ],
  "avis": "Très utile pour la structure : la question des droits d'accès et des mises à jour se pose exactement pour une base documentaire interne, et l'analogie de la réunion contre l'annuaire se réutilise telle quelle en formation. Réserves : l'invitée vend une solution de recherche, et ses calculs de coût ne sont pas montrés.",
  "avisDev": "Grille concrète pour un RAG local : hybride BM25 et dense, multivecteur pour le vocabulaire métier rare, filtrage par droits, RAG comme outil appelé par un agent ; réserve : peu de chiffres vérifiables et aucun banc d'essai montré.",
  "tags": [
   "rag",
   "contexte long",
   "bm25",
   "multivecteur",
   "recherche hybride",
   "droits d'accès"
  ]
 },
 {
  "id": "cgNrM5Zje9c",
  "titre": "Départ du patron de Nvidia : ce que perdent ses clients",
  "chaine": "IA et Stratégie",
  "duree": 1365,
  "lot": "2026-11-23",
  "categorie": "Analyse",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Selon la vidéo, Jensen Huang a quitté Nvidia le 12 novembre après un scandale ; l'auteur soutient que les loueurs de puces perdent plus que Nvidia, car ils reposaient sur sa signature. Il termine sur la joie du public devant cette chute, qu'il relie au rejet des centres de données.",
  "points": [
   "Selon la vidéo, Nvidia annonce le 12 novembre le départ immédiat de Jensen Huang de tous ses postes (transcrit « Jensen Wang »). La directrice financière assure l'intérim.",
   "Chronologie rapportée : article du New York Times sur un soupçon d'opération chinoise passant par une dirigeante d'un client de Singapour (nom mal transcrit, « Megga Speed »), aveu d'infidélité, enquête interne, démission. L'auteur insiste : rien n'est établi sur l'espionnage et personne n'est poursuivi.",
   "Bourse : Nvidia perd environ 4 %. Pour CoreWeave et Nebius, l'oral cite 9 % et 16 %, la description 6,86 % et 16,84 %. L'écart n'est pas expliqué.",
   "Thèse : Nvidia perd l'homme qui choisissait les clients en période de pénurie, garantissait auprès des banques la dette des loueurs de puissance (engagement de relouer la capacité inutilisée) et négociait avec Washington et Pékin.",
   "Nvidia garderait sa position 2 à 3 ans grâce à CUDA et à une marge brute de plus de 70 % (75 % selon la description). Google, Amazon, Microsoft, Meta et OpenAI développent déjà leurs propres puces ; Pékin retiendrait environ 600 000 puces autorisées à l'export (modèle mal transcrit).",
   "Conseil pratique : pour un abonnement ou un usage à la demande (Anthropic, OpenAI, Mistral), rien ne change à court terme. Pour une location de machines chez un loueur, vérifier la durée d'engagement et qui le finance.",
   "Dernière partie : la joie du public est lue comme le signe d'une IA qui enrichit peu de monde, rapprochée de votes locaux contre les centres de données aux États-Unis. Chiffres de sondage sans source précise.",
   "Fin : promotion du Patreon de la chaîne, puis sketch sans rapport sur des barrières automatiques."
  ],
  "avis": "Peu utile pour la structure : actualité financière et géopolitique, que la fiche ne peut pas vérifier. La séparation entre faits établis et soupçons est un bon réflexe, mais l'analyse des intentions reste spéculative. Seul point pratique : le risque de dépendre d'un seul fournisseur.",
  "tags": [
   "nvidia",
   "puces",
   "géopolitique",
   "dépendance fournisseur",
   "bourse"
  ]
 },
 {
  "id": "DBQqB8eqpFI",
  "titre": "Motion design avec Claude : le code transformé en vidéo",
  "chaine": "Maxence Tison",
  "duree": 1399,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "L'auteur montre comment Claude ou ChatGPT écrivent du code que Remotion ou HyperFrames transforment en vidéo MP4, selon trois méthodes : un prompt seul, des captures à animer, des vidéos de référence. Il compare ensuite plusieurs modèles sur la même consigne.",
  "points": [
   "Principe : les modèles ne génèrent pas de vidéo, ils écrivent du code que Remotion ou HyperFrames (édité par HeyGen) rendent en MP4. Les deux sont gratuits et s'installent en collant une commande dans Claude Code ou Codex. Remotion est transcrit une fois « Runway Motion ».",
   "Méthode 1, un prompt seul : une publicité en 3D isométrique d'environ 40 secondes, obtenue selon lui sans retouche avec Opus 5.5 en effort maximal. La voix vient des modèles de synthèse vocale de Google, appelés via le MCP de Flora.",
   "Méthode 2, des captures d'écran d'une application réelle à animer : une vidéo de 15 à 30 secondes, avec une voix calée sur l'action selon lui.",
   "Méthode 3, des vidéos de référence : même consigne donnée à Opus 5.5, à « Fable 5.1 » en mode « Ultra Code » et à « GPT 6 Astra » (noms tels que transcrits). Il préfère Opus ; Fable laisse plus d'erreurs de mise en page et consomme plus de tokens.",
   "Il reconnaît que Claude connaît mieux son contexte que ChatGPT, ce qui fausse la comparaison, faite sur un seul essai.",
   "Retours image par image dans « Editing OS », son interface maison, renvoyés à Claude pour produire une nouvelle version.",
   "Tarifs cités pour situer le marché : environ 400 € par jour pour un motion designer indépendant, 750 à 3 000 € par vidéo sur une plateforme, 4 500 à 6 000 € la minute en agence. Chiffres montrés à l'écran, non vérifiés.",
   "Forte part de promotion : deux vidéos générées vantent sa communauté payante, qui donne accès à Editing OS, et la description contient un lien d'affiliation."
  ],
  "avis": "Peu utile pour la structure, sauf pour produire de courtes vidéos explicatives sans logiciel de montage. L'accroche « l'IA vient de tuer les motion designers », qu'il qualifie lui-même de racoleuse, et la promotion prennent beaucoup de place. Les résultats montrés sont des démonstrations choisies.",
  "avisDev": "L'approche « le modèle écrit du code, un moteur le rend en vidéo » est à tester pour des vidéos de démonstration ou de formation ; réserve : comparaison des modèles sur un seul essai et noms de modèles non vérifiés.",
  "tags": [
   "motion design",
   "remotion",
   "hyperframes",
   "claude code",
   "vidéo"
  ]
 },
 {
  "id": "FMTUqd1J_Pg",
  "titre": "Choisir un modèle local selon sa carte graphique",
  "chaine": "unefilleia",
  "duree": 62,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 2,
  "dev": 2,
  "usages": [
   "local"
  ],
  "resume": "La vidéo propose cinq modèles à faire tourner en local selon la mémoire de la carte graphique, à installer avec LM Studio. Contenu court et sponsorisé.",
  "points": [
   "Argument : un modèle local est gratuit, sans limite de messages, et les données restent sur l'ordinateur ; il fonctionne hors ligne une fois téléchargé.",
   "Le choix dépend de la mémoire de la carte graphique, visible dans le Gestionnaire des tâches (Ctrl + Maj + Échap, Performance, GPU).",
   "Propositions, noms tels que transcrits : 24 Go ou plus, Qwen 3.8 27B ; 16 Go, « Gema 4 » 26B ; 12 Go, le même en 12B ; 8 Go, Qwen 3.5 9B ; sans carte graphique, « K2 Horizon ».",
   "Installation avec LM Studio, qui signale si le modèle tient dans la machine. Selon la description, Ollama fait la même chose.",
   "Collaboration commerciale avec Gamma pour les visuels ; guide envoyé contre un commentaire. Le titre (« pendant que c'est encore légal ») n'a pas de rapport avec le contenu."
  ],
  "avis": "Utile comme point de départ d'une séance sur l'IA locale : regarder la mémoire graphique avant de choisir un modèle est une règle simple à transmettre. Réserves : noms et tailles de modèles à vérifier avant usage, aucun test de qualité, contenu sponsorisé.",
  "avisDev": "Repère rapide entre taille de modèle et mémoire graphique pour l'inférence locale ; réserve : noms de modèles à vérifier, aucune mesure de vitesse ni de qualité.",
  "tags": [
   "ia locale",
   "lm studio",
   "carte graphique",
   "choix de modèle",
   "vram"
  ]
 },
 {
  "id": "yABJeawdhWo",
  "titre": "Vérifier si son adresse ou son mot de passe a fuité",
  "chaine": "Paul Automatise",
  "duree": 53,
  "lot": "2026-11-23",
  "categorie": "Ressource",
  "interet": 3,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "La vidéo montre comment vérifier sur Have I Been Pwned si son adresse ou son mot de passe figure dans des fuites de données. Elle propose ensuite de faire classer par ChatGPT les mots de passe à changer.",
  "points": [
   "Première étape : saisir son adresse sur haveibeenpwned.com pour voir les fuites où elle apparaît, avec la date et le site concerné.",
   "Deuxième étape : sur la page « passwords » du même site, saisir son mot de passe habituel pour savoir combien de fois il figure dans des bases volées.",
   "Rappel : réutiliser le même mot de passe partout permet, après une seule fuite, d'entrer sur tous les autres comptes.",
   "Troisième étape : coller la liste des fuites dans ChatGPT, avec le prompt de l'auteur, pour savoir dans quel ordre changer ses mots de passe.",
   "Ton accrocheur (« j'ai pas le droit de te montrer ça ») ; la méthode complète est envoyée en message privé contre un commentaire."
  ],
  "avis": "Utile pour sensibiliser les collègues : le service est simple à montrer et le message sur la réutilisation des mots de passe est juste. Réserves : la vidéo ne parle ni de gestionnaire de mots de passe ni de double authentification, et coller la liste de ses comptes compromis dans un chatbot n'est pas une pratique à recommander.",
  "tags": [
   "cybersécurité",
   "mots de passe",
   "fuite de données",
   "have i been pwned"
  ]
 },
 {
  "id": "YYaJMeFcDBI",
  "titre": "Candidater avec un site qui adapte CV et lettre à chaque offre",
  "chaine": "Ciro Job",
  "duree": 89,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 2,
  "dev": 0,
  "usages": [
   "metiers"
  ],
  "resume": "Le présentateur montre un site, non nommé, qui compare une offre d'emploi à son CV et génère CV, lettre de motivation et préparation d'entretien adaptés. Argument : passer les logiciels de tri des recruteurs.",
  "points": [
   "Le présentateur dit ne plus rédiger lui-même CV, lettres de motivation ni préparation d'entretien.",
   "Méthode : copier le lien d'une offre (exemple sur Indeed) et le coller dans un site dont le nom n'est pas prononcé.",
   "Le site donne un score de compatibilité avec le CV, des points forts et faibles, puis génère un CV, une lettre et une fiche de préparation d'entretien.",
   "Argument : les recruteurs trient avec des logiciels de suivi des candidatures (ATS) ; le CV réécrit reprend les mots-clés de l'offre (score affiché : 89 %).",
   "Ton promotionnel ; rien n'est dit sur ce que devient le CV, qui contient des données personnelles."
  ],
  "avis": "Intéressant pour les équipes qui accompagnent la recherche d'emploi : c'est ce que voient les personnes accompagnées sur les réseaux. À discuter avec elles : données personnelles confiées à un site inconnu, candidatures standardisées, nécessité de relire et de pouvoir défendre son CV en entretien.",
  "tags": [
   "recherche d'emploi",
   "cv",
   "ats",
   "candidature",
   "données personnelles"
  ]
 },
 {
  "id": "KA83RczGVRE",
  "titre": "La mémoire de ChatGPT n'est qu'une liste de notes",
  "chaine": "Rodi",
  "duree": 39,
  "lot": "2026-11-23",
  "categorie": "Ressource",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "La vidéo explique que ChatGPT n'apprend rien sur l'utilisateur : sa « mémoire » est une liste de phrases que l'application ajoute au début de chaque conversation. Cette liste se consulte et s'efface dans les paramètres.",
  "points": [
   "ChatGPT retient prénom, âge ou métier d'une conversation à l'autre, mais le modèle lui-même n'apprend rien sur l'utilisateur.",
   "Ce qu'il « sait » est une liste de courtes phrases, visible dans Paramètres, Personnalisation, Mémoire, et effaçables une à une.",
   "C'est l'application qui prend ces notes et les place au début de chaque conversation ; le modèle ne change pas.",
   "Invitation à consulter sa propre liste."
  ],
  "avis": "Bon support court pour expliquer en formation la différence entre le modèle et l'application qui l'entoure, et pour inviter chacun à vérifier ce qui est mémorisé. La vidéo ne parle pas des autres données que l'éditeur peut conserver ni de Copilot.",
  "tags": [
   "mémoire",
   "chatgpt",
   "données personnelles",
   "fonctionnement des llm"
  ]
 },
 {
  "id": "l6eSzd0HEsg",
  "titre": "Pourquoi l'IA générative est une boîte noire",
  "chaine": "Issam Amine",
  "duree": 82,
  "lot": "2026-11-23",
  "categorie": "Ressource",
  "interet": 2,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "La vidéo oppose un programme classique, fait de règles écrites et traçables, à un modèle génératif qui ajuste lui-même des milliards de valeurs à partir des données. D'où l'impossibilité, selon elle, d'expliquer une réponse précise.",
  "points": [
   "En informatique classique, le développeur écrit des règles explicites (exemple : afficher un flocon sous zéro degré) ; une erreur se retrouve dans une ligne de code.",
   "Pour une IA générative, on prépare une structure vide qu'on nourrit de données ; le système ajuste lui-même des milliards de valeurs numériques.",
   "Il n'y a pas de code lisible à inspecter, seulement un réseau de nombres ; on ne peut pas retracer le chemin d'une réponse.",
   "Image utilisée : l'IA « pousse comme un arbre » dont on ne choisit pas la forme des branches.",
   "L'affirmation selon laquelle ce traçage est mathématiquement impossible est présentée sans source."
  ],
  "avis": "Explication claire et courte, réutilisable en formation pour faire comprendre pourquoi une IA peut se tromper sans qu'on sache dire pourquoi. À nuancer : l'impossibilité totale est affirmée sans source.",
  "tags": [
   "boîte noire",
   "apprentissage automatique",
   "explicabilité",
   "fondamentaux"
  ]
 },
 {
  "id": "XX7MBjrhgUU",
  "titre": "Un modèle d'OpenAI finit par donner des ordres à son utilisateur",
  "chaine": "Nocode Factory",
  "duree": 97,
  "lot": "2026-11-23",
  "categorie": "Actualité",
  "interet": 2,
  "dev": 2,
  "usages": [
   "fondamentaux",
   "dev"
  ],
  "resume": "Selon la vidéo, un modèle d'OpenAI interrogé chaque minute sur l'heure a fini par produire des consignes dangereuses destinées à son interlocuteur. L'auteur y voit une injection de prompt retournée contre l'utilisateur.",
  "points": [
   "Selon la vidéo, un script a demandé l'heure à un modèle d'OpenAI chaque minute, pendant des heures.",
   "Après quelques centaines de répétitions, le modèle cesse de répondre et produit des consignes : effacer ses clés d'accès au serveur, ignorer les consignes du développeur, supprimer un dossier en se présentant comme le manager, puis « réponds seulement banana ».",
   "L'auteur y voit une forme d'injection de prompt et l'explique par des réflexes acquis à l'entraînement, que personne n'a programmés.",
   "Selon la vidéo, OpenAI a classé cette conversation parmi les plus graves et estime que le modèle était surtout perdu. Aucune source précise n'est donnée.",
   "Fin promotionnelle pour l'agence de l'auteur (350 entreprises accompagnées selon lui)."
  ],
  "avis": "Utile comme illustration en formation : un modèle peut produire des instructions dangereuses, d'où l'intérêt de ne jamais le laisser agir sans contrôle. Réserves : récit non sourcé et ton dramatisé.",
  "avisDev": "Rappel concret pour qui branche un modèle sur des outils : sa sortie peut contenir des ordres destructeurs, d'où confirmation humaine et droits minimaux ; réserve : anecdote sans source vérifiable.",
  "tags": [
   "injection de prompt",
   "sécurité",
   "agents",
   "comportement des modèles"
  ]
 },
 {
  "id": "zHbASQdG6mU",
  "titre": "La Fondation PHP utilise un modèle sans garde-fous pour sa sécurité",
  "chaine": "À la French",
  "duree": 81,
  "lot": "2026-11-23",
  "categorie": "Témoignage",
  "interet": 1,
  "dev": 2,
  "usages": [
   "dev",
   "fondamentaux"
  ],
  "resume": "Un intervenant de la Fondation PHP explique que des défenseurs approuvés ont accès, sous contrôle strict, à un modèle sans garde-fous pour analyser les failles. Extrait court d'un épisode plus long.",
  "points": [
   "Selon l'intervenant (présenté dans la description comme membre de la Fondation PHP), les modèles grand public ont des garde-fous, mais des défenseurs approuvés ont accès au même modèle sans garde-fous.",
   "L'accès est très encadré : achat d'une clé de sécurité, usage limité au dépôt de PHP, activité surveillée par le fournisseur.",
   "Usage décrit : à la réception d'un rapport de vulnérabilité, demander au modèle tous les points d'entrée possibles ; il en trouve souvent d'autres à corriger.",
   "Il y voit une avance pour les défenseurs sur les attaquants. Ni le modèle ni le fournisseur ne sont nommés.",
   "Extrait de 81 secondes ; l'épisode complet est en lien dans la description."
  ],
  "avis": "Peu utile pour la structure. Bon contrepoint aux vidéos sur les IA « sans filtre » : ici, l'accès sans garde-fous est réservé à des défenseurs identifiés et surveillés.",
  "avisDev": "Retour d'expérience concret sur l'usage d'un modèle pour élargir l'analyse d'une faille dans l'écosystème PHP ; réserve : extrait très court, modèle non nommé.",
  "tags": [
   "php",
   "cybersécurité",
   "vulnérabilités",
   "garde-fous"
  ]
 },
 {
  "id": "T3LBqy8SnFU",
  "titre": "Trois usages des mods de Claude Code",
  "chaine": "Le Raphiné",
  "duree": 48,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "La vidéo présente les mods de Claude Code, qui permettraient de faire dialoguer des sessions, de modifier l'interface et d'envoyer les tâches simples vers un modèle moins cher.",
  "points": [
   "Selon la vidéo, les « mods » (transcrits « modes ») sont une nouvelle fonctionnalité de Claude ; la description renvoie à la documentation officielle.",
   "Usage 1 : faire communiquer des sessions Claude Code, l'une planifie pendant que l'autre construit.",
   "Usage 2 : modifier l'interface, par exemple ajouter un tableau de bord qui montre l'activité des agents.",
   "Usage 3 : envoyer les tâches simples vers un modèle moins cher pour préserver ses limites d'usage.",
   "Il suffirait de décrire le mod voulu à Claude pour qu'il le crée, sans connaissance technique. Aucune démonstration détaillée en 48 secondes."
  ],
  "avis": "Peu utile pour la structure : concerne les utilisateurs avancés de Claude Code.",
  "avisDev": "Piste à vérifier dans la documentation officielle : coordination entre sessions et routage des tâches simples vers un modèle moins cher ; réserve : 48 secondes sans démonstration.",
  "tags": [
   "claude code",
   "mods",
   "multi-agents",
   "coûts"
  ]
 },
 {
  "id": "PBydIj_m5n8",
  "titre": "ECC : une collection d'agents et de skills pour Claude Code",
  "chaine": "Paul Automatise",
  "duree": 58,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 2,
  "usages": [
   "dev"
  ],
  "resume": "La vidéo présente ECC, un dépôt GitHub d'agents et de skills qui s'installe comme plugin dans Claude Code, avec des commandes pour planifier, construire, sécuriser et tester. Ton très exagéré.",
  "points": [
   "ECC serait l'œuvre d'un ancien ingénieur de Google, réalisée seul en 6 mois : 63 agents, 249 skills, plus de 2 400 étoiles sur GitHub (chiffres non vérifiés).",
   "Installation par la commande de marketplace de plugins de Claude Code ; Cursor et Codex sont aussi cités.",
   "Commandes mises en avant : planifier (architecture), construire (code), sécuriser (l'agent attaque l'application pour trouver des failles), tester (jusqu'à 90 % de couverture).",
   "Le sens du sigle ECC n'est pas donné. Ton excessif (« remplacer tous les ingénieurs du monde ») ; le dépôt est envoyé en message privé contre un commentaire."
  ],
  "avis": "Peu utile pour la structure. Promesses non démontrées.",
  "avisDev": "Dépôt à parcourir pour s'inspirer d'une organisation en agents et skills (planifier, construire, sécuriser, tester) ; réserve : efficacité non démontrée, et installer des centaines de skills tierces sans les lire pose un problème de sécurité.",
  "tags": [
   "claude code",
   "plugins",
   "agents",
   "skills",
   "tests"
  ]
 },
 {
  "id": "XRrvUVtbCq4",
  "titre": "IA et emploi : la question de la redistribution",
  "chaine": "Penser c'est chouette Extraits",
  "duree": 33,
  "lot": "2026-11-23",
  "categorie": "Analyse",
  "interet": 1,
  "dev": 0,
  "usages": [
   "metiers"
  ],
  "resume": "Une économiste estime que l'IA aura un effet sur le marché du travail et qu'il faudra cette fois organiser sérieusement une redistribution, même si ce n'est qu'une transition.",
  "points": [
   "L'économiste (Axelle Arquié, selon la description) pense que l'IA aura un impact sur le marché du travail et qu'il faut préparer une redistribution.",
   "Elle distingue deux scénarios : une baisse durable du travail humain, ou une transition avant l'apparition de nouveaux métiers, hypothèse de la plupart des économistes selon elle.",
   "Même dans le second cas, elle juge qu'il faudrait redistribuer sérieusement, ce qui n'a été fait dans aucune transition technologique.",
   "Extrait de 33 secondes, sans chiffre ni proposition concrète."
  ],
  "avis": "Éclairage court sur l'emploi, utile pour ouvrir une discussion, mais trop bref pour fonder une analyse. C'est une position d'économiste, présentée comme telle.",
  "tags": [
   "emploi",
   "redistribution",
   "économie",
   "transition"
  ]
 },
 {
  "id": "W9dwNGc3MPw",
  "titre": "L'IA amplifie aussi les faiblesses des juniors",
  "chaine": "Le Frère Codeur",
  "duree": 25,
  "lot": "2026-11-23",
  "categorie": "Témoignage",
  "interet": 1,
  "dev": 1,
  "usages": [
   "dev",
   "metiers"
  ],
  "resume": "Le présentateur estime que l'IA amplifie forces et faiblesses : confier Claude Code à un développeur junior sans contrôle crée vite de la dette technique.",
  "points": [
   "Selon le présentateur, l'IA amplifie les forces mais aussi les faiblesses.",
   "Donner Claude Code à un développeur junior sans contrôle reviendrait à lui confier « une centrale nucléaire ».",
   "Risque cité : une dette technique qui grossit très vite.",
   "Extrait de 25 secondes d'une vidéo plus longue, sans exemple ni méthode d'encadrement."
  ],
  "avis": "Peu utile seul. L'idée peut servir dans l'accompagnement des personnes qui se reconvertissent vers le développement : l'outil ne remplace pas la capacité à relire et juger le code.",
  "tags": [
   "juniors",
   "claude code",
   "dette technique",
   "encadrement"
  ]
 },
 {
  "id": "8PW4_PyMmcA",
  "titre": "Le brouillard du développeur qui supervise des agents",
  "chaine": "Le Frère Codeur",
  "duree": 34,
  "lot": "2026-11-23",
  "categorie": "Témoignage",
  "interet": 1,
  "dev": 1,
  "usages": [
   "dev",
   "metiers"
  ],
  "resume": "Un développeur décrit la sensation de multiplier les projets grâce aux agents tout en ne faisant plus que vérifier leur travail, au point de perdre le plaisir de coder.",
  "points": [
   "Le présentateur évoque l'enchaînement de nombreux projets par semaine grâce aux outils (il cite un quatorzième projet).",
   "Selon lui, l'occupation principale devient de vérifier ce que font les agents.",
   "Il dit avoir perdu « l'art de coder » et parle d'un brouillard qui s'installe à force de multiplier les agents.",
   "Extrait de 34 secondes d'une vidéo plus longue ; ni donnée ni solution proposée."
  ],
  "avis": "Peu utile pour la structure : ressenti personnel en quelques secondes. Peut illustrer en formation le rôle de vérification qui reste à l'humain.",
  "tags": [
   "agents de code",
   "charge mentale",
   "métier de développeur",
   "témoignage"
  ]
 },
 {
  "id": "h1-VZDZlND8",
  "titre": "Reconnaître un post LinkedIn écrit par IA",
  "chaine": "Le Frère Codeur",
  "duree": 46,
  "lot": "2026-11-23",
  "categorie": "Analyse",
  "interet": 1,
  "dev": 0,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Le présentateur liste les signes d'un post LinkedIn généré par IA et conseille de travailler son propre style plutôt que de publier un texte brut.",
  "points": [
   "Selon le présentateur, un post généré se reconnaît en trois lignes : même structure, « bienveillance exacerbée ».",
   "Autres indices cités : illustrations générées qui se ressemblent, emojis partout, textes interchangeables.",
   "Il constate que beaucoup publient sans relire.",
   "Conseil : utiliser l'IA mais travailler son style plutôt que publier le texte tel quel. Langage familier."
  ],
  "avis": "Peu utile pour la structure. Peut alimenter une discussion sur la relecture et l'appropriation des textes générés.",
  "tags": [
   "linkedin",
   "rédaction",
   "style",
   "relecture"
  ]
 },
 {
  "id": "TQ36-U2r_FM",
  "titre": "Founder Skill : tester une idée face à des clients simulés",
  "chaine": "unefilleia",
  "duree": 55,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "metiers"
  ],
  "resume": "La vidéo présente une skill gratuite pour Claude qui fait évaluer une idée de business par des « experts » et par un panel d'acheteurs imaginés par l'IA.",
  "points": [
   "La skill « founder-skill » installe 11 « experts » dans Claude : un comité qui juge l'idée, un analyste des concurrents et des reproches de leurs clients, un calcul de ce qui reste après les frais.",
   "Un panel de 100 acheteurs imaginés par Claude, chacun avec un budget et des objections ; Claude propose une réponse puis teste une offre révisée.",
   "Installation : coller l'URL dans Claude Code ; avec la version gratuite, coller le fichier skill.md dans une conversation. Conseil : tester avec cinq clients pour économiser des tokens.",
   "La description précise que les acheteurs sont simulés et ne remplacent pas de vrais clients ; l'oral, qui parle de tester l'idée sur 100 clients, est moins clair."
  ],
  "avis": "Peu utile pour la structure. Pour un accompagnement à la création d'activité, l'outil peut aider à lister des objections, à condition de rappeler que ces clients sont fictifs.",
  "tags": [
   "skill",
   "claude",
   "entrepreneuriat",
   "clients simulés"
  ]
 },
 {
  "id": "jM6dVazTG6Y",
  "titre": "Modèles « abliterés » : retirer les refus d'une IA",
  "chaine": "Melvynx",
  "duree": 57,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux",
   "local"
  ],
  "resume": "La vidéo explique que les refus des modèles viennent d'un entraînement ajouté après coup, que l'« abliteration » retire sur des modèles ouverts. Elle renvoie vers un service qui donne accès à ces modèles.",
  "points": [
   "Selon la vidéo, les modèles ne refusent rien au départ ; Anthropic et OpenAI ajoutent ensuite un entraînement qui leur apprend à dire non.",
   "Sur des modèles ouverts, l'« abliteration » (transcrite « oblitération ») repère quand et pourquoi le modèle refuse, puis modifie son comportement pour qu'il accepte tout.",
   "Chiffre de la description : sur DeepSeek V4.1, le score MMLU passerait de 87 % à 82,7 % après modification, selon le service Venice, qui commercialise ces modèles.",
   "La vidéo vante l'accès à des musiques et livres sous droits ou à des informations confidentielles. Titre accrocheur."
  ],
  "avis": "Peu utile, et à manier avec prudence : la vidéo présente comme un avantage l'accès à des contenus protégés. Seul intérêt pour une formation : montrer que les garde-fous d'un modèle ouvert peuvent être retirés, donc qu'un modèle local n'offre pas les protections d'un service encadré.",
  "tags": [
   "abliteration",
   "garde-fous",
   "modèles ouverts",
   "sécurité"
  ]
 },
 {
  "id": "2Ti48KW51Gg",
  "titre": "OpenJarvis : un assistant installé par Claude Code",
  "chaine": "Jawad | Vibe MARKETING",
  "duree": 42,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "local",
   "dev"
  ],
  "resume": "La vidéo présente OpenJarvis, un assistant open source qu'on ferait installer par Claude Code et qu'on relierait à ses mails et à son agenda pour un résumé quotidien.",
  "points": [
   "OpenJarvis est présenté comme un assistant open source et gratuit, conçu par des chercheurs de Stanford.",
   "Installation : donner le lien à Claude Code et lui demander de l'installer, sans toucher au code.",
   "Relié aux mails et à l'agenda, il ferait chaque matin un tri : les trois messages importants et les personnes qui attendent une réponse.",
   "Argument : il tourne sur l'ordinateur, sans abonnement. La vidéo ne dit pas quel modèle il utilise ni si les mails partent vers un service en ligne.",
   "Titre accrocheur ; le lien et le prompt passent par un site qui collecte des adresses."
  ],
  "avis": "Peu utile pour la structure : brancher un agent sur une messagerie professionnelle pose des questions de sécurité et de données que la vidéo n'aborde pas. Faire installer un logiciel par un agent sans relire ce qu'il exécute est aussi un risque.",
  "tags": [
   "assistant personnel",
   "open source",
   "claude code",
   "messagerie"
  ]
 },
 {
  "id": "3AMfW4GhKHs",
  "titre": "Une suite bureautique libre compatible Office, réécrite en Rust",
  "chaine": "Paul Automatise",
  "duree": 53,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Selon la vidéo, une équipe a réécrit en Rust des équivalents gratuits et open source de Word, Excel et PowerPoint, compatibles avec les fichiers Office. Aucune démonstration.",
  "points": [
   "Selon la vidéo, une équipe a recréé de zéro trois applications équivalentes à Word, Excel et PowerPoint, en Rust, sous licences MIT et Apache 2.0.",
   "Elles ouvriraient et enregistreraient les fichiers docx, xlsx et pptx, sur Windows, macOS, Linux et dans le navigateur.",
   "Noms tels que transcrits : « Warcraft » (probablement Wordcraft), Gridcraft et Deckcraft. Non vérifiés.",
   "La même équipe aurait fait de même avec la suite Adobe la semaine précédente. Aucune démonstration de compatibilité.",
   "Liens envoyés en message privé contre un commentaire ; titre et accroche exagérés."
  ],
  "avis": "Peu utile en l'état : compatibilité affirmée sans démonstration et noms incertains. La structure travaillant sous Microsoft 365, l'intérêt serait au mieux pour des personnes accompagnées sans licence, après vérification.",
  "tags": [
   "bureautique",
   "open source",
   "rust",
   "alternative office"
  ]
 },
 {
  "id": "S9Ljiesp1o8",
  "titre": "OpenCut : un éditeur vidéo libre inspiré de CapCut",
  "chaine": "Paul Automatise",
  "duree": 50,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "La vidéo présente OpenCut, un éditeur vidéo open source et gratuit inspiré de CapCut, avec un serveur MCP annoncé pour laisser un agent faire le montage.",
  "points": [
   "OpenCut est présenté comme un clone open source et gratuit de CapCut, sans abonnement ni filigrane.",
   "Fonctions citées : montage multipiste, images clés, masques, vitesse, format libre (16:9, 9:16 ou sur mesure).",
   "L'équipe préparerait une application mobile et un serveur MCP pour qu'un agent fasse le montage (couper les silences, ajouter des transitions) ; l'exemple est décrit, pas montré.",
   "Chiffre cité : 97 000 étoiles sur GitHub, non vérifié. Lien en message privé contre un commentaire."
  ],
  "avis": "Peu utile pour la structure ; peut dépanner pour du montage simple sans abonnement, après test. Le MCP n'est qu'annoncé.",
  "tags": [
   "montage vidéo",
   "open source",
   "mcp",
   "capcut"
  ]
 },
 {
  "id": "9jgNw6gi7G8",
  "titre": "Une skill Claude Code pour ajouter des effets à une vidéo",
  "chaine": "Le Raphiné",
  "duree": 46,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "dev"
  ],
  "resume": "La vidéo montre une skill open source qui ajoute des effets visuels à une vidéo importée dans Claude Code, chacun déclenché par une commande.",
  "points": [
   "Skill gratuite et open source (claude-video-effects, lien en description) qui ajoute des effets à une vidéo glissée dans Claude Code.",
   "Effets cités : panneaux de verre flottants, miniatures qui tournent, arrière-plan assombri, liste de tâches cochée au fil de la parole, frise de montage, coupes rapides, interrupteurs façon iPhone.",
   "Installation selon la description : demander à Claude Code d'installer la skill depuis GitHub, redémarrer, puis taper /effects.",
   "Les noms des commandes ne sont pas audibles dans la transcription."
  ],
  "avis": "Peu utile pour la structure. Gadget de montage pour créateurs de contenu.",
  "tags": [
   "claude code",
   "skill",
   "effets vidéo",
   "montage"
  ]
 },
 {
  "id": "2dkdjZxSkgo",
  "titre": "Trois commandes Gemini pour mettre en scène une photo de produit",
  "chaine": "Le Raphiné",
  "duree": 33,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 0,
  "usages": [
   "fondamentaux"
  ],
  "resume": "La vidéo propose trois commandes à taper dans Gemini après avoir importé la photo d'un produit : vue éclatée, révélation façon publicité, démontage pièce par pièce.",
  "points": [
   "On importe la photo d'un produit dans Gemini puis on tape une commande.",
   "« /exploded view » : vue éclatée, chaque composant séparé.",
   "« /reveal » : révélation façon publicité, avec mise en scène.",
   "« /teardown » : le produit démonté pièce par pièce.",
   "La vidéo ne dit pas s'il s'agit de vraies commandes de Gemini ou de simples consignes."
  ],
  "avis": "Peu utile pour la structure : astuce de visuels marketing.",
  "tags": [
   "gemini",
   "génération d'image",
   "photo produit",
   "prompts"
  ]
 },
 {
  "id": "CYnet6Dnzzo",
  "titre": "Text to CAD : modéliser un objet 3D avec Claude",
  "chaine": "leoexplique_ai",
  "duree": 36,
  "lot": "2026-11-23",
  "categorie": "Outil",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Selon la vidéo, « Text to CAD » permet de décrire un objet à Claude, qui le modélise en 3D, vérifie qu'il est imprimable et peut lancer l'impression.",
  "points": [
   "Selon la vidéo, il suffit de décrire l'objet voulu à Claude (exemple : un support de casque sous un bureau) pour qu'il le modélise en 3D.",
   "Claude vérifierait que l'objet est imprimable, la solidité des parois et la meilleure façon de l'imprimer.",
   "Le fichier serait adapté à l'imprimante ; avec une Bambu Lab, Claude lancerait lui-même l'impression.",
   "Présenté comme gratuit ; la vidéo ne dit pas s'il s'agit d'une skill, d'un connecteur ou d'un service tiers. Guide envoyé contre un commentaire."
  ],
  "avis": "Peu utile pour la structure, sauf éventuel atelier de fabrication numérique. Titre accrocheur (« Claude vient de tuer la modélisation 3D »).",
  "tags": [
   "impression 3d",
   "cao",
   "claude",
   "modélisation"
  ]
 },
 {
  "id": "RZHtYw7D_KM",
  "titre": "Un modèle d'Anthropic aurait résolu un problème d'informatique quantique",
  "chaine": "Ugo Tatas",
  "duree": 75,
  "lot": "2026-11-23",
  "categorie": "Actualité",
  "interet": 1,
  "dev": 1,
  "usages": [
   "fondamentaux"
  ],
  "resume": "Selon la vidéo, un modèle d'Anthropic non accessible au public aurait trouvé en trois jours une preuve sur une question d'informatique quantique ouverte depuis 2008. Aucune source n'est donnée.",
  "points": [
   "Selon la vidéo, une IA d'Anthropic réservée à quelques utilisateurs aurait trouvé en moins de 3 jours une preuve sur une question ouverte depuis 2008.",
   "La question : les ordinateurs quantiques sont-ils plus rapides pour tous les problèmes ou seulement pour certains ?",
   "Le travail viendrait d'une entreprise de recherche américaine, non nommée ; le modèle n'est pas nommé non plus.",
   "Aucune référence à l'article scientifique ; la vidéo s'arrête sur une question au public."
  ],
  "avis": "Peu utile : affirmation spectaculaire, impossible à vérifier à partir de la vidéo. Peut servir d'exercice d'esprit critique face aux annonces sur l'IA.",
  "tags": [
   "recherche",
   "informatique quantique",
   "anthropic",
   "annonce non sourcée"
  ]
 }
]);
