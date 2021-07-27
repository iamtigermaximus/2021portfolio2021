import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
    return (
          <>
             <div className="navigation">
               <Navigation/>
           </div>
           <div className="mobile-navigation">
               <MobileNavigation/>
           </div>
          </>
                
      
    )
}

export default Navbar
