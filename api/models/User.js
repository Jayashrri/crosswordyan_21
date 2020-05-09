const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
     username:String,
     password:String,
     gameStatus:{
         type:Boolean,
         default: false
     },
     score:Number

})


module.exports = mongoose.model('user', UserSchema);