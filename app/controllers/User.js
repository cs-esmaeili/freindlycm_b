const User = require('../database/models/User');
const Hero = require('../database/models/Hero');
const { mAddUser, mDeleteUser } = require('../messages/response.json');

exports.userList = async (req, res) => {
    const list = await User.find({}).populate({ path: 'heroList', populate: { path: 'class' } }).lean();
    res.send(list);
}



exports.addUser = async (req, res) => {
    try {
        const { name, leader } = req.body;
        const result = User.create({ name, leader, heroList: [] });
        if (result) {
            res.send({ message: mAddUser.ok });
            return;
        }
        throw { message: mAddUser.fail, statusCode: 401 };
    } catch (err) {
        res.status(err.statusCode || 422).json(err);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { user_id } = req.body;
        const userResult = await User.deleteOne({ _id: user_id });
        const heroResult = await Hero.deleteMany({ user: user_id });

        if (userResult.deletedCount == 0 ) {
            throw { message: mDeleteUser.fail, statusCode: 500 };
        }
        res.send({ message: mDeleteUser.ok });
    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 422).json(err);
    }
}