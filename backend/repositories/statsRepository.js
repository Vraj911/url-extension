const Stats = require('../models/stats');
async function incrementUrls() {
    await Stats.findOneAndUpdate({}, { $inc: { totalUrls: 1 } }, { upsert: true });
}
async function incrementClicks() {
    const stats = await Stats.findOne();
    if (stats) {
        stats.totalClicks += 1;
        await stats.save();
    }
}
async function getStats() {
    return await Stats.findOne();
}
async function incrementUsers() {
    let stats = await Stats.findOne();
    if (!stats) {
        stats = new Stats({ totalUsers: 1 });
    } else {
        stats.totalUsers += 1;
    }
    await stats.save();
}
module.exports = { incrementUrls, incrementClicks, getStats, incrementUsers };
