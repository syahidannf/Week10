const express = require("express");
const app = express();
const pool = require("./config/config.js");
const errorHandler = require("./middlewares/errorhandler.js");
const router = require("./routes");
const uploadRouter = require("./upload.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(uploadRouter);
app.use(router);
app.use(errorHandler);

pool.connect((err, res) => {
  if (err) console.log(err);
  console.log("connected");
});

app.listen(3000);
