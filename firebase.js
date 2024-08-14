import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js'
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyAJkkSHacFGUZazqjTgQlNE1Z8ZKR2rezY",
    authDomain: "fir-auth-99609.firebaseapp.com",
    projectId: "fir-auth-99609",
    storageBucket: "fir-auth-99609.appspot.com",
    messagingSenderId: "808842245183",
    appId: "1:808842245183:web:b01d7d44ae56c3953cf48a",
    measurementId: "G-92QY1KJNSD"
  };
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth, initializeApp,getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword}