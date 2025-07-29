const urlRepo = require('../repositories/urlRepository');
const statsRepo = require('../repositories/statsRepository');
async function generateUrl({ originalUrl }) {
    if (!originalUrl) throw new Error('Original URL is required');
    const { nanoid } = await import('nanoid');
    const shortUrl = nanoid(5);
    await urlRepo.createUrl({ originalUrl, shortUrl });
    await statsRepo.incrementUrls();
    return { id: shortUrl, originalUrl, redirectURL: originalUrl };
}
async function getRedirectUrl(shortUrl) {
    const entry = await urlRepo.updateVisitHistory(shortUrl);
    if (!entry) throw new Error('Short URL not found');
    await statsRepo.incrementClicks();
    return entry.redirectURL;
}
async function getShortUrlByOriginal(originalUrl) {
    if (!originalUrl) {
        const err = new Error('Original URL is required');
        err.code = 400;
        throw err;
    }
    const entry = await urlRepo.findByOriginalUrl(decodeURIComponent(originalUrl));
    if (!entry) {
        const err = new Error('URL not found');
        err.code = 404;
        throw err;
    }
    return entry.shortUrl;
}
module.exports = { generateUrl, getRedirectUrl, getShortUrlByOriginal };
