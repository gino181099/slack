// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALIe7KzPSq8_SXFMzNajnB5H5xhxvscFo",
  authDomain: "slack-d3729.firebaseapp.com",
  projectId: "slack-d3729",
  storageBucket: "slack-d3729.appspot.com",
  messagingSenderId: "247486211410",
  appId: "1:247486211410:web:315ca066af9abed58d068b",
  measurementId: "G-W9CF028J8L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;
