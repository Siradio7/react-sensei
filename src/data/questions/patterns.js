export const patternQuestions = [
    {
        id: 41,
        question: "Qu'est-ce que le pattern des composants contrôlés ?",
        options: [
            "Un composant gérant son propre état",
            "Un composant contrôlé par des props uniquement",
            "Un composant dont l'état est contrôlé par React via des props",
            "Un composant utilisant uniquement des hooks"
        ],
        correctAnswer: 2,
        category: "patterns"
    },
    {
        id: 42,
        question: "Quel est l'objectif principal du Context API ?",
        options: [
            "Remplacer Redux",
            "Passer des données profondément dans l'arborescence sans props drilling",
            "Créer un composant global",
            "Stocker les états des hooks"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 43,
        question: "À quoi sert le pattern Higher-Order Component (HOC) ?",
        options: [
            "Créer des classes de composants",
            "Partager des comportements entre plusieurs composants",
            "Optimiser le rendu",
            "Remplacer les hooks"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 44,
        question: "Qu'est-ce qu'un render prop ?",
        options: [
            "Un composant qui utilise props pour rendre du JSX",
            "Une prop contenant une fonction qui détermine quoi rendre",
            "Un hook qui rend une fonction",
            "Une méthode de rendu conditionnel"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 45,
        question: "Quel pattern est souvent utilisé pour remplacer Redux dans les petites applications ?",
        options: [
            "Render Props",
            "Context API",
            "HOC",
            "Custom Hooks"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 46,
        question: "Pourquoi utiliser des custom hooks ?",
        options: [
            "Pour remplacer les hooks natifs",
            "Pour réutiliser la logique métier entre les composants",
            "Pour améliorer les performances",
            "Pour gérer les erreurs"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 47,
        question: "Quel est un avantage clé du pattern Compound Components ?",
        options: [
            "Faciliter la composition et la flexibilité des composants",
            "Augmenter la performance",
            "Remplacer les props drilling",
            "Créer des hooks automatiques"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 48,
        question: "Dans quel cas utiliser le pattern de rendu conditionnel ?",
        options: [
            "Pour afficher des composants différents selon une condition",
            "Pour gérer le state global",
            "Pour remplacer les classes",
            "Pour éviter le Context API"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 49,
        question: "Le pattern Provider-Consumer est associé à :",
        options: [
            "React Router",
            "Context API",
            "Redux",
            "Custom Hooks"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 50,
        question: "À quoi sert le pattern Memoization (React.memo) ?",
        options: [
            "Éviter les re-rendus inutiles des composants",
            "Créer des hooks personnalisés",
            "Rendre des composants côté serveur",
            "Gérer les formulaires"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 51,
        question: "Que permet de faire le hook useReducer ?",
        options: [
            "Simplifier la gestion de l'état local complexe",
            "Remplacer Redux",
            "Créer des reducers automatiques",
            "Remplacer les props"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 52,
        question: "Pourquoi adopter le pattern Container-Presentational Components ?",
        options: [
            "Pour séparer la logique métier de la logique d'affichage",
            "Pour gérer l'état global",
            "Pour améliorer les performances",
            "Pour remplacer le Context API"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 53,
        question: "Que représente le prop children ?",
        options: [
            "Une prop spéciale qui permet d'imbriquer des éléments",
            "Un type de composant",
            "Un hook enfant",
            "Une méthode de React"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 54,
        question: "Quel est l'objectif principal du pattern Lazy Loading ?",
        options: [
            "Charger les données plus rapidement",
            "Réduire le temps de chargement initial en chargeant les composants à la demande",
            "Optimiser les requêtes réseau",
            "Créer des hooks automatiquement"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 55,
        question: "Que fait le hook useContext ?",
        options: [
            "Crée un contexte",
            "Permet d'utiliser un contexte existant sans Consumer",
            "Remplace Context API",
            "Gère les événements"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 56,
        question: "Quel est le rôle du prop key dans les listes ?",
        options: [
            "Gérer les performances",
            "Garantir une identification unique pour chaque élément",
            "Générer des identifiants",
            "Créer des hooks pour les enfants"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 57,
        question: "Pourquoi utiliser le pattern Portals ?",
        options: [
            "Pour améliorer les performances des composants",
            "Pour rendre un composant dans un DOM différent de celui de son parent",
            "Pour remplacer ReactDOM",
            "Pour gérer les props drilling"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 58,
        question: "Quel est un avantage clé du pattern Controlled vs Uncontrolled Components ?",
        options: [
            "Contrôler directement les entrées via React",
            "Utiliser des composants sans état",
            "Améliorer les performances",
            "Créer des formulaires dynamiques"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 59,
        question: "Quel est un inconvénient du pattern props drilling ?",
        options: [
            "Une flexibilité limitée",
            "Un code difficile à lire et à maintenir si les composants sont profondément imbriqués",
            "Une gestion centralisée de l'état",
            "Un comportement imprévisible"
        ],
        correctAnswer: 1,
        category: "patterns"
    }
]


