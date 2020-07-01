import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../rootReducer.js";
import rootSaga from "../../saga/rootSaga.js";

const sagaMiddleware = createSagaMiddleware();

const newStore = () => {
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__() 
		)
	);
	sagaMiddleware.run(rootSaga);
	return store;
};
export default newStore;
