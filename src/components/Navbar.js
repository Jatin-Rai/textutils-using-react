import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div className="container border-bottom px-2">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><i className="fas fa-copy">{props.title}</i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><i className="fas fa-home">Home</i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><i className="fas fa-about">{props.about}</i></a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control fas fa-search rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
                            {/* <button className="btn btn-secondary" type="submit"><i className="fas fa-search"></i></button> */}
                        </form>
                        {/* <div className="form-check form-switch mx-2">
                            <label className="form-check-label mx-1 text-white" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'TextUtils',
    about: 'About'
};