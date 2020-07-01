import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../Spinner/";
import LoginForm from "./LoginForm.js";

import styles from "./Login.module.css";

const Login = () => {
	const user = useSelector((state) => state.user);
	const login = useSelector((state) => state.login);
	return (
		<div className={styles.loginPage}>
			<div className={styles.loginContainer}>
				<LoginForm />
				{user.loading || login.loading ? <Spinner /> : null}
			</div>
		</div>
	);
};

export default Login;
