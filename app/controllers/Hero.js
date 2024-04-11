const Hero = require('../database/models/Hero');
const { mHeroDelete } = require('../messages/response.json');



exports.addHero = async (req, res) => {
    try {
        const { name, leader } = req.body;
        const result = await User.create({ name, leader, heroList: [] });
        if (result) {
            res.send({ message: mAddUser.ok });
            return;
        }
        throw { message: mAddUser.fail, statusCode: 401 };
    } catch (err) {
        res.status(err.statusCode || 422).json(err);
    }
}


exports.deleteHero = async (req, res) => {
    try {
        const { user_id, hero_id } = req.body;
        const heroResult = await Hero.deleteOne({ user: user_id, _id: hero_id });

        if (heroResult.deletedCount == 0) {
            throw { message: mHeroDelete.fail, statusCode: 500 };
        }
        res.send({ message: mHeroDelete.ok });
    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 422).json(err);
    }
}