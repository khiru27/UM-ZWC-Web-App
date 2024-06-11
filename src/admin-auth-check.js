import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { auth, database } from './firebase-config.js';
import { onValue, ref } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Function to render container for normal user
function renderNormalUserContainer(title, content) {
    // Create a new title-and-content container
    const container = document.createElement('div');
    container.classList.add('title-and-content-container', 'p-2', '!bg-lightGray');

    container.innerHTML = `
        <h2 class="mb-4 font-bold text-xl text-btnGreen">${title}</h2>
        <p class="text-lg text-black">${content}</p>
    `;

    // Append the container to the about-us-section
    document.getElementById('about-us-section').appendChild(container);
}

// Fetch and render normal user view when the page loads
function fetchNormalUserView(callback) {
    onValue(ref(database, 'containers'), (snapshot) => {
        const containersData = snapshot.val();
        if (containersData) {
            // Clear the about-us-section before rendering
            const aboutUsSection = document.getElementById('about-us-section');
            aboutUsSection.innerHTML = '';

            // Iterate through the containers data and create UI elements for normal users
            for (const containerKey in containersData) {
                const containerData = containersData[containerKey];
                renderNormalUserContainer(containerData.title, containerData.content);
            }
            callback(); // Invoke the callback function after rendering the normal user view
        }
    });
}

// Check user authentication state
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // No user is signed in, redirect to login page
        // window.location.href = 'index.html';
        // Fetch and render data for normal users, and load other page components after that
        fetchNormalUserView(() => {
            // Load other page components here
            console.log('Normal user view loaded');
        });
    } else {
        console.log('You are in admin view!');
    }
});
