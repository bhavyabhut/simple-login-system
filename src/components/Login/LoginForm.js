import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginButton from "./LoginButton.js";
import { setEmail, setPassword } from "../../redux/";
import {
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	FormText,
} from "reactstrap";

import styles from "./Login.module.css";

const LoginForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const login = useSelector((state) => state.login);
	const emailController = (event) => {
		dispatch(setEmail(event.target.value));
	};
	const passwordController = (event) => {
		dispatch(setPassword(event.target.value));
	};
	return (
		<>
			<Form className={styles.form}>
				<FormGroup>
					<Label for="Email">Email</Label>
					<Input
						id="Email"
						name="email"
						invalid={login.error ? true : false}
						valid={login.success}
						placeholder="enter email"
						value={login.email}
						onChange={emailController}
					/>
					<FormFeedback invalid="true">{login.error}</FormFeedback>

					<FormText>Example: mockUser@glabbr.com</FormText>
				</FormGroup>
				{login.success ? (
					<FormGroup>
						<Label for="Password">Password</Label>
						<Input
							type="password"
							value={login.password}
							onChange={passwordController}
							placeholder="enter password"
							id="Password"
							invalid={user.error ? true : false}
						/>
						<FormFeedback invalid="true">{user.error}</FormFeedback>
						<FormText>
							Atleast One capital letter,Special symbol and Number
						</FormText>
					</FormGroup>
				) : null}
			</Form>
			<LoginButton email={login.email} password={login.password} />
		</>
	);
};

export default LoginForm;
