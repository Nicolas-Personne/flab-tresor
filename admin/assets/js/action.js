const form = document.querySelector("form");
const tipsLocal = document.querySelector("#tips-local");
const tipsPass = document.querySelector("#tips-pass");
const pass = document.querySelector("#pass");
const popUp = document.querySelector(".pop-up");
const closePop = document.querySelector(".close-pop-up");
const buttonAdd = document.querySelector("#add-button");
let id;

const togglePopUp = () => {
	if (popUp.style.display === "none" || !popUp.style.display) {
		popUp.style.display = "flex";
	} else {
		popUp.style.display = "none";
	}
};
const fillForm = (indice) => {
	tipsLocal.value = indice.indiceLocalisation;
	tipsPass.value = indice.indicePassword;
	pass.value = indice.pass;
};
buttonAdd.addEventListener("click", () => {
	togglePopUp();
});
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let indiceList = getIndice();
	let id = indiceList ? indiceList[indiceList.length - 1].id + 1 : 1;
	let data = {
		id: id,
		indiceLocalisation: tipsLocal.value,
		indicePassword: tipsPass.value,
		pass: pass.value,
	};
	login().then((user) => {
		console.log("Connecté en tant que :", user.email);
		saveIndice(data);
	});
	togglePopUp();
	// loadData();
});
closePop.addEventListener("click", () => {
	togglePopUp();
});
