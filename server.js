const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { ServerApiVersion } = require('mongodb');
const app = require("./app");
// database connection
mongoose.connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }).then(() => {
    console.log(`Database connection is successful `.red.bold);
});

// server
// const port = process.env.PORT || 8080;
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`app is running on port 5000`.yellow.bold)
});
