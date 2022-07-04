// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmuIWe5HwY2IYl8bzUGJunGEAWMkoDHc",
  authDomain: "b2b-multivendor.firebaseapp.com",
  projectId: "b2b-multivendor",
  storageBucket: "b2b-multivendor.appspot.com",
  messagingSenderId: "424908167412",
  appId: "1:424908167412:web:0905bb6415ab209b9d26a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;