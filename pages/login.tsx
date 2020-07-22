import { Card, Grid } from "@zeit-ui/react";
import styles from "../styles/login.module.scss";

export default () => {
	return (
		<Grid.Container justify="center" style={{ height: "100vh" }}>
			<Grid xs={24} sm={18} md={12} lg={9} className={styles.grid}>
				<Card className={styles.card}></Card>
			</Grid>
		</Grid.Container>
	);
};
