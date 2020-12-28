import fireAuth, { googleSigninProvider } from '../Util/Firebase';

/**
 * Login with Email and password onto account
 * @param email used as username
 * @param password password to login
 * @param setUserState used to set the global user state
 */
export function loginWithEmailAndPassword(email: string, password: string, setUserState: any) {
  fireAuth.signInWithEmailAndPassword(email, password)
    .then(data => data.user)
    .then((userData) => {
      // Save the user information in the global state
      setUserState(userData);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
    });
}

export function loginWithGoogle() {
  fireAuth.signInWithPopup(googleSigninProvider)
    .then(result => {
      console.log(result)
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.error(error)
      // ...
    });
  return;
}