import { takeLatest } from "redux-saga/effects";

import userSaga from "./userSage";
import loginSaga from "./loginSaga";

import { USER_POST_REQUEST } from "../redux/user/userTypes";
import { FETCH_EMAIL_REQUEST } from "../redux/login/loginTypes";

function* rootSaga() {
	yield takeLatest(FETCH_EMAIL_REQUEST, loginSaga);
	yield takeLatest(USER_POST_REQUEST, userSaga);
}

export default rootSaga;
