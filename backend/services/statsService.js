const statsRepo = require('../repositories/statsRepository');
async function getStats() {
    const stats = await statsRepo.getStats();
    if (!stats) throw new Error('Statistics not found');
    const avgClicks = stats.totalUrls > 0 ? Math.round(stats.totalClicks / stats.totalUrls) : 0;
    return {
        totalUrls: stats.totalUrls,
        totalUsers: stats.totalUsers,
        avgClicks
    };
}
module.exports = { getStats };
