const User = require('../database/models/User');
const { mAddUser } = require('../messages/response.json');

exports.userList = async (req, res) => {
    const list = await User.find({}).populate({ path: 'heroList', populate: { path: 'class' } }).lean();
    res.send(list);
}



exports.addUser = async (req, res) => {
    try {
        const { name, leader } = req.body;
        const result = User.create({ name, leader });
        if (result) {
            res.send({ message: mAddUser.ok });
            return;
        }
        throw { message: mAddUser.fail, statusCode: 401 };
    } catch (err) {
        res.status(err.statusCode || 422).json(err);
    }
}