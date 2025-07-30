const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController.js');
/**
 * @swagger
 * tags:
 *   name: URL
 *   description: URL Shortener endpoints
 */
/**
 * @swagger
 * /url:
 *   post:
 *     summary: Generate a short URL
 *     tags: [URL]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - originalUrl
 *             properties:
 *               originalUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Short URL generated successfully
 */
router.post('/', urlController.generate);
/**
 * @swagger
 * /url:
 *   get:
 *     summary: Health check for URL service
 *     tags: [URL]
 *     responses:
 *       200:
 *         description: URL service is working
 */
router.get('/', (req, res) => res.send("URL Shortener Backend is working ✅"));
/**
 * @swagger
 * /url/stats:
 *   get:
 *     summary: Get platform statistics
 *     tags: [URL]
 *     responses:
 *       200:
 *         description: Returns total URLs, users, and average clicks
 */
router.get('/stats', urlController.getStats);
/**
 * @swagger
 * /url/getreviews:
 *   get:
 *     summary: Fetch all reviews
 *     tags: [Review]
 *     responses:
 *       200:
 *         description: List of all reviews
 */
router.get('/getreviews', urlController.getReviews);
/**
 * @swagger
 * /url/{shortUrl}:
 *   get:
 *     summary: Redirect using short URL
 *     tags: [URL]
 *     parameters:
 *       - in: path
 *         name: shortUrl
 *         schema:
 *           type: string
 *         required: true
 *         description: The short URL ID
 *     responses:
 *       302:
 *         description: Redirects to original URL
 *       404:
 *         description: Short URL not found
 */
router.get('/:shortUrl', urlController.redirect);
/**
 * @swagger
 * /url/getshorturl:
 *   post:
 *     summary: Retrieve short URL by original URL
 *     tags: [URL]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - originalUrl
 *             properties:
 *               originalUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Short URL retrieved successfully
 *       404:
 *         description: Original URL not found
 */
router.post('/getshorturl', urlController.getShortUrl);
/**
 * @swagger
 * /url/review:
 *   post:
 *     summary: Submit a review
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - review
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               review:
 *                 type: string
 *     responses:
 *       200:
 *         description: Review submitted successfully
 *       400:
 *         description: Validation error
 */
router.post('/review', urlController.submitReview);
module.exports = router;
