const { post, get } = require("./httpServices");
var querystring = require("querystring");

exports.getAccessToken = () => {
    try {
        const token = `${process.env.CLIENT_ID}:${process.env.SECRET_ID}`;
        const encodedToken = Buffer.from(token).toString('base64');

        return post(`https://oauth.battle.net/token`, querystring.stringify({ 'grant_type': 'client_credentials' }), {
            headers: { "Content-Type": "application/x-www-form-urlencoded", 'Authorization': 'Basic ' + encodedToken }
        });
    } catch (error) {
        console.log("Blizzard logIn failed");
    }
};
