require("dotenv").config();

const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//DB
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}); 

app.use(require("./routes"));

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));

app.listen(3000);