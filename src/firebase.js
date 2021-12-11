import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWtdhNrn1Oay-iLNb-4AML4bW34WoPakg",
  authDomain: "netflix-version2.firebaseapp.com",
  projectId: "netflix-version2",
  storageBucket: "netflix-version2.appspot.com",
  messagingSenderId: "358130362205",
  appId: "1:358130362205:web:e80e8eb8c32a33b987aab4",
  measurementId: "G-Y16GD6QEK9"
};

const firebaseAdmin = firebase.initializeApp(firebaseConfig);
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider, analytics };
