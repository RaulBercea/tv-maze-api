// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr0cTs97omX4LEw7IPHqURVeapfZjs78I",
  authDomain: "tv-maze-bercea.firebaseapp.com",
  databaseURL:
    "https://tv-maze-bercea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tv-maze-bercea",
  storageBucket: "tv-maze-bercea.appspot.com",
  messagingSenderId: "504150651217",
  appId: "1:504150651217:web:71ddf27c53572d699f2370",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
