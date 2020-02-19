import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';
import { useAuth0 } from '../../react-auth0-spa';

export default function Bootcamp(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { id, name, address, careers, upvotes, img_url } = props.bootcamp;

  return (
    <div className='col-md'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={`/assets/${img_url}`} className='card-img' alt='...' />
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <h5 className='card-title'>
                {!isAuthenticated ? (
                  <button
                    type='button'
                    className='btn btn-link text-dark font-weight-bold'
                    onClick={() => loginWithRedirect({})}
                  >
                    {name}
                  </button>
                ) : (
                  <Link
                    to={{
                      pathname: `/bootcamps/${name
                        .split(' ')
                        .join('-')
                        .toLowerCase()}`,
                      state: {
                        id: id,
                        token: props.token
                      }
                    }}
                    className='text-dark font-weight-bold'
                  >
                    {name}
                  </Link>
                )}
              </h5>
              <span className='badge badge-danger mb-2'>{address}</span>
              <p className='card-text'>{careers.join(', ')}</p>
            </div>
          </div>
          <div className='col-md-2 d-flex align-items-center justify-content-center'>
            {props.role === 'admin' ? (
              <button
                type='button'
                className='btn btn-light pl-4 pr-4'
                disabled
              >
                <React.Fragment>
                  <FaCaretUp size={24} />
                  <br />
                  {upvotes}
                </React.Fragment>
              </button>
            ) : (
              <button type='button' className='btn btn-light pl-4 pr-4'>
                <React.Fragment>
                  <FaCaretUp size={24} />
                  <br />
                  {upvotes}
                </React.Fragment>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
