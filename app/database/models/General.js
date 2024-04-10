const mongoose = require("mongoose");
const { buildSchema } = require("./builder");

const schema = buildSchema({
    text: {
        type: [String],
        required: true,
    }
});

exports.schema = schema;
module.exports = mongoose.model("General", schema, 'General');