import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'


const MobileNavigation = () => {
    const [sidebar, setSidebar]=useState(false)

    const hideSidebar = ()=> setSidebar(!sidebar)
    return (
            <div className="mobile-navigation bg-primary">
                <Menu right width={'50%'} isOpen={hideSidebar}>
            <div className="nav-links">
                <ul className="navbar-nav ms-auto" onClick={hideSidebar} >
                    <li className="nav-link" >
                        <Link to="/" >Home</Link>
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
            </Menu>
           
            </div>
               
    )
}

export default MobileNavigation
