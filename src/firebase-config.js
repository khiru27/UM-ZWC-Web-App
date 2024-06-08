import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxTQU_b5yUYBM4s183v16QRlRLXV5fI44",
    authDomain: "um-zwc-6b4bf.firebaseapp.com",
    projectId: "um-zwc-6b4bf",
    storageBucket: "um-zwc-6b4bf.appspot.com",
    messagingSenderId: "789428726703",
    appId: "1:789428726703:web:1b71620b92258e4cfbdd5a",
    measurementId: "G-EWZJMYBW7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { app, auth, database };