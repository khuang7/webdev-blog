import firebase from "firebase/app";
import database from "firebase/database";

  // Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDwyHmaI5Sn8sNlXlg2c7OY6Yu22QnXQbA",
    authDomain: "react-firebase-blog-408e9.firebaseapp.com",
    databaseURL: "https://react-firebase-blog-408e9.firebaseio.com",
    projectId: "react-firebase-blog-408e9",
    storageBucket: "react-firebase-blog-408e9.appspot.com",
    messagingSenderId: "380840379757",
    appId: "1:380840379757:web:a36dc734955d1488f30664",
    measurementId: "G-TDKY7TCZ8M"
  };


let firebaseCache;
export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }
  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};