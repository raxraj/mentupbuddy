import React, {Component} from 'react'

export class Signin extends Component {
    render() {
        return (
            <div>
                <div class="container my-5 px-0 z-depth-1">

                    <section class="p-5 my-md-5 text-center loginSec">

                        <form class="my-5 mx-md-5" action="">

                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <div class="card">

                                        <div class="card-body">

                                            <form class="text-center" action="#!">

                                                <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Sign in</h3>

                                                <input type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Email"/>

                                                <input type="password" id="defaultSubscriptionFormEmail" class="form-control" placeholder="Password"/>
                                            
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-info btn-rounded my-4 waves-effect">Log-in</button>
                                                </div>

                                            </form>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </form>

                    </section>


                </div>


            </div>
        )
    }
}

export default Signin
