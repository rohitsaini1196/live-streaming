const express = require("express");
const nodeMediaServer = require("./mediaServer");
const app = express();
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/default");
const port = config.server.port;
//DB
// mongoose.connect("mongodb://127.0.0.1/nodeStream", { useNewUrlParser: true });

//Middleware
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: true }));

//Routes

app.get("/", (req, res) => {
  res.send("random res ");
});

app.listen(port, () => console.log(`App listening on ${port}!`));
nodeMediaServer.run();
