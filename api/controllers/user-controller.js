const User = require('../models/User');
const signale = require('signale');
const spawn = require("child_process").spawn;


exports.renderLoginform = (req,res) => {
    res.render("login");
}

exports.loginUser = (req,res) => {
     // user registration function
     let username=req.body.webmail;
     let password= req.body.password;
     signale.info(username);
     signale.info(password);

    const pythonProcess = spawn('python', ["./checkCredentialsWebmail.py", username, password]);
    pythonProcess.stdout.on('data', (data) => {
        // console.log(data.toString());
        if (data.toString() == 0) {
            signale.note("****Wrong Credentials!****");
            return res.redirect('/login')
        }
        else {
            signale.note("****Credentials are correct!****");
            req.session.user = {
                name: username
            }
            return res.redirect(`/user/game`);
        }
    })
}

exports.renderGame = (req,res) => {
    res.render("Game");
}

exports.renderAfterGame = (req,res) => {
    res.render('AfterGame');
}

exports.saveGame = (req,res) => {
    signale.success("Game saved");
}

exports.renderLeaderboard = (req,res) => {
    res.render('Leaderboard');
}