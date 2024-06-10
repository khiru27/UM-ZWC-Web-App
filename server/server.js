const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, '..', 'src')));

// Serve static files from the 'server' directory
app.use(express.static(path.join(__dirname, '..')));

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});