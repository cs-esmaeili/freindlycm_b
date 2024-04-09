const mongoose = require("mongoose");
const { utcToJalali } = require("../../utils/TimeConverter");
const schema = new mongoose.Schema(
    {
        token: {
            type: Number,
            required: true,
        },
        change: {
            type: Boolean,
            required: true,
        },
        createdAt: {
            type: mongoose.Schema.Types.Mixed,
            default: utcToJalali(new Date()),
        },
        updatedAt: {
            type: mongoose.Schema.Types.Mixed,
            set: function () {
                return utcToJalali(new Date());
            },
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Token", schema, 'Token');