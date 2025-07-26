const express= require('express');
const router= express.Router();
const {generate} = require('../controller/controller.js');
const Url = require('../models/url.js');
const Contact = require('../models/contact.js');
const Stats = require('../models/stats.js');
router.post('/', generate);
router.get('/', (req, res) => {
    res.send("URL Shortener Backend is working ✅");
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

    res.redirect(entry.redirectURL); 
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

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        
        console.log("Contact form submitted:", { name, email, message });
        res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.error("Error handling contact form:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports = router;
