import React, {Component} from 'react'
import axios from 'axios'

import SuccessAlert from '../components/SuccessAlert'

export class AskQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            tags: '',
            done: false
        }
        this.addQuestion = this.addQuestion.bind(this)
    }
    addQuestion() {
        axios.post('http://localhost:8080/askQuestion', {
            title: this.state.title,
            description: this.state.description,
            tags: this.state.tags
        }).then((res) => {
            if (res.data.message === 'done') {
                console.log(res);
                
                this.setState({done: true , title : '' , description:'',tags:''})

            }
        })
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="text-primary">Ask Question</h1>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-10">
                            <form className="border border-light p-5">

                                <p className="h4 mb-4 text-center">Write your Question</p>
                                <br/>
                                <SuccessAlert show={this.state.done} message='Your Question has been uploaded'></SuccessAlert>


                                <label htmlFor="textInput">Title</label>
                                <input type="text" id="title" name='title' className="form-control mb-4"
                                    value={
                                        this.state.title ? this.state.title : ''
                                    }
                                    onChange={
                                        event => this.setState({title: event.target.value})
                                    }
                                    placeholder="Enter your question Title here"/>

                                <label htmlFor="textarea">Description</label>
                                <textarea id="description" name='description' className="form-control mb-4"
                                    value={
                                        this.state.description ? this.state.description : ''
                                    }
                                    onChange={
                                        event => this.setState({description: event.target.value})
                                    }
                                    rows="10"
                                    placeholder="Describe your question"></textarea>

                                <label htmlFor="textInput">Tags</label>
                                <input type="text" id="tags" name='tags' className="form-control mb-4"
                                    value={
                                        this.state.tags ? this.state.tags : ''
                                    }
                                    onChange={
                                        event => this.setState({tags: event.target.value})
                                    }
                                    placeholder="Enter your tags in comma separated"/>
                                <button className="btn btn-info btn-block" type="button"
                                    onClick={
                                        this.addQuestion
                                }>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AskQuestion
