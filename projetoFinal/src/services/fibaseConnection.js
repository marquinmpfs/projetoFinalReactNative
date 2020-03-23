import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let config = {
    apiKey: "AIzaSyB8Yfn0G7vMIIr1A1wiSJpZigHxZp72yoY",
    authDomain: "meudinheiro-1bfcb.firebaseapp.com",
    databaseURL: "https://meudinheiro-1bfcb.firebaseio.com",
    projectId: "meudinheiro-1bfcb",
    storageBucket: "meudinheiro-1bfcb.appspot.com",
    messagingSenderId: "817742387581",
    appId: "1:817742387581:web:049b86752f4673a84a1414",
    measurementId: "G-EP09CZ9R8H"
  };

firebase.initializeApp(config);

export default firebase;