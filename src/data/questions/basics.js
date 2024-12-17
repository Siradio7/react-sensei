export const basicQuestions = [
    {
        id: 1,
        question: "Qu'est-ce qu'un composant React?",
        options: [
            "Une fonction JavaScript qui retourne du HTML",
            "Une classe CSS",
            "Un fichier HTML",
            "Une base de données"
        ],
        correctAnswer: 0,
        category: "basics"
    },
    {
        id: 2,
        question: "Que sont les props dans React?",
        options: [
            "Des propriétés CSS",
            "Des arguments passés aux composants",
            "Des fichiers JavaScript",
            "Des méthodes HTTP"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 3,
        question: "À quoi sert le hook useState?",
        options: [
            "Pour créer des routes",
            "Pour styler des composants",
            "Pour gérer l'état local d'un composant",
            "Pour faire des requêtes API"
        ],
        correctAnswer: 2,
        category: "basics"
    },
    {
        id: 4,
        question: "Comment créer un composant React?",
        options: [
            "En créant une fonction JavaScript qui retourne du JSX",
            "En créant une classe avec extends React.Component",
            "Les deux réponses ci-dessus",
            "Aucune des réponses"
        ],
        correctAnswer: 2,
        category: "basics"
    },
    {
        id: 5,
        question: "Quel est le rôle de JSX?",
        options: [
            "Faire du rendu côté serveur",
            "Écrire du code HTML dans du JavaScript",
            "Faire des calculs",
            "Aucun rôle spécifique"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 6,
        question: "Quel hook permet de créer un effet secondaire dans React?",
        options: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 7,
        question: "Comment peut-on passer des données d'un composant parent à un composant enfant?",
        options: [
            "Avec les props",
            "Avec les states",
            "Avec useState",
            "Avec useEffect"
        ],
        correctAnswer: 0,
        category: "basics"
    },
    {
        id: 8,
        question: "Quels types de composants peut-on créer en React?",
        options: [
            "Composants fonctionnels",
            "Composants de classe",
            "Les deux",
            "Aucun"
        ],
        correctAnswer: 2,
        category: "basics"
    },
    {
        id: 9,
        question: "Que fait la méthode render() dans un composant React de classe?",
        options: [
            "Elle retourne le JSX à afficher",
            "Elle est utilisée pour les événements",
            "Elle met à jour l'état",
            "Elle n'est pas utilisée dans un composant fonctionnel"
        ],
        correctAnswer: 0,
        category: "basics"
    },
    {
        id: 10,
        question: "Qu'est-ce que le Virtual DOM?",
        options: [
            "C'est une version réelle du DOM",
            "C'est une abstraction du DOM réel qui permet d'optimiser les mises à jour",
            "C'est un DOM uniquement en JavaScript",
            "C'est un DOM spécifique à React"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 11,
        question: "À quoi sert la clé (key) dans une liste d'éléments React?",
        options: [
            "Pour identifier chaque élément de manière unique lors du rendu",
            "Pour éviter les erreurs de syntaxe",
            "Pour appliquer des styles CSS",
            "Pour rendre les éléments interactifs"
        ],
        correctAnswer: 0,
        category: "basics"
    },
    {
        id: 12,
        question: "Quel est le rôle de ReactDOM?",
        options: [
            "Gérer les états de React",
            "Mettre à jour le DOM en fonction des changements d'état",
            "Rendre les composants React",
            "Gérer les événements"
        ],
        correctAnswer: 2,
        category: "basics"
    },
    {
        id: 13,
        question: "Comment déclare-t-on un composant fonctionnel en React?",
        options: [
            "function MyComponent() {}",
            "const MyComponent = () => {}",
            "class MyComponent extends React.Component {}",
            "Les deux premières"
        ],
        correctAnswer: 3,
        category: "basics"
    },
    {
        id: 14,
        question: "Comment faire un rendu conditionnel dans JSX?",
        options: [
            "Avec un if-else",
            "Avec un opérateur ternaire",
            "Avec un switch",
            "Avec useState"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 15,
        question: "Qu'est-ce qu'un hook dans React?",
        options: [
            "Une fonction qui permet de manipuler des objets",
            "Une fonctionnalité qui permet de gérer des états et effets dans les composants fonctionnels",
            "Un objet qui contient des props",
            "Un élément du DOM"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 16,
        question: "Qu'est-ce qu'une prop de type children?",
        options: [
            "Une prop qui permet de passer des données",
            "Une prop qui permet de passer un composant à un autre",
            "Une prop qui est utilisée pour l'édition de texte",
            "Aucune des réponses"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 17,
        question: "Dans un composant de classe, où stocke-t-on l'état?",
        options: [
            "Dans une variable normale",
            "Dans l'objet this.state",
            "Dans un hook useState",
            "Aucune des réponses"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 18,
        question: "Comment peut-on envoyer un événement dans React?",
        options: [
            "Avec une fonction de rappel",
            "Avec un gestionnaire d'événements",
            "Avec useState",
            "Avec useEffect"
        ],
        correctAnswer: 1,
        category: "basics"
    },
    {
        id: 19,
        question: "Qu'est-ce qu'un formulaire contrôlé en React?",
        options: [
            "Un formulaire dont les valeurs sont gérées par React",
            "Un formulaire dont les valeurs sont stockées dans une base de données",
            "Un formulaire dont les valeurs sont définies par JavaScript",
            "Un formulaire sans champ de saisie"
        ],
        correctAnswer: 0,
        category: "basics"
    },
    {
        id: 20,
        question: "Que signifie 'Unidirectionnal Data Flow' en React?",
        options: [
            "Les données ne peuvent circuler que dans un seul sens, du parent à l'enfant",
            "Les données circulent dans tous les sens",
            "Les données sont envoyées depuis la base de données",
            "Les données sont envoyées depuis l'enfant vers le parent"
        ],
        correctAnswer: 0,
        category: "basics"
    }
];
