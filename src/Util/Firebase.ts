import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCoCLDn4qaMRz0YhxNcVw49AjGLZrL-Be8",
    authDomain: "fir-login-430b4.firebaseapp.com",
    projectId: "fir-login-430b4",
    storageBucket: "fir-login-430b4.appspot.com",
    messagingSenderId: "599135740639",
    appId: "1:599135740639:web:cf92e07c5e77327a25bf6a",
    measurementId: "G-NFCLN5JM1W"
};

firebase.initializeApp(firebaseConfig)
// firebase.analytics();
const fireAuth = firebase.auth()

export default fireAuth

// /import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/analytics';

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };

// firebase.initializeApp(firebaseConfig)
// firebase.analytics();
// const fireAuth = firebase.auth()

// export default fireAuth;