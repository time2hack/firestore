import firebase from 'firebase';
import 'firebase/firestore';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhRphACipxjQSn1Ls1oAeMiPukTNdcCBQ",
  authDomain: "time2hack-firestore.firebaseapp.com",
  databaseURL: "https://time2hack-firestore.firebaseio.com",
  projectId: "time2hack-firestore",
  storageBucket: "time2hack-firestore.appspot.com",
  messagingSenderId: "239069097317"
};
firebase.initializeApp(config);
