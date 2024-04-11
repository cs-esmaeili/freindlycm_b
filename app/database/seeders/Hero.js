const Hero = require('../models/Hero');
const Class = require('../models/Class');
const User = require('../models/User');
const { green, red } = require('colors');

const seqNumber = 4;
const seed = async (app) => {

    const heroNames = ['sonyang-kazzak', 'holytruck-kazzak', 'ghorme-kazzak'];

    const classList = await Class.find({});
    const users = await User.find({});

    for (let index = 0; index < heroNames.length; index++) {
        await Hero.create({ user: users[0], name: heroNames[index], class: classList[index], inFarm: index % 2 == 0 });
    }
    await console.log(`${red(seqNumber)} : ${green('Hero seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}