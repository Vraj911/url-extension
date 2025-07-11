const Url = require('../models/url.js');
async function generate(req, res) {
    const { nanoid } = await import('nanoid'); 
    const body = req.body;
    if (!body.originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }
    const shortUrl = nanoid(5);
    await Url.create({ 
        originalUrl: body.originalUrl,
        shortUrl: shortUrl,
        redirectURL: body.originalUrl,
        visitHistory: []
    });
    return res.json({ id: shortUrl, originalUrl: body.originalUrl, redirectURL: body.url });
}
module.exports = { generate };
