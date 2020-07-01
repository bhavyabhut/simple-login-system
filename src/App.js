import React from "react";
import { Provider } from "react-redux";
import newStore from "./redux/Store/";
import Pages from "./components/Pages.js";

function App() {
	const store = newStore();

	return (
		<Provider store={store}>
			<div className="App">
				<Pages />
			</div>
		</Provider>
	);
}

export default App;
