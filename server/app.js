const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes/router");

//const nodeMediaServer = require("./mediaServer");

const config = require("./config/default");
const port = config.server.port;
require("dotenv").config();

//DB
const dbURL = process.env.DB_URL;
const db = mongoose.connection;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.set("useFindAndModify", false);

db.on("connected", function () {
  console.log("We are connected to DB!!");
});
db.on("error", function (err) {
  console.log("Mongoose default connection has occured " + err + " error");
});
db.on("disconnected", function () {
  console.log("Mongoose default connection is disconnected");
});
process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection is disconnected due to application termination"
    );
    process.exit(0);
  });
});

//Middleware
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Live Stream Applicaiton ");
});

app.use("/api", router);

app.listen(port, () => console.log(`App listening on ${port}!`));
// nodeMediaServer.run();
