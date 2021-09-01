import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top shadow-lg">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-brand-link" to="/"> SIEGFRED GAMBOA</Link>
                </div>
                <div className="navlinks">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/portfolio">Portfolio</Link>
                     </li>
                    <li className="nav-link">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation
