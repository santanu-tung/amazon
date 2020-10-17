import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FireConfig';
import './Login.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const [newUser, setNewuUer] = useState(false)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: ''
    })
    const handleSignin = () => {

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
    const handleSignout = () => {
        firebase.auth().signOut().then(function () {
            const signout = {

                isSignedIn: false,
                name: '',
                email: '',
                photo: ''
            }
            setUser(signout)
        }).catch(function (error) {
            console.log(error);
        });
    }
    console.log(user);
    const handleChange = (e) => {
        console.log(e.target.value, e.target.name);
    }

    const handleBlur = (e) => {
        console.log(e.target.value, e.target.name);

        let isformValid = true
        if (e.target.name === 'email') {
            // debugger;
            isformValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            //Minimum eight characters, at least one letter and one number:
            isformValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)
        }
        if (isformValid) {
            console.log(' user and passwordyour password rights');
            const newInfo = { ...user }
            newInfo[e.target.name] = e.target.value;
            setUser(newInfo)
        } else {
            console.log('your password or email  wrong');
        }
    }
    const handeSubmit = (e) => {
        e.preventDefault()

        if (newUser && user.password && user.email) {

            console.log('signin');
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    console.log('sign sussecs');

                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    updateUserName(user.name)
                   
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);

                    //  sat at sate
                    const newUserInfo = { ...user }
                    newUserInfo.success = false
                    newUserInfo.error = error.message;

                    setUser(newUserInfo)
                    console.log('sign in fail');
                    // ...
                });

        } if (!newUser && user.password && user.email) {

            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    console.log('added info', res.user);
                    SetLoginUser(newUserInfo)
                    history.replace(from);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    const newUserInfo = { ...user }
                    newUserInfo.success = false
                    newUserInfo.error = error.message;

                    setUser(newUserInfo)
                    console.log('signup fail');
                    // ...

                    // admin
                    // admin@gmail.com
                    // pass12345
                });
        }
    }
    var updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        }).then(function () {
            // Update successful.
            console.log('user name updated successfully');

        }).catch(function (error) {
            console.log(error);

            // An error happened.
        });
    }
    // var fbprovider = new firebase.auth.FacebookAuthProvider();
    // const handleFbSignIn = () => {

    //     firebase.auth().signInWithPopup(fbprovider).then(function (result) {
    //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //         var token = result.credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         console.log(user);
    //         // ...
    //     }).catch(function (error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //     });
    // }
    return (
        <div className="text-center">
            <div className=" google-auth display">
               
                {
                    user.isSignedIn ? <button onClick={handleSignout} className="my-btn mr-5">Sign out</button> : <button onClick={handleSignin} className="my-btn mr-5">Sign in by Gmail</button>
                }
                {/* <button onClick={handleFbSignIn}> Sigin by facebook</button> */}  

                {
                    user.isSignedIn &&
                    <div>
                        <h3> well come {user.name}</h3>
                        <p>your mail {user.email}</p>

                        <img className="my-img" src={user.photo} alt={user.name} />
                    </div>
                }
            </div>
            <div className="my-auth mt-100">

                <label htmlFor="newUser"> new user  signed up </label>
                <input type="checkbox" onChange={() => setNewuUer(!newUser)} name="newUser" id="" />
                <br />
                <br />
                <form onSubmit={handeSubmit} action="">
                    {
                        newUser && <input onBlur={handleBlur} type="text" name="name" id="" placeholder=" write your name address" required />
                    }
                    <br /><br />
                    <input onBlur={handleBlur} onChange={handleChange} type="text" name="email" id="" placeholder=" write your email address" required /><br /><br />
                    <input onBlur={handleBlur} onChange={handleChange} type="password" name="password" id="" placeholder=" write your password" required /> <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                {
                    user.success && <p style={{ color: 'green' }} >User  {newUser ? 'created' : 'logged in'} successfully</p>
                }
                <p></p>
            </div>
        </div>
    );
};
export default Login;