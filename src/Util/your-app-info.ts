// Rename the file to Firebase.ts 
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
    // Put your firebase configuration here
};
firebase.initializeApp(firebaseConfig)
// firebase.analytics();
const fireAuth = firebase.auth()

export default fireAuth