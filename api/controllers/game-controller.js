const Grid = require('../models/Grid');
const Word = require('../models/Word');
const User = require('../models/User');

const signale = require('signale');

exports.renderGrid = async (req, res) => {
    try {
        const gridId = 0;
        const user = await User.findOne({ username: req.session.user.name });
        const grid = await Grid.findOne({ id: gridId });
        const wordSet = await Word.find({ gridId: gridId }).select('-gridId -word -__v');

        return res.render('Game', {
            grid: JSON.parse(grid.data),
            words: wordSet,
            completed: user.completed
        });

    } catch (err) {
        signale.error(err);
        return res.redirect('/login');
    }
}