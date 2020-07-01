import {
	FETCH_EMAIL_REQUEST,
	FETCH_EMAIL_SUCCESS,
	FETCH_EMAIL_FAIL,
	SET_EMAIL,
	SET_PASSWORD,
} from "./loginTypes.js";

export const emailRequest = () => ({
	type: FETCH_EMAIL_REQUEST,
});

export const emailSuccess = (email) => ({
	type: FETCH_EMAIL_SUCCESS,
	payload: email,
});

export const emailFail = (error) => ({
	type: FETCH_EMAIL_FAIL,
	payload: error,
});

export const setEmail = (email) => ({
	type: SET_EMAIL,
	payload: email,
});

export const setPassword = (password) => ({
	type: SET_PASSWORD,
	payload: password,
});
