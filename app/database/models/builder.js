const mongoose = require("mongoose");
const { utcToJalali } = require("../../utils/TimeConverter");


function addTimestampsToObject(obj) {
    obj.createdAt = {
        type: mongoose.Schema.Types.Mixed
    };
    obj.updatedAt = {
        type: mongoose.Schema.Types.Mixed,
        set: function () {
            return utcToJalali(new Date());
        }
    };
}

exports.buildSchema = (schemaObject) => {
    addTimestampsToObject(schemaObject);
    const schema = new mongoose.Schema(schemaObject, { timestamps: true });

    schema.pre('save', function (next) {
        const currentDate = utcToJalali(new Date());

        this.createdAt = currentDate;
        this.updatedAt = currentDate;

        next();
    });

    return schema;
}