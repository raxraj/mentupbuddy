import React, { Component } from 'react'

import Questions from '../components/Questions'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="text-primary">Questions</h1>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-5 mt-3 text-right">
                            <button className="btn btn-sm btn-light mr-1">Startup</button>
                            <button className="btn btn-sm btn-light mr-1">industry</button>
                            <button className="btn btn-sm btn-light mr-1">gst</button>
                        </div>
                    </div>
                    <hr/>
                    <Questions/>
                </div>

            </div>
        )
    }
}

export default Home
