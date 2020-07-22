import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import { AppProps } from "next/app";
import { useApollo } from "../graphql/apollo";

export default ({ Component, pageProps }: AppProps) => {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<ZeitProvider>
			<CssBaseline />
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ZeitProvider>
	);
};
