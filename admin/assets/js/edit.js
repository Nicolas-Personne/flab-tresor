const actualList = document.querySelectorAll(".edit");
const form = document.querySelector("form");
const tipsLocal = document.querySelector("#tips-local");
const tipsPass = document.querySelector("#tips-pass");
const pass = document.querySelector("#pass");
const popUp = document.querySelector(".pop-up");
const closePop = document.querySelector(".close-pop-up");
let id;
const togglePopUp = () => {
	if (popUp.style.display === "none" || !popUp.style.display) {
		popUp.style.display = "block";
	} else {
		popUp.style.display = "none";
	}
};
const fillForm = (indice) => {
	tipsLocal.value = indice.indiceLocalisation;
	tipsPass.value = indice.indicePassword;
	pass.value = indice.pass;
};
actualList.forEach((button) => {
	button.addEventListener("click", (e) => {
		togglePopUp();
		id = e.target.id.split("-")[1];
		let indicesList = getIndice();
		let actualIndice = indicesList.filter((item) => {
			return item.id.toString() === id;
		});
		fillForm(actualIndice[0]);
	});
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let tipLocal = tipsLocal.value;
	let tipPass = tipsPass.value;
	let newPass = pass.value;
	let indicesList = getIndice();
	indicesList = indicesList.map((obj) => {
		return obj.id.toString() === id
			? {
					...obj,
					pass: newPass,
					indiceLocalisation: tipLocal,
					indicePassword: tipPass,
			  }
			: obj;
	});
	saveIndice(indicesList);
	togglePopUp();
	loadData();
});
closePop.addEventListener("click", () => {
	togglePopUp();
});
