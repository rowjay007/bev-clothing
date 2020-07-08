import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBlSXE1bRbusWqV1EdeONmCv3mqsv9QnQ",
  authDomain: "bev-db.firebaseapp.com",
  databaseURL: "https://bev-db.firebaseio.com",
  projectId: "bev-db",
  storageBucket: "bev-db.appspot.com",
  messagingSenderId: "781538824918",
  appId: "1:781538824918:web:ba0be9fe5dfd939b1eef77",
  measurementId: "G-7NH9HK0YYQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
