const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config({path:'./config/config.env'});


app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

module.exports = app