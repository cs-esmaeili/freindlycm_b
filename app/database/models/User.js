const mongoose = require("mongoose");
const { buildSchema } = require("./builder");
const { schema: heroSchema } = require("./Hero");


module.exports = mongoose.model("User", buildSchema({
    name: {
        type: String,
        required: true,
    },
    leader: {
        type: Number,
        required: true,
        default: 3,
    },
    heroList: {
        type: [mongoose.ObjectId],
        ref: 'Hero',
        required: true,
    },
}), 'User');