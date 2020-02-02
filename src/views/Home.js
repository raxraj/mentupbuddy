import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="text-primary display-4">Questions</div>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-5 mt-3 text-right">
                            <button className="btn btn-sm btn-light mr-1">Startup</button>
                            <button className="btn btn-sm btn-light mr-1">industry</button>
                            <button className="btn btn-sm btn-light mr-1">gst</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="box qList">
                        {false?
                            <div className="text-center text-muted display-4">No Question</div> : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
