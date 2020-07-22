import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject
} from "@apollo/client";
import { useMemo } from "react";

let client: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: typeof window !== "undefined",
		link: new HttpLink({ uri: "http://localhost:3000/api/graphql" }),
		cache: new InMemoryCache()
	});
};

export const initializeApollo = (
	initialState: NormalizedCacheObject | null = null
) => {
	const _client = client ?? createApolloClient();
	if (initialState) {
		_client.cache.restore(initialState);
	}

	if (typeof window === "undefined") return _client;
	if (!client) client = _client;

	return _client;
};

export const useApollo = (initialState: NormalizedCacheObject | null) => {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
};
