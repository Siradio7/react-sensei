export const patternQuestions = [
    {
        id: 41,
        question: "Qu'est-ce que le lifting state up?",
        options: [
            "Déplacer l'état vers un composant parent",
            "Créer un nouvel état",
            "Supprimer l'état",
            "Copier l'état"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 42,
        question: "Qu'est-ce que le prop drilling?",
        options: [
            "Passer des props à travers plusieurs niveaux de composants",
            "Créer des props",
            "Supprimer des props",
            "Modifier des props"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 43,
        question: "Quel est le principe du composant fonctionnel dans React?",
        options: [
            "Un composant fonctionnel est une fonction qui retourne du JSX",
            "Un composant fonctionnel est une classe qui étend React.Component",
            "Un composant fonctionnel est un tableau de JSX",
            "Un composant fonctionnel ne peut pas avoir d'état"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 44,
        question: "Qu'est-ce que le pattern container/presentational?",
        options: [
            "Séparer la logique de présentation de la logique de gestion d'état",
            "Utiliser un seul composant pour l'ensemble de l'application",
            "Créer des composants avec des états et des effets",
            "Utiliser une approche globale pour gérer tous les composants"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 45,
        question: "Qu'est-ce que le pattern de composition de composants?",
        options: [
            "Construire des composants plus complexes à partir de composants plus simples",
            "Créer un composant de classe par application",
            "Ajouter des styles CSS dans les composants",
            "Réutiliser des hooks dans les composants"
        ],
        correctAnswer: 3,
        category: "patterns"
    },
    {
        id: 46,
        question: "Qu'est-ce que l'approche HOC (Higher-Order Component)?",
        options: [
            "Un composant qui prend un autre composant en argument et retourne un nouveau composant",
            "Un composant qui gère l'état d'un autre composant",
            "Un composant utilisé pour manipuler le DOM",
            "Un composant qui sert à afficher des erreurs"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 47,
        question: "Quel est l'objectif du pattern render props?",
        options: [
            "Permettre à un composant de partager son code avec un autre composant en utilisant une fonction",
            "Passer des props à un composant enfant",
            "Modifier les états directement dans un composant",
            "Créer un formulaire dynamique"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 48,
        question: "Comment réutiliser des comportements dans React?",
        options: [
            "En utilisant des hooks personnalisés",
            "En copiant le code dans chaque composant",
            "En utilisant des HOCs seulement",
            "En réécrivant des composants à chaque fois"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 49,
        question: "Quel pattern est utilisé pour rendre un composant plus générique?",
        options: [
            "Le pattern composant générique",
            "Le pattern HOC",
            "Le pattern render props",
            "Le pattern container/presentational"
        ],
        correctAnswer: 3,
        category: "patterns"
    },
    {
        id: 50,
        question: "Qu'est-ce que le pattern Flux?",
        options: [
            "Un modèle unidirectionnel de gestion de l'état dans l'application",
            "Une méthode de gestion des événements",
            "Une approche pour faire des appels API",
            "Une méthode pour gérer les formulaires"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 51,
        question: "Qu'est-ce que le pattern Redux?",
        options: [
            "Un conteneur centralisé pour l'état global d'une application",
            "Un gestionnaire de requêtes API",
            "Un outil pour manipuler le DOM",
            "Une méthode pour gérer les animations"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 52,
        question: "Qu'est-ce que le pattern Singleton?",
        options: [
            "Un pattern qui permet de garantir qu'une seule instance d'un composant existe",
            "Un pattern qui optimise la gestion de l'état local",
            "Un pattern pour manipuler le DOM",
            "Un pattern pour partager des données entre plusieurs pages"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 53,
        question: "Pourquoi utiliser un pattern de gestion d'état comme Redux?",
        options: [
            "Pour gérer l'état global de manière prévisible et centralisée",
            "Pour faciliter les appels API",
            "Pour ajouter des animations dans l'application",
            "Pour organiser les fichiers du projet"
        ],
        correctAnswer: 3,
        category: "patterns"
    },
    {
        id: 54,
        question: "Quel pattern permet de gérer plusieurs états dans un même composant de manière plus structurée?",
        options: [
            "Le pattern useReducer",
            "Le pattern HOC",
            "Le pattern container/presentational",
            "Le pattern render props"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 55,
        question: "Qu'est-ce que le pattern observer?",
        options: [
            "Un pattern où un composant observe les changements dans un autre composant ou état",
            "Un pattern pour observer les appels API",
            "Un pattern pour observer les effets secondaires",
            "Un pattern pour manipuler les événements"
        ],
        correctAnswer: 2,
        category: "patterns"
    },
    {
        id: 56,
        question: "Qu'est-ce que l'architecture MVC?",
        options: [
            "Un modèle de gestion des données, de la vue et du contrôle des événements",
            "Un modèle pour créer des composants React",
            "Une méthode pour gérer les états dans un composant",
            "Un modèle pour manipuler le DOM"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 57,
        question: "Qu'est-ce que le pattern MVC est utilisé pour?",
        options: [
            "Séparer la logique d'application, la présentation et la gestion des événements",
            "Gérer l'état des composants",
            "Manipuler des données dans React",
            "Créer des composants génériques"
        ],
        correctAnswer: 0,
        category: "patterns"
    },
    {
        id: 58,
        question: "Quand utiliser le pattern container/presentational?",
        options: [
            "Lorsqu'on veut séparer les responsabilités de présentation et de logique dans un composant",
            "Lorsqu'on veut centraliser l'état dans un seul composant",
            "Lorsqu'on souhaite utiliser des classes",
            "Lorsqu'on veut manipuler directement le DOM"
        ],
        correctAnswer: 1,
        category: "patterns"
    },
    {
        id: 59,
        question: "Quel est l'objectif du pattern hooks pour partager des logiques?",
        options: [
            "Créer des hooks personnalisés pour réutiliser des logiques",
            "Créer des classes de logique réutilisables",
            "Utiliser des HOC",
            "Utiliser le pattern Flux"
        ],
        correctAnswer: 2,
        category: "patterns"
    }
];
