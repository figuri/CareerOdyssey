const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event-cntrl');

// define routes for event

// get all events
router.get('/', eventController.getAllEvents);

// get event by id
router.get('/:id', eventController.getEventById);

// create event
router.post('/', eventController.createEvent);

// update event
router.put('/:id', eventController.updateEvent);

// delete event
router.delete('/:id', eventController.deleteEvent);

module.exports = router;