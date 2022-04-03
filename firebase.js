import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: '',
  authDomain: 'facebook-copy-fdd42.firebaseapp.com',
  projectId: 'facebook-copy-fdd42',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
