import React from 'react'
import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <div>
      
      <nav className='Nevbar'>
        <Link to ="/"><li>Home</li></Link>
        <Link to ="/Loging"><li>Loging</li></Link>
        <Link to ="/Users"><li>Users</li></Link>
      </nav>
    </div>
  )
} 

export default Navbar;

