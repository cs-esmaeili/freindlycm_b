const Class = require('../database/models/Class');


exports.classList = async (req, res) => {
    const list = await Class.find({}).lean();
    res.send(list);
}