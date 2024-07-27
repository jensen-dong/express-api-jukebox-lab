const Track = require('../models/Track');

// Create a new track
exports.createTrack = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const newTrack = new Track({ title, artist });
    await newTrack.save();
    res.status(201).json(newTrack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tracks
exports.getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single track
exports.getTrackById = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a track
exports.updateTrack = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const updatedTrack = await Track.findByIdAndUpdate(req.params.id, { title, artist }, { new: true });
    if (!updatedTrack) {
      return res.status(404).json({ error: 'Track not found' });
    }
    res.status(200).json(updatedTrack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a track
exports.deleteTrack = async (req, res) => {
  try {
    const deletedTrack = await Track.findByIdAndDelete(req.params.id);
    if (!deletedTrack) {
      return res.status(404).json({ error: 'Track not found' });
    }
    res.status(200).json(deletedTrack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};