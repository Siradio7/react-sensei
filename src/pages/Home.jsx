import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";
import { ThemeToggle } from "../components/ThemeToggle";
import Quiz from "../components/Quiz";

const Home = () => {
    const [started, setStarted] = useState(false);

    if (!started) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
                <ThemeToggle />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
                >
                    <div className="max-w-2xl w-full space-y-8 p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl">
                        <motion.h1
                            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            React Sensei
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-md mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Testez vos connaissances sur React avec ce quiz interactif ! <br /> <br /> Découvrez 50
                            questions, des bases aux concepts avancés.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                onPress={() => setStarted(true)}
                                className="px-8 py-3 text-white font-medium rounded-lg text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 shadow-lg"
                            >
                                Commencer
                            </Button>


                        </motion.div>
                        <motion.div
                            className="mt-6 text-sm text-gray-500 dark:text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p>20 questions aléatoires • Réponses instantanées • Score final</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <AnimatePresence>
            {!started && (
                <motion.div
                    key="start-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* L'écran d'accueil ici */}
                </motion.div>
            )}
            {started && (
                <motion.div
                    key="quiz-screen"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Quiz />
                </motion.div>
            )}
        </AnimatePresence>

    );
};

export default Home;
