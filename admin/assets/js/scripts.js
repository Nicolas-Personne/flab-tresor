const formAdd = document.querySelector(".form-add");
const formLogin = document.querySelector("#login-admin-form");

const tipsLocal = document.querySelector("#tips-local");
const tipsPass = document.querySelector("#tips-pass");
const passIndice = document.querySelector("#pass");
const hiddenInput = document.querySelector("#hidden");

const popUp = document.querySelector(".pop-up");
const closePop = document.querySelector(".close-pop-up");
const buttonAdd = document.querySelector("#add-button");

const indicesList = document.querySelector(".list-indices");
const loginForm = document.querySelector("#login-admin");
const connected = document.querySelector("#connected-admin");
const formAdmin = document.querySelector("#login-admin-form");

const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

let id = null;
let indices = [];

const checkLog = () => {
	let token = localStorage.getItem("token");
	if (!token) {
		return false;
	} else {
		return true;
	}
};

const loadForm = () => {
	loginForm.style.display = "flex";
	connected.style.display = "none";
};

const loadData = async () => {
	let data = await getData();
	indices = data.indices;
	connected.style.display = "flex";
	loginForm.style.display = "none";
};
const fillList = async () => {
	await loadData();
	indicesList.innerHTML = "";
	indices.forEach((item, index) => {
		let div = document.createElement("div");
		div.addEventListener("click", () => {
			hiddenInput.value = "true";
			fillForm({
				indiceLocalisation: item.indice,
				indicePassword: item.question,
				pass: item.response,
			});
			id = item.id;
		});
		div.classList.add("tips");
		let h1 = document.createElement("h1");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let p3 = document.createElement("p");
		h1.innerText = `QR Code n°${index}`;
		p1.innerText = `Réponse : ${item.response}`;
		p2.innerText = `Question pour débloquer le prochain QR code : ${item.question}`;
		p3.innerText = `Indice pour trouver le prochain QR code : ${item.indice}`;
		div.appendChild(h1);
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(p3);
		indicesList.appendChild(div);
	});
};

if (checkLog()) {
	fillList();
} else {
	loadForm();
}

const togglePopUp = () => {
	if (popUp.style.display === "none" || !popUp.style.display) {
		popUp.style.display = "flex";
	} else {
		popUp.style.display = "none";
	}
};
buttonAdd.addEventListener("click", () => {
	togglePopUp();
	hiddenInput.value = "";
	tipsLocal.value = "";
	tipsPass.value = "";
	pass.value = "";
});
closePop.addEventListener("click", () => {
	togglePopUp();
});

const fillForm = (indice) => {
	tipsLocal.value = indice.indiceLocalisation;
	tipsPass.value = indice.indicePassword;
	pass.value = indice.pass;
	togglePopUp();
};

formLogin.addEventListener("submit", (e) => {
	e.preventDefault();

	email = emailInput.value;
	password = passInput.value;
	let data = {
		email: email,
		password: password,
	};
	if (login(data)) {
		loadData();
	}
});
formAdd.addEventListener("submit", async (e) => {
	e.preventDefault();

	let edit = hiddenInput.value;

	let data = {
		question: tipsPass.value,
		response: passIndice.value,
		indice: tipsLocal.value,
	};
	let res;
	if (edit) {
		res = await editData(data, id);
	} else {
		res = await sendData(data);
	}

	if (res.status === 201 || res.indices[0]) {
		togglePopUp();
		fillList();
	}
});
