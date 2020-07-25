import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD0_OelJpLEW6J0nFC3n81hSXroY93iUc4",
  authDomain: "vogue-app.firebaseapp.com",
  databaseURL: "https://vogue-app.firebaseio.com",
  projectId: "vogue-app",
  storageBucket: "vogue-app.appspot.com",
  messagingSenderId: "915584661211",
  appId: "1:915584661211:web:a8c409a77c7dd40ac8fefe",
  measurementId: "G-5LZZ3KW0Y2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error){
      console.log('error creating user' + error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
