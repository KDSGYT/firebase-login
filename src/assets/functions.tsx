import fireAuth, { firebaseExport, googleSigninProvider } from '../Util/Firebase';

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
      setUserState(userData);
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.error(error);
    });
}

/**
 * 
 * @param setState set global user information
 * @param callback callback function
 */
export function loginWithGoogle(setState: any, callback: any) {
  // Adding session presistance 
  fireAuth.setPersistence(firebaseExport.auth.Auth.Persistence.NONE)
    // .then((res) => console.log(res))
    .then(() =>
      fireAuth.signInWithPopup(googleSigninProvider)
    ).then((result: any) => result.user.providerData[0])
    .then(({ displayName, uid, photoURL, email }) => {
      const data = {
        name: displayName,
        photoURL: photoURL.replace('96', '300'),
        uid,
        email
      }
      localStorage.setItem('userData', JSON.stringify(data))

      setState(data);
      callback()

    })
    // )

    .catch(function (error) {
      console.error(error)
    });
  return;
}


export function logOut(callBack:any) {
  fireAuth.signOut()
  .then(() => {
    window.localStorage.clear();
    callBack();
  })
}