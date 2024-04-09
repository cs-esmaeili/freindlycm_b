const { getAccessToken } = require('../requests/BlizzardAuth');
const { bold } = require('colors');

exports.blizzardLogIn = async () => {
    try {
        const { data } = await getAccessToken();
        global.accessToken = data.access_token;
        await console.log(bold('Blizzard logIn successful'));
    } catch (error) {
        console.log("Blizzard logIn failed");
    }
}