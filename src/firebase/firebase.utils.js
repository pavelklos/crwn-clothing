import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDHwOhPP7aPKVzkYEXQ8RFy680cW2HT6ws",
  authDomain: "crwn-db-pavel-klos.firebaseapp.com",
  databaseURL: "https://crwn-db-pavel-klos.firebaseio.com",
  projectId: "crwn-db-pavel-klos",
  storageBucket: "crwn-db-pavel-klos.appspot.com",
  messagingSenderId: "507846294575",
  appId: "1:507846294575:web:71d71ae0172227c9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
