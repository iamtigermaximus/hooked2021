import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg  navbar-dark bg-dark shadow-lg'>
        <div className='container'>
          <Link className='navbar-brand-link' to='/'>
            HOOKED
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse mobile-navbar'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav ms-auto text-center'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/trending'>
                  {' '}
                  TRENDING
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/allmovies'>
                  ALL MOVIES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
