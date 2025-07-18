const mongoose = require('mongoose');
const statsSchema = new mongoose.Schema({
  totalUrls: {
    type: Number, default: 0
  },
    totalUsers: {   
    type: Number, default: 0
  },
  totalClicks: {
    type: Number, default: 0
  }
});
module.exports = mongoose.model('Stats', statsSchema);