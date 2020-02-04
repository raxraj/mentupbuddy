import React from 'react'

export default function Navigation() {
    return (
        <div>
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color">
                <a className="navbar-brand" href="/">Mentup Buddy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ask">Ask Question</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signin">Sign in</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
