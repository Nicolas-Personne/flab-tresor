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
	console.log(data);

	if (window.location.pathname === "/") {
		indices_info = data.indices.filter((value) => value.id == 1);
		const indice = document.querySelector(".indice");
		indice.classList.toggle("inactive");
	} else {
		let indice_number = window.location.pathname
			.split("/")[2]
			.split("_")[1]
			.split("")[3];
		indices_info = data.indices.filter((value) => value.id == indice_number);
	}
	if (title) {
		title.textContent += indices_info[0].id;
	}
	let p1 = document.createElement("p");
	let p2 = document.createElement("p");
	p1.textContent = indices_info[0].indice;
	p2.textContent = indices_info[0].question;
	displayLocalisation.appendChild(p1);
	displayPassword.appendChild(p2);
});
