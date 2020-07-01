import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { emailRequest, emailFail, userPost, userFail } from "../../redux/";
import { validateEmail, checkPassword } from "../../helpers/";

import styles from "./Login.module.css";

const LoginButton = ({ email, password }) => {
	const login = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const loginHandler = async () => {
		if (!login.success) {
			if (validateEmail(email)) dispatch(emailRequest());
			else dispatch(emailFail("Please Enter Proper Email "));
		} else {
			if (checkPassword(password)) {
				dispatch(userPost());
			} else {
				dispatch(userFail("Password not stronge"));
			}
		}
	};
	return (
		<Button className={styles.btn} onClick={loginHandler}>
			Login
		</Button>
	);
};

export default LoginButton;
