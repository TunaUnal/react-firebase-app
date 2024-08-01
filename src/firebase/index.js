// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
	getFirestore,
	collection,
	query,
	addDoc,
	doc,
	updateDoc,
	onSnapshot,
	deleteDoc,
	serverTimestamp,
	orderBy,
	where
} from "firebase/firestore";

import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth";


import { toast } from "react-hot-toast";
import store from "../store"
import { login as loginHandle, logout as logoutHandle } from "../store/user";
import { setTodos } from "../store/todos";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const createUser = async (email, password) => {

	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user)
			toast.success("user register successful")
			return user
		})
		.catch((error) => {

			toast.error(error.message);

		});

}

export const login = async (email, password) => {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password)
		toast.success("user login successful")
		return user
	} catch (error) {
		toast.error(error.message)
	};
}

export const logout = async () => {
	try {
		await signOut(auth)
		return true
	} catch (error) {
		toast.error(error.message)
	};
}

export const update = async (data) => {
	try {
		await updateProfile(auth.currentUser, data)
		console.log("profil gunvcellendi")
		toast.success("Update successfully")
		return true
	} catch (error) {
		toast.error(error.message)

	}

}

export const addTodo = async data => {
	try {
		data.createdAt = serverTimestamp()
		const docRef = await addDoc(collection(db, "todos"), data);
		console.log("Document written with ID: ", docRef.id);
		toast.success("Todo added")
		return docRef
	} catch (e) {
		console.error("Error adding document: ", e);
		toast.error(e.message)
	}

}

export const deleteTodo = async id => {
	try {
		await deleteDoc(doc(db, "todos", id));
		toast.success("Todo silindi")
		return true
	} catch (error) {
		toast.error(error.message)
	}
}

export const updateTodo = async (todo, id) => {
	try {
		const todoRef = doc(db, "todos", id)
		await updateDoc(todoRef, {
			todo
		});
		toast.success("Todo Güncellendi")
	} catch (error) {
		toast.success(error.message)

	}
}

export const GoogleLogin = () => {

	signInWithPopup(auth, GoogleProvider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			console.log("token", token)
			// The signed-in user info.
			const user = result.user;
			console.log("user", user)
			// IdP data available using getAdditionalUserInfo(result)
			// ...
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			toast.error(error.message)
			// ...
		});
}
onAuthStateChanged(auth, (user) => {
	if (user) {
		store.dispatch(loginHandle({
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
		}))

		onSnapshot(query(collection(db, 'todos'), orderBy('createdAt', "desc"), where("uid", "==", user.uid)), (doc) => {
			store.dispatch(
				setTodos(
					doc.docs.reduce((todos, todo) => [...todos, { ...todo.data(), id: todo.id }], [])
				)
			)
		})

	} else {
		store.dispatch(logoutHandle())
	}
});