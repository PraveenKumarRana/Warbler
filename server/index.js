require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const errorHandler = require("./handlers/errors");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

// All out routes will be going here
app.use(function(req, res, next){
    const err = new Error("Not found!");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`The server is starting at port : ${PORT}`);
});