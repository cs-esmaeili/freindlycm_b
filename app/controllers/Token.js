const { wowTokenPrice } = require('../requests/wowToken');
const Token = require('../database/models/Token');
const { utcToJalali } = require('../utils/TimeConverter');
const { red } = require('colors');

const deleteExpiredTokenPrice = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const query = { createdAt: { $lt: utcToJalali(sevenDaysAgo) } };
    await Token.deleteMany(query).exec();
}

exports.getTokenPriceFromBlizzard = async () => {
    try {
        const { data } = await wowTokenPrice(global.accessToken);
        let price = (data.price + "").substring(0, 3);

        const lastPrice = await Token.findOne().sort({ createdAt: -1 }).exec();

        await deleteExpiredTokenPrice();
        if (lastPrice == null || price != lastPrice.token) {
            await Token.create({ token: price, change: (!lastPrice ? true : price < lastPrice.token) });
            return true;
        }
    } catch (error) {
        console.log(error);
        console.log(red("Failed to get TokenPrice"));
        return false;
    }
}

exports.tokenPriceList = async (req, res) => {
    const list = (await Token.find({})).reverse();
    return list;
}