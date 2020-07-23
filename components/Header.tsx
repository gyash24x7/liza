import { Select, Spacer, User, useTheme } from "@zeit-ui/react";
import MoonIcon from "@zeit-ui/react-icons/moon";
import SunIcon from "@zeit-ui/react-icons/sun";
import { CSSProperties, Fragment } from "react";
import { useMeContext, useThemeContext } from "../utils/context";

export const Header = () => {
	const { palette } = useTheme();
	const { theme, setTheme } = useThemeContext()!;
	const { avatar, name } = useMeContext()!;

	const styles: Record<string, CSSProperties> = {
		wrapper: {
			width: "calc(100vw - 40px)",
			padding: "0px 20px",
			display: "flex",
			justifyContent: "space-between",
			height: "70px",
			alignItems: "center",
			borderBottom: `1px solid ${palette.accents_2}`
		},

		appName: {
			fontFamily: `"Raleway" sans-serif`,
			fontSize: 24
		},

		themeSelect: { minWidth: "unset" },
		optionContainer: { display: "flex", alignItems: "center" },
		optionName: { marginLeft: 10 },
		rightSection: { display: "flex", alignItems: "center" }
	};

	return (
		<Fragment>
			<div style={styles.wrapper}>
				<div style={styles.appName}>LIZA</div>
				<div style={styles.rightSection}>
					<Select
						pure
						size="small"
						style={styles.themeSelect}
						value={theme}
						onChange={(val) => setTheme(typeof val === "string" ? val : val[0])}
					>
						<Select.Option value="light">
							<div style={styles.optionContainer}>
								<SunIcon size={16} />
								<div style={styles.optionName}>Light</div>
							</div>
						</Select.Option>
						<Select.Option value="dark">
							<div style={styles.optionContainer}>
								<MoonIcon size={16} />
								<div style={styles.optionName}>Dark</div>
							</div>
						</Select.Option>
					</Select>
					<Spacer x={1} />
					<User src={avatar} name={name} />
				</div>
			</div>
		</Fragment>
	);
};
