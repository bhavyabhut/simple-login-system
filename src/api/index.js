import axios from "axios";

export const fetchEmailApi = async () => {
	const {
		data: { user },
	} = await axios.get(
		"https://run.mocky.io/v3/a704e123-2ac0-4976-b769-6e9adb8549c2"
	);
	return user;
};

export const postUserApi = async (users) => {
	const { data } = await axios.post(
		"https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9",
		users
	);
	return data;
};
