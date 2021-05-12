const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
// this sets up the server file to look at the 
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const GIPHY_KEY = process.env.GIPHY_API_KEY;
console.log('Giphy key', GIPHY_KEY);

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/trending', (req, res) => {
    // TODO - go to giphy, get trending stuff, send to client
   axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}`)
    .then( response => {
        console.log('Data from giphy:', response.data);
        res.send(response.data)
    })
    .catch( error => {
        console.log('Error getting tredning from giphy', eroor);
        res.sendStatus(500); 
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});