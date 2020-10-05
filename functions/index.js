const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

// Routes
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World...');
});

// Create - POST

// Read - GET

// Update - PUT

// Delete - DELETE

// export the api to the Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
