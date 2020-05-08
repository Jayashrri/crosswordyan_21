const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8081;
const bodyParser = require("body-parser");
const api_routes = require("./api/routes");
const app = express();
//configure database 


//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", api_routes);

app.get("/*", (req, res) => {
  res.sendFile("index.html",{
    root: path.join(__dirname, 'public')
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});