import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRCth-9UnI0fN7v6Va6DWS1QWNdOJnJnk",
    authDomain: "clone-87546.firebaseapp.com",
    projectId: "clone-87546",
    storageBucket: "clone-87546.appspot.com",
    messagingSenderId: "321010679194",
    appId: "1:321010679194:web:399d62dc99ad3e9c4f4e23",
    measurementId: "G-569QDT8B30"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};