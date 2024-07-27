const express = require('express');
const trackController = require('../controllers/trackController');

const router = express.Router();

router.post('/', trackController.createTrack);
router.get('/', trackController.getTracks);
router.get('/:id', trackController.getTrackById);
router.put('/:id', trackController.updateTrack);
router.delete('/:id', trackController.deleteTrack);

module.exports = router;