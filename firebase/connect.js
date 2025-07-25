// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
	getFirestore,
	setDoc,
	addDoc,
	collection,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
	getAuth,
	signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyBNkC9PmGpPGQtSpTn1hiIt9_KuQIBQErk",
	authDomain: "flabtresor.firebaseapp.com",
	projectId: "flabtresor",
	storageBucket: "flabtresor.firebasestorage.app",
	messagingSenderId: "255116874199",
	appId: "1:255116874199:web:025df135b00dfafc1bfb92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const login = () => {
	return signInWithEmailAndPassword(auth, "nico.personne@gmail.com", "toto123")
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			return user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};

const getIndice = () => {};

const saveIndice = async (data) => {
	try {
		const docRef = await addDoc(collection(db, "indices"), data);
		console.log("Document créé avec ID :", docRef.id);
	} catch (e) {
		console.error("Erreur lors de la sauvegarde :", e);
	}
};
window.login = login;
window.getIndice = getIndice;
window.saveIndice = saveIndice;
