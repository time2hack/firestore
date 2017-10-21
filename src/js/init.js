import firebase from 'firebase';
import 'firebase/firestore';
// Initialize Firebase
var config = {
};


module.exports = () => {
  firebase.initializeApp(config);
}
