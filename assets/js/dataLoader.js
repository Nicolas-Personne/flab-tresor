let data = [];
let indices_info = [];
document.addEventListener("DOMContentLoaded", async () => {
	let title = document.querySelector("main div h2");
	let displayLocalisation = document.querySelector(
		"article.indice ul li:nth-child(1)"
	);

	let displayPassword = document.querySelector(
		"article.indice ul li:nth-child(2)"
	);

	let data = await getData();
	let indice_number = 0;
	if (window.location.pathname === "/flab-tresor/") {
		
		if (data) {
			indices_info = data.indices.filter((value) => value.id == 1);
			const indice = document.querySelector(".indice");
			indice.classList.toggle("inactive");
		}
	} else {
		let pathArray = window.location.pathname.split("/");
		indice_number = pathArray[pathArray.length - 1].split("_")[1].split("")[3];
		let indiceToFind = Number(indice_number) + 1;
		if (data) {
			indices_info = data.indices.filter((value) => value.id === indiceToFind);
		}
	}
	if (title) {
		title.textContent += indice_number;
	}

	let p1 = document.createElement("p");
	p1.style.fontWeight = 600;
	let p2 = document.createElement("p");
	p1.textContent += indices_info[0].indice;
	p2.textContent += indices_info[0].question;
	displayLocalisation.appendChild(p1);
	displayPassword.appendChild(p2);
});
