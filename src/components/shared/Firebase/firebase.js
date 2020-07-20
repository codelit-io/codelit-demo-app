import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

/*  Api keys and configs  */

const developmentConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const productionConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    if (process.env.NODE_ENV === "production") {
      app.initializeApp(productionConfig);
    } else {
      app.initializeApp(developmentConfig);
    }

    this.auth = app.auth();
    // Db is not in use but available if needed
    // this.db = app.database();
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

  signOut = () => {
    this.auth.signOut();
    localStorage.removeItem("authUser");
  };

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  sendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
    });

  /* User API */

  user = uid => this.firestore.doc(`users/${uid}`);

  currentUser = user => {
    if (!user) {
      return;
    }
    const uid = user.uid;
    return this.firestore.doc(`users/${uid}`);
  };

  users = () => this.firestore.collection("users");

  /* Questions API */

  question = id => this.firestore.collection("questions").doc(id);

  questions = () => this.firestore.collection("questions");

  /* Get Any collection or Doc  */

  collection = collectionPath => this.firestore.collection(collectionPath);

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

  /* Helper  */

  createId = collectionPath =>
    this.firestore.collection(collectionPath).doc().id;

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(
      authUser => {
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
                reports: authUser.reports,
                photoURL: authUser.photoURL || "",
                ...dbUser
              };

              next(authUser);
            });
        } else {
          fallback();
        }
      },
      e => {
        console.log(e);
      }
    );

  // *** Message API ***

  message = uid => this.firestore.doc(`messages/${uid}`);

  messages = () => this.firestore.collection("messages");
}
export default Firebase;
