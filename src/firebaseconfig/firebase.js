import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDEBPC4sTRk74re5220aJpjfNYKNDjYRH0",
  authDomain: "infaque-playground.firebaseapp.com",
  projectId: "infaque-playground",
  storageBucket: "infaque-playground.appspot.com",
  messagingSenderId: "250950931199",
  appId: "1:250950931199:web:b1052938d3b33a9ea172ca",
  measurementId: "G-S46X1TT773",
};

firebase.initializeApp(config);

// export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: "select_account" });
// export const signIn = () => auth.signInWithPopup(provider);

export default firebase;
