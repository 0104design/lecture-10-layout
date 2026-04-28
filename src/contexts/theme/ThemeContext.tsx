import { createContext } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: VoidFunction;
};

// 1. Context 생성 : createContext(초기값) => 초기값은 null
export const ThemeContext = createContext<ThemeContextType | null>(null);


