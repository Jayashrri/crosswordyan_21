const express = require('express');
const router = express.Router();
const user = require('../controllers/user-controller');
const game = require('../controllers/game-controller');

// sessionChecker middlewares
let sessionChecker = (req, res, next) => {
    if (!req.session.user) {
      res.redirect('/login');
    } else {
      next()
    }
  }




// login

router.post('/login',user.loginUser);

// game
router.get('/game',sessionChecker,game.renderGrid);
router.post('/game',sessionChecker,user.saveGame);

// Completion Page
router.get('/afterGame',sessionChecker,user.renderAfterGame);  // url isnt that great plis change

// Scoreboard
router.get('/leaderboard',sessionChecker,user.renderLeaderboard);

// register
// router.get('/regUser',user.regUser);

module.exports = router;
