//Dichiarazione delle dipendenze
const express = require('express');
const mongoose = require('mongoose');
const app = express();
let bodyParser = require('body-parser');
let apiRoutes = require("./api-routes")

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());


const db_link = "mongodb://mongo:27017/first_proj";
//Connessione con il DB
mongoose.connect(db_link, function (err) {
     if (err)
         console.error("Error occurred while connecting to DB!");
     else
         console.log("Database connection established successfully");
});
var db = mongoose.connection;
// Setup server port
const port = process.env.PORT || 8000;

// Use Api routes in the App
app.use('/api', apiRoutes)
//Running the server
app.listen(port, function() {
      console.log(`App running successfully on port number ${port}...`);
});



