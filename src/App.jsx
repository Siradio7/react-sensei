import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home.jsx";
import {ThemeToggle} from "./components/ThemeToggle.jsx";

const App = () => (
    <ThemeProvider attribute="class" defaultTheme="dark">
        <NextUIProvider>
            <ThemeToggle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </NextUIProvider>
    </ThemeProvider>
);

export default App;