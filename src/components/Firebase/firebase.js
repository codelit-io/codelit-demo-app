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

		/* Helper */

		this.serverValue = app.database.ServerValue;
		this.fieldValue = app.firestore.FieldValue;

		this.emailAuthProvider = app.auth.EmailAuthProvider;

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

	sendEmailVerification = () =>
		this.auth.currentUser.sendEmailVerification({
			url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
		});

	/* User API */

	user = uid => this.firestore.doc(`users/${uid}`);

	users = () => this.firestore.collection("users");

	/* Courses API */

	courses = () => this.db.ref("courses");

	topics = (course, topic) => this.db.ref(`courses/${course}/${topic}`);

	subTopic = (topic) =>
		this.db.ref(`courses/frontend/${topic}/topics`);
	
	getQuestions = () => this.db.ref("questions");
	questions = () => this.firestore.collection("questions");

	getQuestion = id => this.db.ref(`questions/${id}`);

	_getQuestion = uid => this.firestore.collection(`questions/${uid}`)
	/* Get Questions */

	getDb = (path) => this.db.ref();

	// *** Merge Auth and DB User API *** //

	onAuthUserListener = (next, fallback) =>
		this.auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.user(authUser.uid)
					.get()
					.then(snapshot => {
						const dbUser = snapshot.data();

						// default empty roles
						if (dbUser && !dbUser.roles) {
							dbUser.roles = {};
						}

						// merge auth and db user
						authUser = {
							uid: authUser.uid,
							email: authUser.email,
							emailVerified: authUser.emailVerified,
							providerData: authUser.providerData,
							...dbUser
						};

						next(authUser);
					});
			} else {
				fallback();
			}
		});

	// *** Message API ***

	message = uid => this.firestore.doc(`messages/${uid}`);

	messages = () => this.firestore.collection("messages");
}
export default Firebase;
