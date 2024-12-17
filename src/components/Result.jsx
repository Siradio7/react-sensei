import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const Result = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / totalQuestions) * 100;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 max-w-md mx-auto"
        >
            <h2 className="text-3xl font-bold mb-4">Quiz Terminé!</h2>
            <div className="mb-8">
                <p className="text-xl mb-2">Votre score:</p>
                <p className="text-4xl font-bold text-primary">
                    {score} / {totalQuestions}
                </p>
                <p className="text-lg text-gray-600 mt-2">({percentage}%)</p>
            </div>
            <div className="mb-8">
                {percentage === 100 && (
                    <p className="text-lg text-green-600">Parfait! Vous êtes un expert React!</p>
                )}
                {percentage >= 70 && percentage < 100 && (
                    <p className="text-lg text-primary">Très bien! Continuez comme ça!</p>
                )}
                {percentage < 70 && (
                    <p className="text-lg text-primary/80">Continuez à pratiquer pour vous améliorer!</p>
                )}
            </div>
            <Button
                onPress={onRestart}
                className="px-8 py-4 text-lg"
            >
                Recommencer le Quiz
            </Button>
        </motion.div>
    );
};

Result.propTypes = {
    score: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
}

export default Result;