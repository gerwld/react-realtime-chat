import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBWTGz29tEYNKBsZNTtG-we9KAlNlpYvJg",
  authDomain: "react-chat-c9a23.firebaseapp.com",
  projectId: "react-chat-c9a23",
  storageBucket: "react-chat-c9a23.appspot.com",
  messagingSenderId: "309509553350",
  appId: "1:309509553350:web:1b58dcede8f502d7472bc7",
  measurementId: "G-432KLZ57K7"
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();



ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
  <HashRouter>
    <App />
  </HashRouter>
  </Context.Provider>,
  document.getElementById('root')
);
