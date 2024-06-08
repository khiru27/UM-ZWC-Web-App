import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { auth } from './firebase-config.js';

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // No user is signed in, redirect to login page
        window.location.href = 'index.html';
    }
});