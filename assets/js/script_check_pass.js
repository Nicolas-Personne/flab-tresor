const indice = document.querySelector(".indice");
const input = document.querySelector("#mdp");
const button = document.querySelector("#send-mdp");
const error = document.querySelector("#error");
if (button) {
	button.addEventListener("click", () => {
		let value = input.value;
		if (value.toLowerCase() === indices_info[0].pass) {
			indice.classList.toggle("inactive");
		} else {
			error.textContent =
				"Oups mauvais mot de passe ! Relisez bien l'indice précédent !";
		}
	});
}
