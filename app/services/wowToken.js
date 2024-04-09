const { getTokenPriceFromBlizzard } = require('../controllers/Token');

exports.wowTokenService = async () => {
    getTokenPriceFromBlizzard();
    setInterval(() => {
        getTokenPriceFromBlizzard();
    }, (1000 * 60 * 5));
}