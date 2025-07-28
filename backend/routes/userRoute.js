const express= require('express');
const router= express.Router();
const {generate} = require('../controller/controller.js');
const Url = require('../models/url.js');
const Review = require('../models/review.js');
const Stats = require('../models/stats.js');
router.post('/', generate);
router.get('/', (req, res) => {
    res.send("URL Shortener Backend is working ✅");
});
router.get('/stats', async (req, res) => {
    try {
        const stats = await Stats.findOne();
        if (!stats) {
            return res.status(404).json({ error: 'Statistics not found' });
        }
 const avgClicks = stats.totalUrls > 0
    ? Math.round(stats.totalClicks / stats.totalUrls)
    : 0;
            res.json({
            totalUrls: stats.totalUrls,
            totalUsers: stats.totalUsers,
            avgClicks: avgClicks
            });
    } catch (error) {
        console.error("Error fetching stats:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/getreviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 }); 
        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl;

    const entry = await Url.findOneAndUpdate(
        { shortUrl },
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true }
    );
    if (!entry) {
        return res.status(404).send('Short URL not found');
    }
try {
        const stats = await Stats.findOne();
        if (stats) {
            stats.totalClicks += 1;
            await stats.save();
        }
    } catch (err) {
        console.error("Failed to update totalClicks", err);
    }
    res.redirect(entry.redirectURL); 
});

router.post('/getshorturl', async (req, res) => {
  let originalUrl  = req.body.originalUrl;

  if (!originalUrl) return res.status(400).json({ error: "Original URL is required" });

  originalUrl = decodeURIComponent(originalUrl);

  console.log("🔍 Received originalUrl:", originalUrl);

  try {
    const entry = await Url.findOne({ originalUrl });

    if (!entry) {
      console.log("❌ No match found in DB for:", originalUrl);
      return res.status(404).json({ error: "URL not found" });
    }

    return res.json({ shortUrl: entry.shortUrl });
  } catch (error) {
    console.error("Error fetching short URL:", error);
    return res.status(500).json({ error: "Server error" });
  }
});
router.post('/review', async (req, res) => {
    const { name, email, review } = req.body;

    if (!name || !email || !review) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newReview = new Review({ name, email, review });
        await newReview.save();

        console.log("Review submitted:", { name, email, review });
        res.status(200).json({ message: "Review submitted successfully" });
    } catch (error) {
        console.error("Error handling review submission:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
