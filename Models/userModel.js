const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please ente your email'],
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [8, "Password must be atleast 8 characters"],
        maxLength: [12, "Password must not be more than 12 characters"],
    },
    photo: {
        type: String,
        default: "",
    },
    phone: {
        type: String
    },
    bio: {
        type: String
    }
}, {
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);
module.exports = User;