const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IG1hcHEkju5Ozqa2AQ9SjXNxsDvFBrQQalHEH03cRT8uSZM7hyyQqemUtOAFfJvCO6PWn7N5sf7RNQPAX5EPgPb00uFtnqOA2');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world!'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved', total);

    const paymentIntent = await stripe.paymentIntents.create({
        //subunits of the currency
        amount: total, 
        currency: "inr",
    });
    
    // ok-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-87546/us-central1/api