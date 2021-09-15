const mongoose = require('mongoose');
const wordsSchema = new mongoose.Schema({
    id: {
        type:String,
        required: true   
    },
    metadata: {
     type:Object
    },
    results:{
        type:Array,
        default:[]
    },
    word:{
        type:String,
        default:''
    }

})

module.exports = mongoose.model('Word', wordsSchema);