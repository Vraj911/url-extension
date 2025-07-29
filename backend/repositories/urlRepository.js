const Url = require('../models/url.js');
async function createUrl(data) {
    return await Url.create({ ...data, redirectURL: data.originalUrl, visitHistory: [] });
}
async function updateVisitHistory(shortUrl) {
    return await Url.findOneAndUpdate(
        { shortUrl },
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true }
    );
}
async function findByOriginalUrl(originalUrl) {
    return await Url.findOne({ originalUrl });
}

module.exports = { createUrl, updateVisitHistory, findByOriginalUrl };
