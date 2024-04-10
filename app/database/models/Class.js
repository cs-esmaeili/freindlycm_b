const mongoose = require("mongoose");
const { buildSchema } = require("./builder");

const schema = buildSchema({
    name: {
        type: String,
        required: true,
    },
    spec: {
        type: String,
        required: true,
    },
    classIcon: {
        type: String,
        required: true,
    },
    specIcon: {
        type: String,
        required: true,
    }
});

exports.schema = schema;
module.exports = mongoose.model("Class", schema, 'Class');