const listContainer = document.querySelector(".list-indices");
const secretKey = "GHBJnzaekcyuty7";

const json = [
	{
		id: 0,
		pass: "toto",
		indiceLocalisation:
			"Pour trouver le prochain indice, vous devrez vous rendre ...",
		indicePassword:
			"Le mot de passe qui vous premettra d'accèder à l'incide suivane est ...",
	},
	{
		id: 1,
		pass: "toto",
		indiceLocalisation:
			"Pour trouver le prochain indice, vous devrez vous rendre ...",
		indicePassword:
			"Le mot de passe qui vous premettra d'accèder à l'incide suivane est ...",
	},
	{
		id: 2,
		pass: "tata",
		indiceLocalisation:
			"Pour trouver le prochain indice, vous devrez vous rendre ...",
		indicePassword:
			"Le mot de passe qui vous premettra d'accèder à l'incide suivane est ...",
	},
	{
		id: 3,
		pass: "tutu",
		indiceLocalisation:
			"Pour trouver le prochain indice, vous devrez vous rendre ...",
		indicePassword:
			"Le mot de passe qui vous premettra d'accèder à l'incide suivane est ...",
	},
	{
		id: 4,
		pass: "titi",
		indiceLocalisation:
			"Pour trouver le prochain indice, vous devrez vous rendre ...",
		indicePassword:
			"Le mot de passe qui vous premettra d'accèder à l'incide suivane est ...",
	},
	{
		id: 5,
		pass: "tptp",
		indiceLocalisation:
			"Pour trouver le prochain indice, vous devrez vous rendre ...",
		indicePassword:
			"Le mot de passe qui vous premettra d'accèder à l'incide suivane est ...",
	},
];

// 🔐 Pour stocker les indices chiffrés
function saveIndice(indice) {
	const jsonString = JSON.stringify(indice); // convertit en chaîne
	const encrypted = CryptoJS.AES.encrypt(jsonString, secretKey).toString();
	localStorage.setItem("indices", encrypted);
}

// 🔓 Pour récupérer et déchiffrer les indices
function getIndice() {
	const encrypted = localStorage.getItem("indices");
	if (!encrypted) return null;

	try {
		const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey);
		const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
		return JSON.parse(jsonString); // retransforme en objet JS
	} catch (e) {
		console.error("Erreur de déchiffrement :", e);
		return null;
	}
}
if (!getIndice()) {
	saveIndice(json);
}
const loadData = () => {
	listContainer.innerHTML = "";
	const indices = getIndice();
	if (indices && listContainer) {
		indices.forEach((item) => {
			const el = document.createElement("div");
			el.innerHTML = `
		<h3>Indice ${item.id}</h3>
		<p><strong>Localisation :</strong> ${item.indiceLocalisation}</p>
		<p><strong>Mot de passe suivant :</strong> ${item.indicePassword}</p>
      <button class="edit" id="indice-${item.id}">Modifier</button>
	  `;
			listContainer.appendChild(el);
		});
	}
};
loadData();
