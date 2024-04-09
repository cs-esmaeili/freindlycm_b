const { post, get } = require("./httpServices");

exports.wowTokenPrice = (token) => {
    return get(`https://eu.api.blizzard.com/data/wow/token/index?namespace=dynamic-eu&locale=en_EU&access_token=${token}`);
};
