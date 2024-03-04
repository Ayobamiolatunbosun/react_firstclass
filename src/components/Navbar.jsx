// const Navbar = () => {
//     return (
//         <div>
//         <p>I am a Nav</p>
//         </div>
//     )
// }

// export default Navbar

import "../styles/navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    
    <nav>
        <div className="nav1">
            <img className='logo' src="/assets/logo.jpg" alt="" />
        </div>
        <div className="nav2">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contacts</a>
        </div>

      
        <div className="nav3">
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-solid fa-phone"></i>
        </div>
    </nav>
  )
}

export default Navbar
