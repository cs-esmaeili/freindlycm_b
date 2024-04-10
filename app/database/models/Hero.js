const mongoose = require("mongoose");
const { buildSchema } = require("./builder");

const schema = buildSchema({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: mongoose.ObjectId,
        ref: 'Class',
        required: true,
    },
    raiderIo: {
        type: Number,
        required: true,
        default: -1,
    },
    pvpRank: {
        type: Number,
        required: true,
        default: -1,
    },
});

exports.schema = schema;
module.exports = mongoose.model("Hero", schema, 'Hero');