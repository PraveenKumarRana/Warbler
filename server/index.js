require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const errorHandler = require("./handlers/errors");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const {loginRequired, ensureCorrectUser} = require("./middleware/auth");
const db = require("./models")

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser,messageRoutes);
app.use("/api/messages", loginRequired, async function(req, res, next){
    try{
        let message = await db.Message.find()
            .sort({createdAt: "desc"})
            .populate("user", {
                username: true,
                profileImageUrl: true
            });
        return res.status(200).json(message);
    } catch(err){
        next(err);
    }
});

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