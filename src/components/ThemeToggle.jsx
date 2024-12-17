import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {Button} from "@nextui-org/react"
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Attendre que le composant soit monté pour éviter les problèmes d'hydratation
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            size="icon"
            onPress={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed top-6 right-6 z-50 border-none bg-gray-200 dark:bg-gray-800 shadow-md rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
            isIconOnly={true}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "dark" ? (
                <Sun
                    className="h-6 w-6 text-yellow-500 rotate-90 scale-0 opacity-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100"
                />
            ) : (
                <Moon
                    className="h-6 w-6 text-gray-700 rotate-0 scale-100 opacity-100 transition-transform duration-500 ease-in-out dark:rotate-90 dark:scale-0 dark:opacity-0"
                />
            )}
        </Button>
    );
}