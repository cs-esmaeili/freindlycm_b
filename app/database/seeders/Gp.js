const Hero = require('../models/Hero');
const Gp = require('../models/Gp');
const { green, red } = require('colors');

const seqNumber = 6;
const seed = async (app) => {

    const heroList = await Hero.find({});

    await Gp.create({ col1: heroList.slice(0, 9), col2: heroList.slice(0, 9) });
    // for (let index = 0; index < 9; index++) {
    //     await Gp.create({ col1: heroList.slice(0, 9) });
    //     await Gp.create({ col1: heroList.slice(0, 9), col2: heroList.slice(0, 9) });
    //     await Gp.create({ col2: heroList.slice(0, 9) });
    // }
    await console.log(`${red(seqNumber)} : ${green('Gp seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}