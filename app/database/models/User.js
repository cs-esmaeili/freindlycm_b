const mongoose = require("mongoose");
const { buildSchema } = require("./builder");
const { schema: heroSchema } = require("./Hero");


module.exports = mongoose.model("User", buildSchema({
    name: {
        type: String,
        required: true,
    },
    heroList: {
        type: [mongoose.ObjectId],
        ref: 'Hero',
        required: true,
    },
}), 'User');