const Hero = require('../database/models/Hero');
const User = require('../database/models/User');
const { mHeroDelete, mAddHero } = require('../messages/response.json');



exports.addHero = async (req, res) => {
    try {
        const { name, user_id, class_id } = req.body;
        const resultHero = await Hero.create({ name, class: class_id, user: user_id, });


        let userHeroList = (await User.findOne({ _id: user_id }).lean()).heroList;
        userHeroList.push(resultHero._id);
        const resultUser = await User.updateOne({ _id: user_id }, { heroList: userHeroList });

        if (resultHero && resultUser) {
            res.send({ message: mAddHero.ok });
            return;
        }
        throw { message: mAddHero.fail, statusCode: 401 };
    } catch (err) {
        console.log(err);
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