// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoiIJnH0S0vBNfKzi5UMmGMgKp8ILM0Qo",
    authDomain: "clone-828c4.firebaseapp.com",
    projectId: "clone-828c4",
    storageBucket: "clone-828c4.appspot.com",
    messagingSenderId: "815980592653",
    appId: "1:815980592653:web:218122a055db238b96df44",
    measurementId: "G-LZEXKWN3Q0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};