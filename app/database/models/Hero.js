const mongoose = require("mongoose");
const { buildSchema } = require("./builder");

const schema = buildSchema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'User',
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
    inFarm: {
        type: Boolean,
        required: true,
        default: false
    }
});

exports.schema = schema;
module.exports = mongoose.model("Hero", schema, 'Hero');