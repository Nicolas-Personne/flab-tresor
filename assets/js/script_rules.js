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
