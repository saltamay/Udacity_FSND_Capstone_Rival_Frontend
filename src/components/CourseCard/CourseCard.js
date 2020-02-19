import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';
import { useAuth0 } from '../../react-auth0-spa';

export default function CourseCard(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { id, title, upvotes } = props.course;
  const { name } = props.bootcamp;

  return (
    <div className='col-md'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-9'>
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
                      pathname: `/courses/${props.course.title
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
                    {title}
                  </Link>
                )}
              </h5>
              <span className='badge badge-danger mb-2'>{name}</span>
            </div>
          </div>
          <div className='col-md-3 d-flex align-items-center justify-content-center'>
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
