import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Tooltip} from "./Navbar.styled";

import {StorageContext} from '../contexts/StorageContext'
import User from "../data/User";

export default function Navbar() {
  const {userData, isAuthenticated, setIsAuthenticated} = useContext(StorageContext)

    function Logout() {
      User.removeToken();
      setIsAuthenticated(false);
    }

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

          {
            !isAuthenticated && 
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Login</Link>
            </li>
          }

          <li className='nav-item'>
            <Link to='/home' className='nav-link'>Home</Link>
          </li>

          {
            isAuthenticated &&  
            <li className='nav-item'>
              <Link to='/addCustomer' className='nav-link'>Add customer</Link>
            </li>
          }
          
        </ul>
        {
          isAuthenticated &&
          <>
              <div className='nav-item'>
                  <span className='nav-item'><Tooltip content={userData.email}>Welcome {userData.firstName} {userData.lastName}</Tooltip></span>
              </div>
              <div className="nav-item">
                  <button className='nav-item btn btn-primary ml-2' onClick={Logout} >Logout</button>
              </div>
          </>
        }
      </div>
      
    </nav>
  )
}