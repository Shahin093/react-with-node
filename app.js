const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

const busCollection = require('./routes/busCollection.route');

// bus collection routing 
app.use('/api/v1/busCollection', busCollection)


app.get('/', (req, res) => {
    res.send('Hello World!')
});


module.exports = app;