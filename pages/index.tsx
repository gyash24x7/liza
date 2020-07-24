import { Spinner } from "@zeit-ui/react";
import Router from "next/router";
import { Layout } from "../components/Layout";
import { NoteList } from "../components/NoteList";
import { useMeQuery } from "../graphql/generated";

const IndexPage = () => {
	const { data, error } = useMeQuery();

	if (error) return <div>{error.message}</div>;

	if (data) {
		if (!data.me) Router.push("/login");
		else
			return (
				<Layout me={data.me}>
					<NoteList />
				</Layout>
			);
	}

	return (
		<div className="spinner-wrapper">
			<Spinner size="large" />
		</div>
	);
};

export default IndexPage;
