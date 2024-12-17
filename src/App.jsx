import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
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
            <Analytics/>
        </NextUIProvider>
    </ThemeProvider>
);

export default App;