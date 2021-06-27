import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCAbIoELpAbvsGbIgTQoytSLdFJf3IGJM",
  authDomain: "remind-me-ps.firebaseapp.com",
  databaseURL: "https://remind-me-ps-default-rtdb.firebaseio.com",
  projectId: "remind-me-ps",
  storageBucket: "remind-me-ps.appspot.com",
  messagingSenderId: "458775654148",
  appId: "1:458775654148:web:c09941cc28ef7e8f502a51",
  measurementId: "G-85KKP2KCST",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const google_provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
