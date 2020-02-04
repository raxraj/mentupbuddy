const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let questionSchema = new Schema({
    title  : {
        type: String,
        required:true,
    },
    description  : {
        type: String,
        required:true,
    },
    upvotes  : {
        type: Number,
        required:true,
        default:0
    },
    downvotes  : {
        type: Number,
        required:true,
        default:0
    },
    tags  : [{
        type : String,
        required : true
    }],
    answers : [{
        type : String,
        required : true,
        default : []
    }]
})

const questionModel = mongoose.model('questions', questionSchema)

module.exports = questionModel