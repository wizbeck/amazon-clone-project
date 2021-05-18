// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAHlctZ0xLLWItVvyEW37poZr2iBLoCtm0",
  authDomain: "clone-project-59abe.firebaseapp.com",
  projectId: "clone-project-59abe",
  storageBucket: "clone-project-59abe.appspot.com",
  messagingSenderId: "388306995621",
  appId: "1:388306995621:web:c9525e165b203fb48a804c",
  measurementId: "G-J347GF4BHQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

