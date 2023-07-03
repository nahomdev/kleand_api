require("dotenv").config();

const express = require("express");
const body_parser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors"); 
const errorController = require('./express/controllers/error-controller')


const app = express();

const port = process.env.EXPRESS_PORT;


app.use(cors());
app.use(body_parser.json({ limit: "100mb" }));
app.use(body_parser.urlencoded({ extended: true }));
app.use(morgan("combined")); 
app.use(express.static('uploads'));

app.use("/test",(req, res, next)=>{
  res.send("server is up and running");
}) 

app.use(errorController);

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});