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


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date ();

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
        })
      } catch (error) {
        console.log ('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;