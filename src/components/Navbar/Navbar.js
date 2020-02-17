import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
                {!isAuthenticated && (
                  <li className='nav-item'>
                    <button
                      type='button'
                      className='btn btn-outline-secondary mr-2 p-0'
                    >
                      <Link className='nav-link text-dark' to='/login'>
                        <i className='fas fa-sign-in-alt'></i> SIGN UP
                      </Link>
                    </button>
                  </li>
                )}
                {!isAuthenticated && (
                  <li className='nav-item'>
                    <button
                      type='button'
                      className='btn btn-danger mr-2 p-2'
                      onClick={() => loginWithRedirect({})}
                    >
                      {/* <Link className='nav-link text-white' to='/signup'>
                        <i className='fas fa-user-plus'></i> SIGN UP
                      </Link> */}
                      LOG IN
                    </button>
                  </li>
                )}
                {isAuthenticated && (
                  <li className='nav-item'>
                    <button
                      type='button'
                      className='btn btn-outline-secondary p-2 text-dark'
                      onClick={() => logout()}
                    >
                      {/* <Link className='nav-link text-dark' to='/bootcamps'>
                      LOGOUT
                    </Link> */}
                      LOGOUT
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
