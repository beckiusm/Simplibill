import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';

import {StorageContext} from '../contexts/StorageContext'

export default function Navbar() {
  const {userData, isAuthenticated} = useContext(StorageContext)
  console.log('token', userData)

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
            isAuthenticated &&
          <div className='nav-item'>
              <span className='nav-item'><span className='tooltip2' data-text={userData.email}>Welcome {userData.firstName} {userData.lastName}</span></span>
          </div>
        }
      </div>
      
    </nav>
  )
}