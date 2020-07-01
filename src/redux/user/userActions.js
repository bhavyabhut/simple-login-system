import { USER_SUCCESS, USER_FAIL, USER_POST_REQUEST } from "./userTypes.js";

export const userPost = () => ({
	type: USER_POST_REQUEST,
});

export const userSuccess = (data) => ({
	type: USER_SUCCESS,
	payload: data,
});

export const userFail = (error) => ({
	type: USER_FAIL,
	payload: error,
});
