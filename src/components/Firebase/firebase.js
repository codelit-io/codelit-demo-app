import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth = app.auth();
		this.db = app.database();
		this.firestore = app.firestore();

		this.googleProvider = new app.auth.GoogleAuthProvider();
		this.facebookProvider = new app.auth.FacebookAuthProvider();
	}

	/* Auth API */

	createUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	signInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

	signInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

	signOut = () => this.auth.signOut();

	passwordReset = email => this.auth.sendPasswordResetEmail(email);

	passwordUpdate = password => this.auth.currentUser.updatePassword(password);

	/* User API */

	user = uid => this.db.ref(`users/${uid}`);

	users = () => this.db.ref("users");

	/* Courses API */

	course = uid => this.firestore.doc(`courses/${uid}`);

	courses = () => this.firestore.collection('courses');

	courseDb = uid => this.db.ref(`courses/${uid}`);

	coursesDb = () => this.db.ref('courses');


}

export default Firebase;
