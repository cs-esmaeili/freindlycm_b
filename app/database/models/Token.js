const mongoose = require("mongoose");
const { buildSchema } = require("./builder");

module.exports = mongoose.model("Token", buildSchema( {
    token: {
        type: Number,
        required: true,
    },
    change: {
        type: Boolean,
        required: true,
    }
}), 'Token');