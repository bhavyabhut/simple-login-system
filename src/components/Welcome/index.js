import React from "react";
import { useSelector } from "react-redux";

import styles from "./welcome.module.css";

const Welcome = () => {
	const email = useSelector((state) => state.login.email);
	return (
		<div className={styles.welcomeDiv}>
			<h1 className={styles.gradient_text}>Welcome</h1>
			<h3 className={styles.gradient_text}>{email}</h3>
		</div>
	);
};

export default Welcome;
