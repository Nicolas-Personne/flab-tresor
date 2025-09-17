const indice = document.querySelector(".indice");
const formIndice = document.querySelector("#form-indice");
const input = document.querySelector("#mdp");
const button = document.querySelector("#send-mdp");
const error = document.querySelector("#error");
if (button) {
	button.addEventListener("click", () => {
		let value = input.value.trim();

		if (value.toLowerCase() === indices_info[0].response.toLowerCase()) {
			indice.classList.toggle("inactive");
			formIndice.style.display = "none";
		} else {
			error.textContent =
				"Oups mauvais mot de passe ! Relisez bien l'indice précédent !";
		}
	});
}
