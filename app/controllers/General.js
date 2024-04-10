const General = require('../database/models/General');

exports.getGeneralData = async (req, res) => {
    const data = await General.findOne({});
    res.send(data);
}