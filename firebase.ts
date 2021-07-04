import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: "AIzaSyAuEn9QgBen0D8yepaTpUWAa4ebmb92z_A",
    authDomain: "twrus-tech-shop.firebaseapp.com",
    projectId: "twrus-tech-shop",
    storageBucket: "twrus-tech-shop.appspot.com",
    messagingSenderId: "665270564500",
    appId: "1:665270564500:web:aaaabb43a1f4da4940a681",
    measurementId: "G-F1RFX1EWZZ"
  });
} catch (error) {
  console.log(error);

}

export default firebase;