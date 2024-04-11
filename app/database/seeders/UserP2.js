const Hero = require('../models/Hero');
const User = require('../models/User');
const { green, red } = require('colors');

const seqNumber = 7;
const seed = async (app) => {

    const users = await User.find({});
    const heroList = await Hero.find({});
    await User.updateOne({ _id: users[0]._id }, { heroList })
    await console.log(`${red(seqNumber)} : ${green('UserP2 seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}