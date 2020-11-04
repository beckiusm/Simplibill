import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import {TokenContext} from '../contexts/TokenContext'

export default function Navbar() {
  const {token} = useContext(TokenContext)
  console.log('token', token)

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <button className='navbar-toggler' 
              type='button' 
              data-toggle='collapse' 
              data-target='#navbarSupportedContent' 
              aria-controls='navbarSupportedContent' 
              aria-expanded='false' 
              aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      {/* Here comes the links */}
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>

          <li className='nav-item'>
            <Link to='/' className='nav-link'>Login</Link>
          </li>

          <li className='nav-item'>
            <Link to='/home' className='nav-link'>Home</Link>
          </li>
          
        </ul>
        {
          token && 
          <div className='nav-item'>
            <span className='nav-item'>Loggen in! (token)</span>
          </div>
        }
      </div>
      
    </nav>
  )
}