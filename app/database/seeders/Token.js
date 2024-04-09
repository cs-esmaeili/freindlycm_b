const Token = require('../models/Token');
const { green, red } = require('colors');

const seqNumber = 1;
const seed = async (app) => {

    for (let index = 0; index < 10; index++) {

        // await Token.create({ token: 365, change: (index % 2 == 0) ? true : false })
    }
    await console.log(`${red(seqNumber)} : ${green('Token seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}