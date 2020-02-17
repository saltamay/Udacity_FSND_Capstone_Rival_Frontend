import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          <nav className='navbar navbar-expand-md navbar-light mb-5'>
            <Link
              className='navbar-brand p-3 text-danger font-weight-bold'
              to='/'
            >
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

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary mr-2 p-0'
                  >
                    <Link className='nav-link text-dark' to='/login'>
                      <i className='fas fa-sign-in-alt'></i> LOGIN
                    </Link>
                  </button>
                </li>
                <li className='nav-item'>
                  <button type='button' className='btn btn-danger mr-2 p-0'>
                    <Link className='nav-link text-white' to='/signup'>
                      <i className='fas fa-user-plus'></i> SIGN UP
                    </Link>
                  </button>
                </li>
                <li className='nav-item'>
                  <button type='button' className='btn btn-outline-light p-0'>
                    <Link className='nav-link text-dark' to='/bootcamps'>
                      BROWSE
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
