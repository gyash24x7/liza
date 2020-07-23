import {
	Button,
	Card,
	Grid,
	Input,
	Spacer,
	Spinner,
	Text
} from "@zeit-ui/react";
import LockIcon from "@zeit-ui/react-icons/lock";
import MailIcon from "@zeit-ui/react-icons/mail";
import UserIcon from "@zeit-ui/react-icons/user";
import Link from "next/link";
import Router from "next/router";
import { ChangeEvent, useState } from "react";
import { useMeQuery, useSignupMutation } from "../graphql/generated";
import styles from "../styles/login.module.scss";

const emailRegex = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export default () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = () => {
		let message = "";
		switch (true) {
			case !name:
				message = "Name is required!";
				break;
			case !email:
				message = "Email is required!";
				break;
			case !emailRegex.test(email):
				message = "Please Enter a Valid Email!";
				break;
			case !password:
				message = "Password is required!";
				break;
			case password.length < 8:
				message = "Password should be 8 characters or more!";
				break;
		}

		if (!message) signup();
		setErrorMsg(message);
	};

	const handleChange = (field: "name" | "email" | "password") => (
		e: ChangeEvent<HTMLInputElement>
	) => {
		e.persist();
		switch (field) {
			case "email":
				setEmail(e.target.value);
				break;
			case "name":
				setName(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;
		}
		setErrorMsg("");
	};

	const { data } = useMeQuery();
	const [signup] = useSignupMutation({
		variables: { name, email, password },
		onCompleted({ signup }) {
			if (signup) {
				localStorage.setItem("authToken", signup);
				window.location.pathname = "/";
			}
		}
	});

	if (data) {
		if (data.me) Router.push("/");
		else
			return (
				<Grid.Container
					justify="center"
					style={{ height: "100vh" }}
					alignItems="center"
				>
					<Grid xs={24} sm={18} md={12} lg={9} className={styles.grid}>
						<Card className={styles.card}>
							<Text h3 className={styles.title}>
								SIGN UP
							</Text>
							<Spacer y={2} />
							<Input
								placeholder="Name"
								width="100%"
								iconRight={<UserIcon />}
								value={name}
								onChange={handleChange("name")}
							/>
							<Spacer y={0.5} />
							<Input
								placeholder="Email"
								width="100%"
								type="email"
								iconRight={<MailIcon />}
								value={email}
								onChange={handleChange("email")}
							/>
							<Spacer y={0.5} />
							<Input
								placeholder="Password"
								width="100%"
								type="password"
								iconRight={<LockIcon />}
								value={password}
								onChange={handleChange("password")}
							/>
							<Spacer y={0.5} />
							<Button
								ghost
								type="success"
								className={styles.button}
								onClick={handleSubmit}
							>
								Submit
							</Button>
							<Text p type="error" small className={styles.error}>
								{errorMsg}
							</Text>
							<Card.Footer className={styles.cardFooter}>
								<Text>Already have an account?</Text>
								<Link href="/login">
									<a>Login</a>
								</Link>
							</Card.Footer>
						</Card>
					</Grid>
				</Grid.Container>
			);
	}

	return <Spinner />;
};
