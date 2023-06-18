import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// eslint-disable-next-line
import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfPUXSpGtT3tELv4mZd6BwL_aF2-iaXU",
  authDomain: "cart-web-app-375bf.firebaseapp.com",
  projectId: "cart-web-app-375bf",
  storageBucket: "cart-web-app-375bf.appspot.com",
  messagingSenderId: "866719910462",
  appId: "1:866719910462:web:bed4874ab05f90d9399f6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

