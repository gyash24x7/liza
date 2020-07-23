import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import { AppProps } from "next/app";
import { useState } from "react";
import { useApollo } from "../graphql/apollo";
import "../styles/global.scss";
import { ThemeContext } from "../utils/context";

export default ({ Component, pageProps }: AppProps) => {
	const client = useApollo(pageProps.initialApolloState);
	const [theme, setTheme] = useState(
		(typeof window !== "undefined" && localStorage.getItem("theme")) || "dark"
	);
	return (
		<ZeitProvider theme={{ type: theme }}>
			<CssBaseline />
			<ApolloProvider client={client}>
				<ThemeContext.Provider value={{ theme, setTheme }}>
					<Component {...pageProps} />
				</ThemeContext.Provider>
			</ApolloProvider>
		</ZeitProvider>
	);
};
