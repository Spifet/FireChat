import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDloNpPMSBNwoYo7gJ-TmIqzN1wII8pysU",
  authDomain: "firechat-246f0.firebaseapp.com",
  projectId: "firechat-246f0",
  storageBucket: "firechat-246f0.appspot.com",
  messagingSenderId: "889669628088",
  appId: "1:889669628088:web:457bd04b1c9801e07b844d",
  measurementId: "G-B1M5YVCB64"
})


const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};