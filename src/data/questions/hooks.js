export const hooksQuestions = [
    {
        id: 21,
        question: "Qu'est-ce que le hook useEffect?",
        options: [
            "Un hook pour gérer les effets de bord",
            "Un hook pour créer des animations",
            "Un hook pour gérer les formulaires",
            "Un hook pour gérer les routes"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 22,
        question: "À quoi sert le hook useContext?",
        options: [
            "Pour gérer le contexte global de l'application",
            "Pour créer des animations",
            "Pour gérer les formulaires",
            "Pour faire des requêtes API"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 23,
        question: "Qu'est-ce que le hook useMemo?",
        options: [
            "Un hook pour mémoriser une valeur calculée",
            "Un hook pour mémoriser une fonction",
            "Un hook pour gérer l'état local",
            "Un hook pour gérer les effets de bord"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 24,
        question: "À quoi sert le hook useCallback?",
        options: [
            "Pour mémoriser une fonction",
            "Pour gérer l'état local",
            "Pour gérer les effets de bord",
            "Pour gérer les événements"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 25,
        question: "Qu'est-ce que le hook useReducer?",
        options: [
            "Un hook pour gérer des états complexes",
            "Un hook pour gérer des formulaires",
            "Un hook pour effectuer des requêtes API",
            "Un hook pour mémoriser une valeur calculée"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 26,
        question: "Quel hook permet de partager l'état entre les composants?",
        options: [
            "useContext",
            "useState",
            "useEffect",
            "useReducer"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 27,
        question: "Comment peut-on annuler un effet secondaire dans useEffect?",
        options: [
            "En retournant une fonction de nettoyage",
            "En utilisant un state",
            "En utilisant un conditionnel",
            "Avec useState"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 28,
        question: "Est-il possible d'utiliser plusieurs hooks useState dans un même composant?",
        options: [
            "Oui, il est possible d'utiliser plusieurs hooks useState",
            "Non, un seul hook useState peut être utilisé",
            "Cela dépend de la taille du composant",
            "Non, useState est un hook global"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 29,
        question: "Que fait le hook useLayoutEffect?",
        options: [
            "Il est similaire à useEffect, mais exécuté de manière synchrone après le DOM",
            "Il exécute une fonction de nettoyage",
            "Il est utilisé uniquement pour les formulaires",
            "Il est utilisé pour manipuler les événements"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 30,
        question: "Peut-on appeler les hooks dans des conditions?",
        options: [
            "Non, les hooks doivent être appelés à chaque rendu",
            "Oui, les hooks peuvent être appelés dans des conditions",
            "Oui, mais il faut les appeler dans le return",
            "Cela dépend du type de hook"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 31,
        question: "Quand faut-il utiliser useEffect?",
        options: [
            "Lorsqu'il y a un effet secondaire ou une opération asynchrone à réaliser",
            "Lorsqu'on souhaite manipuler le DOM",
            "Lorsqu'on veut gérer les événements",
            "Lorsque l'on a besoin de créer un composant"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 32,
        question: "Qu'est-ce qu'un hook personnalisé (Custom Hook)?",
        options: [
            "Un hook créé par l'utilisateur pour réutiliser des comportements",
            "Un hook pour gérer les états uniquement",
            "Un hook qui sert à manipuler le DOM",
            "Un hook pour créer des composants"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 33,
        question: "Qu'est-ce que useRef?",
        options: [
            "Un hook qui permet de créer une référence mutable persistante",
            "Un hook pour gérer les états locaux",
            "Un hook pour partager des données entre composants",
            "Un hook pour gérer les effets secondaires"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 34,
        question: "Peut-on utiliser useEffect pour interagir avec des API?",
        options: [
            "Oui, useEffect est utilisé pour effectuer des appels API dans React",
            "Non, il faut utiliser useState pour cela",
            "Oui, mais uniquement dans les composants de classe",
            "Non, ce n'est pas une bonne pratique"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 35,
        question: "Que fait useState?",
        options: [
            "Permet de définir et de gérer un état local dans un composant fonctionnel",
            "Permet de définir une fonction",
            "Permet de gérer les événements",
            "Permet d'effectuer des appels API"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 36,
        question: "Qu'est-ce qu'un hook d'effet secondaire dans React?",
        options: [
            "Un hook qui exécute une fonction après chaque rendu",
            "Un hook pour les formulaires",
            "Un hook pour la gestion des événements",
            "Un hook pour manipuler le DOM directement"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 37,
        question: "Qu'est-ce que useEffect peut remplacer dans les composants de classe?",
        options: [
            "componentDidMount, componentDidUpdate, et componentWillUnmount",
            "setState",
            "render",
            "componentDidCatch"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 38,
        question: "Est-il possible de modifier un state directement dans React?",
        options: [
            "Non, React exige de ne pas modifier directement l'état, mais de le mettre à jour via setState ou useState",
            "Oui, il est possible de modifier directement l'état",
            "Oui, mais seulement avec useState",
            "Non, on doit toujours utiliser un hook pour modifier l'état"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 39,
        question: "Quel hook est utilisé pour gérer un état complexe avec plusieurs sous-états?",
        options: [
            "useReducer",
            "useState",
            "useEffect",
            "useMemo"
        ],
        correctAnswer: 0,
        category: "hooks"
    },
    {
        id: 40,
        question: "Quand utiliser useEffect avec un tableau de dépendances vide?",
        options: [
            "Lorsqu'on souhaite que l'effet ne s'exécute qu'une seule fois au montage du composant",
            "Lorsqu'on veut que l'effet s'exécute après chaque mise à jour",
            "Lorsqu'on veut que l'effet soit exécuté uniquement lorsque le state change",
            "Lorsqu'on veut éviter d'utiliser des hooks"
        ],
        correctAnswer: 0,
        category: "hooks"
    }
];
