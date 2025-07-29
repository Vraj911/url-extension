const reviewRepo = require('../repositories/reviewRepository');
async function fetchReviews() {
    return await reviewRepo.getAllReviews();
}
async function addReview({ name, email, review }) {
    if (!name || !email || !review) throw new Error('All fields are required');
    await reviewRepo.createReview({ name, email, review });
}
module.exports = { fetchReviews, addReview };
