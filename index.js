const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8081;
const bodyParser = require("body-parser");
const api_routes = require("./api/routers/routes");
const mongoose = require('mongoose');
const signale = require('signale');
const config = require("./config/config");
const expressValidator = require('express-validator'); 

// initializing express
const app = express();
//configure database 
  
mongoose.connect(config.mongodb.dbURI,config.mongodb.setting)
  .then(() => {
    signale.success('*****Database Connection Successfull******');
  }).catch(err => {
    signale.fatal(new Error(err));
    signale.warn('Could not connect to Database. Exiting now...');
    process.exit();
  })
let db = mongoose.connection;


//configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", api_routes);

app.get("/*", (req, res) => {
  res.sendFile("index.html",{
    root: path.join(__dirname, 'public')
  });
});

app.listen(PORT, () => {
  signale.success(`Server is running on ${PORT}`);
});