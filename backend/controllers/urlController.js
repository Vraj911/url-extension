const urlService = require('../services/urlService.js');
const statsRepo = require('../repositories/statsRepository.js');
const reviewRepo = require('../repositories/reviewRepository.js');

async function generate(req, res) {
    try {
        const result = await urlService.generateUrl(req.body);
        res.json(result);
    } catch (error) {
        console.error("Generate URL Error:", error);
        res.status(400).json({ error: error.message });
    }
}

async function redirect(req, res) {
    try {
        const url = await urlService.getRedirectUrl(req.params.shortUrl);
        res.redirect(url);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function getStats(req, res) {
    try {
        const stats = await statsRepo.getStats();
        const avgClicks =
            stats.totalUrls > 0
                ? Math.round(stats.totalClicks / stats.totalUrls)
                : 0;
        res.json({
            totalUrls: stats.totalUrls,
            totalUsers: stats.totalUsers,
            avgClicks,
        });
    } catch (error) {
        console.error("Stats Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReviews(req, res) {
    try {
        const reviews = await reviewRepo.getReviews();
        res.json(reviews);
    } catch (error) {
        console.error("Reviews Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getShortUrl(req, res) {
    try {
        const { originalUrl } = req.body;
        const shortUrl = await urlService.getShortUrlByOriginal(originalUrl);
        res.json({ shortUrl });
    } catch (error) {
        console.error("Get Short URL Error:", error);
        res.status(error.code || 500).json({ error: error.message });
    }
}

async function submitReview(req, res) {
    try {
        const { name, email, review } = req.body;
        if (!name || !email || !review) {
            return res.status(400).json({ error: "All fields are required" });
        }
        await reviewRepo.createReview({ name, email, review });
        res.status(200).json({ message: "Review submitted successfully" });
    } catch (error) {
        console.error("Review Submission Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { 
    generate, 
    redirect, 
    getStats, 
    getReviews, 
    getShortUrl, 
    submitReview 
};
