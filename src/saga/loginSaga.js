import { put, select } from "redux-saga/effects";

import { emailSuccess, emailFail } from "../redux/";
import { fetchEmailApi } from "../api/";

function* loginSaga() {
	const { login } = yield select();
	const user = yield fetchEmailApi();
	if (login.email === user.email) {
		yield put(emailSuccess(user.email));
	} else {
		yield put(emailFail("Not in resourse"));
	}
}

export default loginSaga;
