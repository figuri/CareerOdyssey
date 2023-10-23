const News = require('../models');

// controller for news

const newsController = {
    // crud routes for news
    createNews({ body }, res) {
        News.create(body)
            .then(dbNews => res.json(dbNews))
            .catch(err => res.status(400).json(err));
    },
    getAllNews(req, res) {
        News.find({})
            .then(dbNews => res.json(dbNews))
            .catch(err => res.status(400).json(err));
    },
    getNewsById({ params }, res) {
        News.findOne({ _id: params.id })
            .then(dbNews => {
                if (!dbNews) {
                    res.status(404).json({ message: 'No news found with this id!' });
                    return;
                }
                res.json(dbNews);
            })
            .catch(err => res.status(400).json(err));
    },
    updateNews({ params, body }, res) {
        News.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(dbNews => {
                if (!dbNews) {
                    res.status(404).json({ message: 'No news found with this id!' });
                    return;
                }
                res.json(dbNews);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteNews({ params }, res) {
        News.findOneAndDelete({ _id: params.id })
            .then(dbNews => {
                if (!dbNews) {
                    res.status(404).json({ message: 'No news found with this id!' });
                    return;
                }
                res.json(dbNews);
            })
            .catch(err => res.status(400).json(err));
    }
};