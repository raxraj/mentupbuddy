import React, {Component} from 'react'
import axios from 'axios'

import SuccessAlert from '../components/SuccessAlert'

export class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            answer: '',
            done: false,
            answers:[]
        }
        this.addAnswer = this.addAnswer.bind(this)
        this.loadAnswers = this.loadAnswers.bind(this)
        this.upvoteQuestion = this.upvoteQuestion.bind(this)
        this.downvoteQuestion = this.downvoteQuestion.bind(this)
    }

    loadAnswers() {
        const {data} = this.props.location
        axios.post('http://localhost:8080/getAnswers',{
            question : data._id
        }).then(res => {
            const answers = res.data
            console.log(res.data);
            this.setState({answers})
        })
    }

    addAnswer(){
        const {data} = this.props.location
        axios.post('http://localhost:8080/addAnswer', {
            question : data._id,
            answer: this.state.answer
        }).then((res) => {
            if (res.data.message === 'done') {
                console.log(res);
                
                this.setState({done: true , answer:'',})

            }
        })
    }

    upvoteQuestion(){
        const {data} = this.props.location
        axios.post('http://localhost:8080/upvoteQuestion', {
            question : data._id,
        }).then((res) => {
            if (res.data.message === 'done') {     
                this.props.location.data.upvotes +=1;           
                this.setState({done: false ,})

            }
        })
    }
    downvoteQuestion(){
        const {data} = this.props.location
        axios.post('http://localhost:8080/downvoteQuestion', {
            question : data._id,
        }).then((res) => {
            if (res.data.message === 'done') {     
                this.props.location.data.downvotes +=1;           
                this.setState({done: false ,})

            }
        })
    }

    render() {
        const {data} = this.props.location
        if (data) {
            return (
                <div>
                    <div className="container mt-5">

                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="">
                                    {
                                    data.title
                                }
                                    ?</h3>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-3 border-info border pt-4 mb-0">
                                <button className="btn btn-success" Style='width : 180px' onClick={this.upvoteQuestion}>UpVote <span class="badge badge-danger ml-2">{data.upvotes}</span> </button>
                                <button className="btn btn-danger" Style='width : 180px' onClick={this.downvoteQuestion}>Downvote <span class="badge badge-sucess ml-2">{data.downvotes}</span></button>
                            </div>
                            <div className=" col-md-9 border-info border mb-0 pl-3 jumbotron jumbotron-fluid">
                                <div>
                                    <p className="lead">
                                        <pre>
                                                {data.description}
                                            </pre>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <h3 className="text-primary">Answer</h3>
                        <hr/>
                        <SuccessAlert show={this.state.done} message='Your Answer has been uploaded'></SuccessAlert>
                        <label htmlFor="textarea">Your Answer below</label>
                        <textarea id="answer" name='answer' className="form-control mb-4"
                            value={
                                this.state.answer ? this.state.answer : ''
                            }
                            onChange={
                                event => this.setState({answer: event.target.value})
                            }
                            rows="5"
                            placeholder="Give Answer here"></textarea>
                            <button className="btn btn-success" type='button' onClick={this.addAnswer}>Submit Answer</button>
                    </div>
                    <hr/>
                    {this.loadAnswers()}
                    <div className="container">
                        <h3 className="text-primary">Answers Given</h3>
                        <hr/>
                        {this.state.answers.map(answer=>{ return(
                            <div className="row m-3">
                            <div className=" col-md-12 border-info border mb-0 pl-3 jumbotron jumbotron-fluid">
                                <div>
                                    <p className="lead">
                                        <pre>
                                                {answer.answer}
                                            </pre>
                                    </p>
                                </div>
                            </div>
                        </div>)
                        })}
                    </div>

                </div>
            )
        } else {
            return ''
        }
    }
}

export default Question
