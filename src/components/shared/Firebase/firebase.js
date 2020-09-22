import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import config from "./config";

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.firestore = app.firestore();

    // analytics
    this.analytics = app.analytics();

    // Helper
    this.fieldValue = app.firestore.FieldValue;

    this.emailAuthProvider = app.auth.EmailAuthProvider;

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  // Auth API
  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  signInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  signOut = () => {
    this.auth.signOut();
    localStorage.setItem("authUser", null);
  };

  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  sendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
    });

  // User API
  user = (uid) => this.firestore.doc(`users/${uid}`);

  currentUser = (user) => {
    if (!user) {
      return;
    }
    const uid = user.uid;
    return this.firestore.doc(`users/${uid}`);
  };

  users = () => this.firestore.collection("users");

  // Get a Collection
  collection = (collectionPath) => this.firestore.collection(collectionPath);

  // Get a Doc from a collection
  doc = (collectionPath, id) =>
    this.firestore.collection(collectionPath).doc(id);

  getCollectionById = (collectionPath, id) =>
    this.firestore.collection(collectionPath).where("id", "==", Number(id));

  createQuestionById = (collectionPath, question) => {
    const uid = this.createId(collectionPath);
    this.firestore
      .collection("courses")
      .doc(collectionPath)
      .collection("questions")
      .doc(uid)
      .set({ ...question, uid: uid });
  };

  // Helper
  createId = (collectionPath) =>
    this.firestore.collection(collectionPath).doc().id;

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(
      (authUser) => {
        if (authUser) {
          this.user(authUser.uid)
            .get()
            .then((snapshot) => {
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
                reports: authUser.reports,
                photoURL: authUser.photoURL || "",
                ...dbUser
              };
              // track users
              this.analytics.setUserProperties({ ...authUser });

              next(authUser);
            });
        } else {
          fallback();
        }
      },
      (e) => {
        console.log(e);
      }
    );

  // *** Message API ***

  message = (uid) => this.firestore.doc(`messages/${uid}`);

  messages = () => this.firestore.collection("messages");
}
export default Firebase;
