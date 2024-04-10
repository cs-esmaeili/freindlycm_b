const { getTokenPriceFromBlizzard, tokenPriceList } = require('../controllers/Token');

exports.wowTokenService = async () => {
    getTokenPriceFromBlizzard();
    setInterval(async () => {
        const needBroadCast = await getTokenPriceFromBlizzard();
        if (needBroadCast) {
            const tokenList = await tokenPriceList();
            global.io.emit("wowToken", tokenList);
            console.log('broadcast');
        }
    }, (1000 * 15));
}