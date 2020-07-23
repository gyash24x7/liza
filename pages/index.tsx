import { Spinner } from "@zeit-ui/react";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout";
import { useMeQuery } from "../graphql/generated";

const IndexPage = () => {
	const { data, error } = useMeQuery();

	if (error) return <div>{error.message}</div>;

	if (data) {
		if (!data.me) Router.push("/login");
		else
			return (
				<Layout title="Home | Next.js + TypeScript Example">
					<h1>Hello Next.js 👋</h1>
					<h2>{data.me.name}</h2>
					<p>
						<Link href="/about">
							<a>About</a>
						</Link>
					</p>
					<button
						onClick={() => {
							localStorage.clear();
							window.location.pathname = "/login";
						}}
					>
						LOGOUT
					</button>
				</Layout>
			);
	}

	return (
		<div>
			<Spinner size="large" />
		</div>
	);
};

export default IndexPage;
