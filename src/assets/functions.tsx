import fireAuth from '../Util/Firebase';

/**
 * Login with Email and password onto account
 * @param email used as username
 * @param password password to login
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