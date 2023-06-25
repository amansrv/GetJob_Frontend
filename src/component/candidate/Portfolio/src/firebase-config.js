import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-T080A5NUctspdAkHE6JGns9Kfn0Qko",
  authDomain: "auto-portfolio.firebaseapp.com",
  projectId: "auto-portfolio",
  storageBucket: "auto-portfolio.appspot.com",
  messagingSenderId: "719920363462",
  appId: "1:719920363462:web:570fdf3262be9da60fa4c7",
  measurementId: "G-ZG38NLW17X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = app.firestore();
const projectStorage = firebase.storage();

const providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGitHub = new firebase.auth.GithubAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, database, providerGitHub, providerGoogle, providerFacebook, projectStorage }