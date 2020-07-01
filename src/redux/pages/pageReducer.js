import { WELCOME_PAGE } from "./pageTypes.js";

const initialPage = {
	login: true,
	welcome: false,
};

const pageReducer = (state = initialPage, action) => {
	switch (action.type) {
		case WELCOME_PAGE:
			return {
				...state,
				login: false,
				welcome: true,
			};
		default:
			return state;
	}
};

export default pageReducer;
