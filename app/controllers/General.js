const General = require('../database/models/General');
const { mSetGeneralData } = require('../messages/response.json');

exports.getGeneralData = async (req, res) => {
    const data = await General.findOne({});
    res.send(data);
}
exports.setGeneralData = async (req, res) => {
    try {
        const { title, disc } = req.body;
        const data = await General.findOne({}).lean();
        let array = data.text;
        if (title) {
            array[0] = title;
        }
        if (disc) {
            array[1] = disc;
        }
        const update = await General.updateOne({ _id: data._id }, { text: array });
        if (update.modifiedCount == 1) {
            res.send({ message: mSetGeneralData.ok });
            return;
        }
        throw { message: mSetGeneralData.fail, statusCode: 401 };
    } catch (err) {
        res.status(err.statusCode || 422).json(err);
    }
}