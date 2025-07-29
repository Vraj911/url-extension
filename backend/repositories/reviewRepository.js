const Review = require('../models/review');
async function getAllReviews() {
    return await Review.find().sort({ createdAt: -1 });
}
async function createReview(data) {
    const review = new Review(data);
    return await review.save();
}
module.exports = { 
    getAllReviews, 
    createReview,
    getReviews: getAllReviews 
};
