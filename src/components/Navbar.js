import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode==='dark' ? "dark" : "light"}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="form-check d-flex align-items-center">
                            <label htmlFor="" style={{ color: `${props.mode=='dark'?'white':'black'}` }}>Change Theme</label>
                            <div className="round-color theme-green"></div>
                            <div className="round-color theme-blue"></div>
                        </div>
                        <div className="form-check form-switch ms-2">
                            <label className={`form-check-label ${props.mode === 'dark'?'text-light':'text-dark'}`}  htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

// if props send which are in default props, then they will be rendered 
Navbar.defaultProps = {
    title: 'Set Title Here'
};

export default Navbar