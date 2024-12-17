import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Question from "./Question";
import Result from "./Result";
import { getRandomQuestions } from "../data/questions";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const questions = getRandomQuestions(5)

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (selectedIndex) => {
        setSelectedAnswer(selectedIndex);
        setIsAnswered(true);

        if (selectedIndex === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        setTimeout(() => {
            setSelectedAnswer(null);
            setIsAnswered(false);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                {/* Conteneur principal centré */}
                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-10 rounded-3xl shadow-xl transition-all duration-500">

                    {/* Barre de progression */}
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mb-8 shadow-inner">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500 shadow-lg"
                            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>

                    {/* Indicateur de question */}
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                        Question {currentQuestionIndex + 1} sur {questions.length}
                    </div>

                    {/* Questions ou Résultats */}
                    {!showResult ? (
                        <CSSTransition
                            in={true}
                            timeout={500}
                            classNames="quiz"
                            unmountOnExit
                        >
                            <Question
                                question={currentQuestion.question}
                                options={currentQuestion.options}
                                onAnswer={handleAnswer}
                                isAnswered={isAnswered}
                                correctAnswer={currentQuestion.correctAnswer}
                                selectedAnswer={selectedAnswer}
                            />
                        </CSSTransition>
                    ) : (
                        <CSSTransition
                            in={showResult}
                            timeout={500}
                            classNames="result"
                            unmountOnExit
                        >
                            <Result
                                score={score}
                                totalQuestions={questions.length}
                                onRestart={handleRestart}
                            />
                        </CSSTransition>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
