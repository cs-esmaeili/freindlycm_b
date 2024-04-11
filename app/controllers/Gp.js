const Gp = require('../database/models/Gp');

exports.gpList = async (req, res) => {
    const list = await Gp.find({}).populate({ path: 'col1 col2', populate: { path: 'user class' } }).lean();

    res.send(list);
}