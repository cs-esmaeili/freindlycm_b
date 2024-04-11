const Hero = require('../models/Hero');
const User = require('../models/User');
const { green, red } = require('colors');

const seqNumber = 3;
const seed = async (app) => {

    const userNames = ['javad', 'amin', 'abolfazl'];

    // const heroList = await Hero.find({});

    for (let index = 0; index < userNames.length; index++) {
        await User.create({ name: userNames[index], heroList: [], leader: (index % 2 == 0) ? 1 : 3 });

    }
    await console.log(`${red(seqNumber)} : ${green('User seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}