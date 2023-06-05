import React from 'react'
import styles from '../styles/Navbar.module.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} `}>
                <div className="container">
                    <NavLink className={`navbar-brand m-0 ${styles.logo}`} to="">LOGO</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className={`nav-item ${styles.nav}`}>
                                <NavLink className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" to="/">About me</NavLink>
                            </li>
                            <li className={`nav-item ${styles.nav}`}>
                                <NavLink className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} to="/skill">Skills</NavLink>
                            </li>
                            <li className={`nav-item ${styles.nav}`}>
                                <NavLink className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} to="/project">Project </NavLink>
                            </li>
                            <li className={`nav-item ${styles.nav}`}>
                                <NavLink className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className={`form-check form-switch`}>
                            <input className={`form-check-input ${styles.input} text-${props.mode==='dark'?'light':'dark'} `} type="checkbox"onClick={props.toggleMode} id="flexSwitchCheckDefault"/> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
