const express= require('express');
const router= express.Router();
const {generate} = require('../controller/controller.js');
const Url = require('../models/url.js');
router.post('/', generate);
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
module.exports = router;
