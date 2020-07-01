import { combineReducers } from "redux";

import loginReducer from "./login/loginReducer.js";
import userReducer from "./user/userReducer.js";
import pageReducer from "./pages/pageReducer.js";

const rootReducer = combineReducers({
	login: loginReducer,
	user: userReducer,
	page: pageReducer,
});

export default rootReducer;
