import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';
import { useAuth0 } from '../../react-auth0-spa';

export default function Course(props) {
  const { title } = props.course;

  return (
    <div className='col-md'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-9'>
            <div className='card-body'>
              <h5 className='card-title'>
                <Link to='/bootcamps' className='text-dark font-weight-bold'>
                  {title}
                </Link>
              </h5>
              {/* <span className='badge badge-danger mb-2'>{address}</span>
              <p className='card-text'>{careers.join(', ')}</p> */}
            </div>
          </div>
          <div className='col-md-3 d-flex align-items-center justify-content-center'>
            <button type='button' className='btn btn-light pl-4 pr-4'>
              <FaCaretUp size={24} />
              <div>98</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
