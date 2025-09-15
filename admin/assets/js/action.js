const BASE_URL = "https://flab-tresor-api.onrender.com/";
const getData = async () => {
	let response = await fetch(`${BASE_URL}indices`);
	if (response.status === 403 || response.status === 401) {
		localStorage.removeItem("token");
	}
	let data = await response.json();
	data.indices.sort((a, b) => a.id - b.id);
	return data;
};

const sendData = async (data) => {
	let token = localStorage.getItem("token");
	let response = await fetch(`${BASE_URL}indices`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	});
	if (response.status === 403 || response.status === 401) {
		localStorage.removeItem("token");
	}
	return await response.json();
};

const editData = async (data, id) => {
	let token = localStorage.getItem("token");
	let response = await fetch(`${BASE_URL}indices/${id}`, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	});

	if (response.status === 403 || response.status === 401) {
		localStorage.removeItem("token");
	}
	return await response.json();
};

const login = async (data) => {
	let response = await fetch(`${BASE_URL}connect-admin`, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify(data),
	});
	let responseData = await response.json();
	if (responseData.token) {
		localStorage.setItem("token", responseData.token);
		return true;
	} else {
		return false;
	}
};
