import React, {useState, useEffect} from "react"
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";


// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseui = require('firebaseui')

const SignUp = ()=> {
    const firebaseConfig = {
        apiKey: "AIzaSyD9-XsU8yx4rGGKmyAm6qzWTzlWPCs-ZGk",
        authDomain: "f2app-43a0e.firebaseapp.com",
        databaseURL: "https://f2app-43a0e.firebaseio.com",
        projectId: "f2app-43a0e",
        storageBucket: "",
        messagingSenderId: "728738468560",
        appId: "1:728738468560:web:9b396b66371303007e84d5",
        measurementId: "G-X69J6R0XM4"
      };
      // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();

      // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
      });
    return(
        <>
        <h2>Sign Up</h2>
        {/* <form>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
        </form> */}
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
        </>
    )
}
export default SignUp