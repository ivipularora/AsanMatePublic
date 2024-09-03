const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('{YOUR_STRIPE_TEST_API_KEY_HERE}');

const app = express();
app.use(cors());

app.use(express.json)

app.get('/', (req, res) => {
    res.send('Welcome to our store')
})

app.listen(8080, () => {
    console.log('App running')
})
