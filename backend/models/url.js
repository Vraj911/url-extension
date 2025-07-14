const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const { type } = require('os');
const urlSchema = new mongoose.Schema({ 
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{timestamp:{type:Number, default: Date.now},
      }],
        createdAt: {
        type: Date,
        default: Date.now,
        expires: '7d' 
    }
});
const url= mongoose.model('Url', urlSchema);
module.exports = url;   