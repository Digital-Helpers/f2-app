import React from 'react';
import './App.css';
import SignUp from "./components/SignUp"

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration

function App() {

  var firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
