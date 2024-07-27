const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Track', TrackSchema);