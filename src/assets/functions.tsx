import fireAuth from '../Util/Firebase';


export function loginWithEmailAndPassword(email: string, password: string) {
    fireAuth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in 
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
    });
}