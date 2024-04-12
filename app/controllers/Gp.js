const { mAddGp, mAddHeroToGp } = require('../messages/response.json');
const Gp = require('../database/models/Gp');
const Hero = require('../database/models/Hero');

exports.gpList = async (req, res) => {
    const list = await Gp.find({}).populate({ path: 'col1 col2', populate: { path: 'user class' } }).lean();

    res.send(list);
}

exports.addGp = async (req, res) => {
    try {
        const { col1, col2 } = req.body;
        const result = await Gp.create({ col1, col2 });

        if (result) {
            res.send({ message: mAddGp.ok });
            return;
        }
        throw { message: mAddGp.fail, statusCode: 401 };
    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 422).json(err);
    }
}

exports.deleteGp = async (req, res) => {
    try {
        const { gp_id, colNumber } = req.body;
        let gp = await Gp.findOne({ _id: gp_id });

        let updateGp;
        if (colNumber == 1) {
            await Hero.updateMany({ _id: { $in: gp.col1 } }, { $set: { inFarm: false } });
            updateGp = await Gp.updateOne({ _id: gp_id }, { col1: null });
        } else {
            await Hero.updateMany({ _id: { $in: gp.col2 } }, { $set: { inFarm: false } });
            updateGp = await Gp.updateOne({ _id: gp_id }, { col2: null });
        }
        gp = await Gp.findOne({ _id: gp_id });

        if (!gp.col1 && !gp.col2) {
            await Gp.deleteOne({ _id: gp_id });
        }


        if (updateGp.modifiedCount == 1) {
            res.send({ message: mAddGp.ok });
            return;
        }
        throw { message: mAddGp.fail, statusCode: 401 };
    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 422).json(err);
    }
}

exports.addHeroToGp = async (req, res) => {
    try {
        const { hero_id, gp_id, colNumber } = req.body;

        const hero = await Hero.findOne({ _id: hero_id });
        const updateInfarm = await Hero.updateOne({ _id: hero_id }, { inFarm: true });

        let gp = await Gp.findOne({ _id: gp_id }).lean();
        let updateGp;

        if (colNumber == 1) {
            gp.col1.push(hero_id);
            updateGp = await Gp.updateOne({ _id: gp_id }, { col1: gp.col1 });
        } else {
            gp.col2.push(hero_id);
            updateGp = await Gp.updateOne({ _id: gp_id }, { col2: gp.col2 });
        }

        if (updateGp.modifiedCount == 1) {
            res.send({ message: mAddHeroToGp.ok });
            return;
        }
        throw { message: mAddHeroToGp.fail, statusCode: 401 };
    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 422).json(err);
    }
}

exports.deleteHeroFromGp = async (req, res) => {
    try {
        const { hero_id, gp_id, colNumber } = req.body;

        const hero = await Hero.findOne({ _id: hero_id });
        const updateInfarm = await Hero.updateOne({ _id: hero_id }, { inFarm: false });


        let gp = await Gp.findOne({ _id: gp_id }).lean();
        let updateGp;

        const indexToDelete = (array, id) => array.findIndex(item => item._id == id);

        if (colNumber == 1) {
            gp.col1.splice(indexToDelete(gp.col1, hero_id), 1);
            updateGp = await Gp.updateOne({ _id: gp_id }, { col1: gp.col1 });
        } else {
            gp.col2.splice(indexToDelete(gp.col1, hero_id), 1);
            updateGp = await Gp.updateOne({ _id: gp_id }, { col2: gp.col2 });
        }

        if (updateGp.modifiedCount == 1) {
            res.send({ message: mAddHeroToGp.ok });
            return;
        }
        throw { message: mAddHeroToGp.fail, statusCode: 401 };
    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 422).json(err);
    }
}