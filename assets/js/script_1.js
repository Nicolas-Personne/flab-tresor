const rulesButton = document.querySelector("#rules-displayer");
const rulesContainer = document.querySelector("#rules");
const ul = document.querySelector("#rules ul");
rulesButton.addEventListener("click", () => {
	let isActive = rulesContainer.style.width === "100%";
	if (isActive) {
		rulesContainer.style.width = "0%";
		ul.style.visibility = "hidden";
	} else {
		rulesContainer.style.width = "100%";
		ul.style.visibility = "visible";
	}
});

// const indice = document.querySelector(".indice");
// const input = document.querySelector("#mdp");
// const button = document.querySelector("#send-mdp");
// const error = document.querySelector("#error");

// button.addEventListener("click", () => {
// 	let value = input.value;
// 	if (value.toLowerCase() === "toto") {
// 		indice.classList.toggle("inactive");
// 	} else {
// 		error.textContent = "Oups mauvais mot de passe";
// 	}
// });
