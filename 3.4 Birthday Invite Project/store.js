const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., CSS and images)
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const formData = req.body;

    // Here, you can store the form data in a JSON file or database
    // For simplicity, we'll write it to a JSON file
    const fs = require('fs');
    const data = JSON.stringify(formData);

    fs.writeFile('formdata.json', data, (err) => }
