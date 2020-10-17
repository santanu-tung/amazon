import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FireConfig';


export const initializeloginFramework = () => {
    firebase.initializeApp(firebaseConfig);
}



export const handleGoogleSignin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
        var { displayName, email, photoURL } = result.user

        console.log(displayName, email, photoURL);

        const signinUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
        }

        setUser(signinUser)

        SetLoginUser(signinUser)
        history.replace(from);

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}

export  const handleFbSignIn = () => {
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbprovider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}