import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';

export default function Bootcamp(props) {
  const { name, address, careers } = props.bootcamp;

  return (
    <div className='col-md'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src='#' className='card-img' alt='...' />
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <h5 className='card-title'>
                <Link
                  to={{
                    pathname: `/bootcamps/${name
                      .split(' ')
                      .join('-')
                      .toLowerCase()}`,
                    state: {
                      bootcamp: props.bootcamp
                    }
                  }}
                  className='text-dark font-weight-bold'
                >
                  {name}
                </Link>
              </h5>
              <span className='badge badge-danger mb-2'>{address}</span>
              <p className='card-text'>{careers.join(', ')}</p>
            </div>
          </div>
          <div className='col-md-2 d-flex align-items-center justify-content-center'>
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
