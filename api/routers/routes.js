const express = require('express');
const router = express.Router();
const user = require('../controllers/user-controller');

router.get('/status',(req,res)=>{
    res.json({msg: "Api running"});
})

router.get('/regUser',user.regUser);

module.exports = router;