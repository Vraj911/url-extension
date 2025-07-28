const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    review: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Contact = mongoose.model('Review', reviewSchema,'review');
module.exports = Contact;