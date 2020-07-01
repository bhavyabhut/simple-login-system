import { USER_SUCCESS, USER_FAIL, USER_POST_REQUEST } from "./userTypes.js";

const initialUserState = {
	loading: false,
	user: {},
	error: "",
};

const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case USER_POST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
				error: "",
			};
		case USER_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
