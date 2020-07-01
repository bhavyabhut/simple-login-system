import { put, select } from "redux-saga/effects";

import { welcomePage, userSuccess, userFail } from "../redux/";
import { postUserApi } from "../api/";

function* userSaga() {
	const { login } = yield select();
	const data = yield postUserApi({
		email: login.email,
		password: login.password,
	});
	if (data.loginResult === "SUCCESS") {
		yield put(userSuccess(data.user));
		yield put(welcomePage());
	} else yield put(userFail("Something went worong please try again"));
}

export default userSaga;
