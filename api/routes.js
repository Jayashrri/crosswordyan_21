const express = require('express');
const router = express.Router();

router.get('/status',(req,res)=>{
    res.json({msg: "Api running"});
})

module.exports = router;