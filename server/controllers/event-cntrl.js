const Event = require('../models');

// controller for event

const eventController = {

    // crud routes for event
    createEvent({ body }, res) {
        Event.create(body)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(400).json(err));
    },
    getAllEvents(req, res) {
        Event.find({})
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(400).json(err));
    },
    getEventById({ params }, res) {
        Event.findOne({ _id: params.id })
            .then(dbEvent => {
                if (!dbEvent) {
                    res.status(404).json({ message: 'No event found with this id!' });
                    return;
                }
                res.json(dbEvent);
            })
            .catch(err => res.status(400).json(err));
    },
    updateEvent({ params, body }, res) {
        Event.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(dbEvent => {
                if (!dbEvent) {
                    res.status(404).json({ message: 'No event found with this id!' });
                    return;
                }
                res.json(dbEvent);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteEvent({ params }, res) {
        Event.findOneAndDelete({ _id: params.id })
            .then(dbEvent => {
                if (!dbEvent) {
                    res.status(404).json({ message: 'No event found with this id!' });
                    return;
                }
                res.json(dbEvent);
            })
            .catch(err => res.status(400).json(err));
    }
};