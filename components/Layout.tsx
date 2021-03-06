import { ReactNode } from "react";
import { MeQuery } from "../graphql/generated";
import { MeContext } from "../utils/context";
import { Header } from "./Header";

interface LayoutProps {
	children: ReactNode;
	me: MeQuery["me"];
}

export const Layout = (props: LayoutProps) => {
	return (
		<MeContext.Provider value={props.me}>
			<Header />
			<div style={{ marginTop: 70 }}>{props.children}</div>
		</MeContext.Provider>
	);
};
