import React from "react";
import { useSelector } from "react-redux";

import Login from "./Login/";
import Welcome from "./Welcome";

const Pages = () => {
	const login = useSelector((state) => state.page.login);
	return <>{login ? <Login /> : <Welcome />}</>;
};

export default Pages;
