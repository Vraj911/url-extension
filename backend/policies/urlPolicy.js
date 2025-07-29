function validateUrlRequest(body) {
    if (!body.originalUrl) {
        throw new Error('Original URL is required');
    }
}
module.exports = { validateUrlRequest };
