import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export class Questions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: []
        }
        
    }

    componentDidMount() {
        axios.get('http://localhost:8080/getQuestions').then(res => {
            const questions = res.data
            console.log(res.data);
            this.setState({questions})
        })
    }
    
        
    render() {
        function loadPage(){
            
        }

        if (this.state.questions.length !== 0) {
            return (
                <div> {
                    this.state.questions.map(question => {
                        return (
                            <div className="box mt-2 box-shadow">
                                <div className="row">
                                    <div className="col-md-2 p-4">
                                        <div class="badge text-center badge-success p-2 text-white text-center" Style=" width : 109px">
                                            {
                                            question.upvotes
                                        } Upvotes </div>
                                        <br/>
                                        <div class="badge badge-danger p-2 text-white text-center mt-1" Style="width : 109px">
                                            {
                                            question.downvotes
                                        } Downvotes</div>
                                        <div class="badge badge-light p-2 text-white text-center mt-1" Style="width : 109px">
                                            {question.answers.length} Answers
                                        </div>

                                    </div>
                                    <div className="col-md-8">
                                       <Link to={{pathname:'/question', data : question}}><h4 onClick={()=>{loadPage()}} className="mt-3 quesTitle text-info">
                                            {
                                            question.title.slice(0, 50)
                                        }
                                            {
                                            question.title.length > 50 ? '...' : '?'
                                        } </h4 ></Link>
                                        <div className="mt-1 text-muted">
                                            {
                                            question.description.slice(0, 100)
                                        }
                                            {
                                            question.description.length > 100 ? '...' : ''
                                        } </div>
                                        <div className="tags mt-1">
                                            {
                                            question.tags.map(tag => {
                                                return (
                                                    <span className="badge m-1 badge-dark">
                                                        {tag}</span>
                                                )
                                            })
                                        } </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } </div>
            )
        } else {
            return (
                <div>
                    <h3 className="text-muted">No Questions Found</h3>
                </div>
            )
        }
    }
}

export default Questions
