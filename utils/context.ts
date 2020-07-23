import { createContext, useContext } from "react";
import { MeQuery } from "../graphql/generated";

interface IThemeContext {
	theme: string;
	setTheme: (val: string) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useThemeContext = () => useContext(ThemeContext);

export const MeContext = createContext<MeQuery["me"] | null>(null);

export const useMeContext = () => useContext(MeContext);
