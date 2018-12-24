const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
    keepAlive: true,
    useMongoClient: true
});


// the below line indicate that the content of message will be load on user model automaticaly but in message we need to pass the ./user file.

module.exports.User = require("./user");
module.exports.Message = require("./messages");