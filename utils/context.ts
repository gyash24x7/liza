import { createContext, useContext } from "react";

interface IThemeContext {
	theme: string;
	setTheme: (val: string) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useThemeContext = () => useContext(ThemeContext);
