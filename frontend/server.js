const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51OCzujSF8NU8RAd1Fr5TtK4jyPgaYmCBXDlTedNeMicAExY1WPheimR291X6JqTkk7329p2NWKmJj1IeKGTqqKid00bw1VxF5Y');

const app = express();
app.use(cors());

app.use(express.json)

app.get('/', (req, res) => {
    res.send('Welcome to our store')
})

app.listen(8080, () => {
    console.log('App running')
})