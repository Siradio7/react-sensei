import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Question = ({
                      question,
                      options,
                      onAnswer,
                      isAnswered,
                      correctAnswer,
                      selectedAnswer,
                  }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto p-6"
        >
            <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
                {question}
            </h2>
            <div className="space-y-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => !isAnswered && onAnswer(index)}
                        className={`w-full p-4 rounded-lg text-left transition-all transform duration-300 ease-in-out hover:scale-[1.02] shadow-sm ${
                            isAnswered
                                ? index === correctAnswer
                                    ? "bg-green-200 border-2 border-green-600 text-green-800"
                                    : index === selectedAnswer
                                        ? "bg-red-200 border-2 border-red-600 text-red-800"
                                        : "bg-gray-100 border-2 border-gray-300 text-gray-700"
                                : "bg-gray-50 border-2 border-gray-200 hover:border-primary-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:border-primary-500"
                        }`}
                        disabled={isAnswered}
                    >
                        <span className="font-medium">{option}</span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

Question.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    onAnswer: PropTypes.func.isRequired,
    isAnswered: PropTypes.bool,
    correctAnswer: PropTypes.number,
    selectedAnswer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([null]),
    ])
};

export default Question;
