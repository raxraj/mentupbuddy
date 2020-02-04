const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
var cors = require('cors')

dotenv.config();


let app = express()
// MIDDLE WARE
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())
app.use(cors())
// MIDDLE WARE

// Connect to Mongo
try {
    mongoose.connect(process.env.MONGO_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to Mongo DB");
    })
} catch (error) {
    console.error(error);
}
// Connect to Mongo


// COLLECTIONS
let questionsCollection = require('./models/Questions')
let answerCollection = require('./models/Answers')
// COLLECTIONS

app.post('/upvoteQuestion',(req,res)=>{
    questionsCollection.findById(req.body.question).then(doc=>{
        doc.upvotes +=1;
        doc.save().then(question=>{
            console.log('Upvoted');
            res.send({message:'done'})
        })
    })
})

app.post('/downvoteQuestion',(req,res)=>{
    questionsCollection.findById(req.body.question).then(doc=>{
        doc.downvotes +=1;
        doc.save().then(question=>{
            console.log('Downvotes');
            res.send({message:'done'})
        })
    })
})

app.post('/getAnswers' ,(req,res)=>{
    answerCollection.find({question : req.body.question}).then(docs=>{
        res.send(docs)
    })
})

app.post('/addAnswer',(req,res)=>{
    questionsCollection.findById(req.body.question).then((doc)=>{
        new answerCollection(req.body).save().then(answer=>{
            doc.answers.push(answer._id)
            doc.save().then(answers=>{
                console.log('ADDED');
                res.send({message:'done'})
            })
        })
    })
})


app.post('/askQuestion', (req, res) => {
    req.body.tags = (req.body.tags).split(",")
    new questionsCollection(req.body).save().then((docs,err) => {
        if (err) {
            console.log(err);

        } else {
            res.send({message: 'done'})
        }
    })
})

app.get('/getQuestions', (req, res) => {
    questionsCollection.find({}).then((docs) => {
        res.send(docs)
    })
})

app.listen(8080 || process.env.PORT, () => {
    console.log("I am listening on PORT 8080");
})
