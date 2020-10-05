const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require('./permissions.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://learning-oct-2020-rest-api.firebaseio.com',
});

const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');
app.use(cors({ origin: true }));

// Routes
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World...');
});

// Create - POST
app.post('/api/create', (req, res) => {
  (async () => {
    try {
      await db
        .collection('products')
        .doc('/' + req.body.id + '/')
        .create({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
        });

      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// Read - GET

// Update - PUT

// Delete - DELETE

// export the api to the Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
