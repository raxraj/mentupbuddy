const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let answerSchema = new Schema({
    answer  : {
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
    question : {
        type : String,
        required : true
    }
})

const answerModel = mongoose.model('answers', answerSchema)

module.exports = answerModel