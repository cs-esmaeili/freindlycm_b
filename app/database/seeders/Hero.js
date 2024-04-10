const Hero = require('../models/Hero');
const Class = require('../models/Class');
const { green, red } = require('colors');

const seqNumber = 3;
const seed = async (app) => {

    const heroNames = ['sonyang-kazzak', 'holytruck-kazzak', 'ghorme-kazzak'];

    const classList = await Class.find({});

    for (let index = 0; index < heroNames.length; index++) {
        await Hero.create({ name: heroNames[index], class: classList[index]});

    }
    await console.log(`${red(seqNumber)} : ${green('Hero seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}