const User = require('../database/models/User');

exports.userList = async (req, res) => {
    const list = await User.find({}).populate({ path: 'heroList', populate: { path: 'class' } }).lean();
    res.send(list);
}