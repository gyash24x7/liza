import { Fragment, ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
	return (
		<Fragment>
			<Header />
			{props.children}
		</Fragment>
	);
};
