import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md  fixed-top'>
      <div className='container'>
        <Link className='navbar-brand p-3 text-danger font-weight-bold' to='/'>
          RIVAL
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <button type='button' className='btn btn-outline-dark mr-2 p-0'>
                <Link className='nav-link text-dark' to='/login'>
                  <i className='fas fa-sign-in-alt'></i> LOGIN
                </Link>
              </button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-danger mr-2 p-0'>
                <Link className='nav-link text-white' href='/register'>
                  <i className='fas fa-user-plus'></i> SIGN UP
                </Link>
              </button>
            </li>
            {/* <li className='nav-item d-none d-sm-block'>
              <a className='nav-link' href='#'>
                |
              </a>
            </li> */}
            <li className='nav-item'>
              <button type='button' className='btn btn-outline-light p-0'>
                <Link className='nav-link text-dark' to='/bootcamps'>
                  BROWSE
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
