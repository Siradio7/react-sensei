import { basicQuestions } from './basics';
import { advancedQuestions } from './advanced';
import { hooksQuestions } from './hooks';
import { patternQuestions } from './patterns';

export const questions = [
    ...basicQuestions,
    ...advancedQuestions,
    ...hooksQuestions,
    ...patternQuestions
];

export const getRandomQuestions = (numberOfQuestions = 10) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numberOfQuestions);
};

// Fonction utilitaire pour obtenir les statistiques des questions
export const getQuestionStats = () => {
    const categories = {
        basics: basicQuestions.length,
        advanced: advancedQuestions.length,
        hooks: hooksQuestions.length,
        patterns: patternQuestions.length
    };

    return {
        total: questions.length,
        categories
    };
};