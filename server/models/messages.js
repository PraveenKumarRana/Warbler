const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // the reference name should be same as the name of the model ie. User
        ref: "User"
    }
},{
    timestamps: true
});

// This hook will help us to get rid of the situation that when user deletes the message then it should not be the case that the message id is present in the list of the user's messages list.
messageSchema.pre("remove", async function(next){
    try{
        // find a user
        let user = await User.findById(this.user);
        // remove the id of the message from their messages list
        user.messages.remove(this.id);
        // save that user
        await user.save();
        // return next
        return next();
    } catch(err) {
        return next(err);
    }
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;