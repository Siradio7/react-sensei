export const advancedQuestions = [
    {
        id: 60,
        question: "Qu'est-ce que React Fiber ?",
        options: [
            "Une bibliothèque externe pour React",
            "Le moteur de rendu de React pour une meilleure gestion de la priorité",
            "Un hook utilisé pour gérer l'état",
            "Un outil pour analyser les performances"
        ],
        correctAnswer: 1,
        category: "concepts avancés"
    },
    {
        id: 61,
        question: "À quoi sert le hook useImperativeHandle ?",
        options: [
            "Créer un état local pour un composant",
            "Exposer des méthodes ou propriétés spécifiques à un composant parent",
            "Gérer les effets secondaires",
            "Manipuler directement le DOM"
        ],
        correctAnswer: 1,
        category: "concepts avancés"
    },
    {
        id: 62,
        question: "Quel est l'objectif principal du hook useLayoutEffect ?",
        options: [
            "Gérer les événements avant le rendu du DOM",
            "Effectuer des mises à jour synchrones après le rendu mais avant la peinture",
            "Remplacer useEffect",
            "Créer des hooks personnalisés"
        ],
        correctAnswer: 1,
        category: "concepts avancés"
    },
    {
        id: 63,
        question: "Pourquoi utiliser le hook useRef ?",
        options: [
            "Pour stocker une référence mutable qui ne provoque pas de re-rendu",
            "Pour créer une copie d'un état",
            "Pour remplacer les contextes",
            "Pour gérer les erreurs"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 64,
        question: "Qu'est-ce qu'un Fragment en React ?",
        options: [
            "Un composant pour regrouper plusieurs éléments sans ajouter de noeud DOM supplémentaire",
            "Une manière de gérer les erreurs",
            "Une méthode pour optimiser les performances",
            "Un type de hook avancé"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 65,
        question: "Qu'est-ce que le server-side rendering (SSR) ?",
        options: [
            "Rendre le DOM côté client",
            "Rendre les composants React côté serveur pour améliorer les performances et le SEO",
            "Créer un état côté serveur",
            "Optimiser les requêtes réseau"
        ],
        correctAnswer: 1,
        category: "concepts avancés"
    },
    {
        id: 66,
        question: "À quoi sert le suspense en React ?",
        options: [
            "Gérer les états de chargement pour des composants asynchrones",
            "Remplacer les hooks",
            "Créer des transitions complexes",
            "Gérer les erreurs d'état"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 67,
        question: "Qu'est-ce que le code splitting en React ?",
        options: [
            "Créer des hooks personnalisés",
            "Diviser le code en morceaux plus petits pour charger les parties nécessaires à la demande",
            "Optimiser les performances des composants",
            "Créer des composants enfants automatiquement"
        ],
        correctAnswer: 1,
        category: "concepts avancés"
    },
    {
        id: 68,
        question: "Quel est le rôle de React.memo ?",
        options: [
            "Créer des composants mémorisés",
            "Éviter les re-rendus inutiles en mémorisant les résultats",
            "Créer des hooks automatiquement",
            "Gérer les dépendances d'effets"
        ],
        correctAnswer: 1,
        category: "concepts avancés"
    },
    {
        id: 69,
        question: "Qu'est-ce que le forwardRef ?",
        options: [
            "Passer une référence à un composant enfant",
            "Créer un hook personnalisé",
            "Modifier le DOM",
            "Gérer les erreurs dans les composants"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 70,
        question: "À quoi sert un Error Boundary en React ?",
        options: [
            "Empêcher les erreurs de rendu dans l'application entière",
            "Gérer les erreurs dans les hooks",
            "Créer une copie de l'état",
            "Remplacer les contextes"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 71,
        question: "Quelle est la différence entre useEffect et useLayoutEffect ?",
        options: [
            "useEffect s'exécute après le rendu, useLayoutEffect avant la peinture",
            "useLayoutEffect remplace useEffect",
            "useEffect est utilisé pour les mises à jour synchrones",
            "useLayoutEffect est utilisé pour les erreurs"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 72,
        question: "Qu'est-ce que le lazy loading en React ?",
        options: [
            "Charger un composant uniquement lorsqu'il est nécessaire",
            "Créer des composants enfants",
            "Gérer l'état local",
            "Rendre des composants avec des erreurs"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 73,
        question: "Quelle est la principale limitation des Error Boundaries ?",
        options: [
            "Ils ne peuvent pas gérer les erreurs dans les événements asynchrones ou les hooks",
            "Ils ne peuvent pas être utilisés dans des composants fonctionnels",
            "Ils réduisent les performances",
            "Ils remplacent le contexte existant"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 74,
        question: "Qu'est-ce que le contexte global en React ?",
        options: [
            "Un état partagé entre plusieurs composants",
            "Un composant global",
            "Une bibliothèque externe",
            "Un type de hook personnalisé"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 75,
        question: "À quoi sert le mode strict de React (StrictMode) ?",
        options: [
            "Détecter les problèmes potentiels dans l'application",
            "Améliorer les performances",
            "Créer des composants globalement",
            "Optimiser les requêtes réseau"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 76,
        question: "Qu'est-ce que le concurrent mode en React ?",
        options: [
            "Permettre des mises à jour de l'interface utilisateur non bloquantes",
            "Créer des composants parallèles",
            "Gérer plusieurs états simultanément",
            "Optimiser les erreurs dans les composants"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 77,
        question: "Quel est l'objectif principal de React Profiler ?",
        options: [
            "Analyser et mesurer les performances des composants",
            "Créer des composants enfants",
            "Gérer les erreurs dans les composants",
            "Optimiser les états globaux"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 78,
        question: "À quoi sert le hook useTransition ?",
        options: [
            "Gérer les transitions d'interface utilisateur pour une expérience fluide",
            "Créer des états globaux",
            "Modifier les effets asynchrones",
            "Gérer les erreurs"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 79,
        question: "Quel est le principal avantage du Dynamic Import en React ?",
        options: [
            "Charger les modules à la demande pour optimiser les performances",
            "Créer des composants globaux",
            "Gérer l'état local",
            "Remplacer les contextes"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    },
    {
        id: 80,
        question: "Qu'est-ce que le rendu côté client (Client-Side Rendering) ?",
        options: [
            "Rendre les composants côté navigateur après le chargement de l'application",
            "Rendre les composants côté serveur avant de les envoyer au client",
            "Gérer les états globaux",
            "Créer des composants dynamiques"
        ],
        correctAnswer: 0,
        category: "concepts avancés"
    }
]
