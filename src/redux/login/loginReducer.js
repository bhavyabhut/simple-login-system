import {
	FETCH_EMAIL_SUCCESS,
	FETCH_EMAIL_REQUEST,
	FETCH_EMAIL_FAIL,
	SET_EMAIL,
	SET_PASSWORD,
} from "./loginTypes.js";

const initialLoginState = {
	loading: false,
	success: false,
	email: "",
	password: "",
	error: "",
};

const loginReducer = (state = initialLoginState, action) => {
	switch (action.type) {
		case FETCH_EMAIL_REQUEST:
			return { ...state, loading: true };
		case FETCH_EMAIL_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				email: action.payload,
				error: "",
			};
		case FETCH_EMAIL_FAIL:
			return { ...state, loading: false, error: action.payload };
		case SET_EMAIL:
			return { ...state, email: action.payload };
		case SET_PASSWORD: {
			return { ...state, password: action.payload };
		}
		default:
			return state;
	}
};

export default loginReducer;
