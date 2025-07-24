let data = [];
let indices_info = [];
document.addEventListener("DOMContentLoaded", async () => {
	let title = document.querySelector("main div h2");
	let displayLocalisation = document.querySelector(
		"article.indice p:nth-child(1)"
	);

	let displayPassword = document.querySelector("article.indice p:nth-child(2)");
	const loadData = async () => {
		data = await fetch("http://127.0.0.1:5500/assets/data/data.json");
		return data.json();
	};
	let isData = getIndice();

	data = !isData ? await loadData() : isData;
	if (window.location.pathname === "/") {
		indices_info = data.filter((value) => value.id == 0);
		const indice = document.querySelector(".indice");
		indice.classList.toggle("inactive");
	} else {
		let indice_number = window.location.pathname
			.split("/")[2]
			.split("_")[1]
			.split("")[3];
		indices_info = data.filter((value) => value.id == indice_number);
	}
	if (title) {
		title.textContent += indices_info[0].id;
	}

	displayLocalisation.textContent = indices_info[0].indiceLocalisation;
	displayPassword.textContent = indices_info[0].indicePassword;
});
