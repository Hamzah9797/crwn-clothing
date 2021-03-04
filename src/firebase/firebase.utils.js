import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = 
{
    apiKey: "AIzaSyCuuFehlmhc-B4etuzsbxIQtOf-tRxnl8Y",
    authDomain: "crwn-db-171d4.firebaseapp.com",
    projectId: "crwn-db-171d4",
    storageBucket: "crwn-db-171d4.appspot.com",
    messagingSenderId: "901706696043",
    appId: "1:901706696043:web:fc8e5328dfa736385f782e",
    measurementId: "G-B9Q1C8RVPE"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;