import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBpcLIVysLEfOjfKj2fnOvYWen9zOarhOU',
  authDomain: 'emin-qasimov.firebaseapp.com',
  databaseURL: 'https://emin-qasimov.firebaseio.com',
  projectId: 'emin-qasimov',
  storageBucket: 'emin-qasimov.appspot.com',
  messagingSenderId: '1005915723702',
  appId: '1:1005915723702:web:6c01baa888d2528b'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
