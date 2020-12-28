import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {

    apiKey: "AIzaSyCoCLDn4qaMRz0YhxNcVw49AjGLZrL-Be8",
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig)
// firebase.analytics();
const fireAuth = firebase.auth()

export default fireAuth