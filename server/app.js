const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//for every request, checks if a token exists in the
//authorization header, if it does attach the decoded user to
//res.locals

app.get("/", (req, res) => {
  console.log("it's all connected");
  res.status(200).json("Success");
});

module.exports = app;