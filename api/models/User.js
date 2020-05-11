const mongoose = require('mongoose');
const word = require('./Word');

const UserSchema = mongoose.Schema ({
     username: String,
     score: {
        type: Number,
        default: 0
     },
     lastUpdated: Date,
     completed: [{
          type:mongoose.Schema.Types.ObjectId,
          ref:'word'
     }]
})


module.exports = mongoose.model('user', UserSchema);
