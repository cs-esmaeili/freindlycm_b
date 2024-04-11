const mongoose = require("mongoose");
const { buildSchema } = require("./builder");

const schema = buildSchema({
    col1:
    {
        type: [mongoose.ObjectId],
        ref: 'Hero',
    },
    col2:
    {
        type: [mongoose.ObjectId],
        ref: 'Hero',
    },
});

exports.schema = schema;
module.exports = mongoose.model("Gp", schema, 'Gp');