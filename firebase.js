import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBp7APQQntiekByfnNkbn-PZcvPyBRkE0E',
  authDomain: 'facebook-copy-fdd42.firebaseapp.com',
  projectId: 'facebook-copy-fdd42',
  storageBucket: 'facebook-copy-fdd42.appspot.com',
  messagingSenderId: '510759747759',
  appId: '1:510759747759:web:4460e087f85b3fafdd545a',
  measurementId: 'G-CT170JTZE2',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
