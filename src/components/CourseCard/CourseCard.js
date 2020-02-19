import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';

export default function CourseCard(props) {
  const { title, upvotes } = props.course;
  const { name } = props.bootcamp;
  return (
    <div className='col-md'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-9'>
            <div className='card-body'>
              <h5 className='card-title'>
                <Link
                  to={{
                    pathname: `/courses/${props.course.title
                      .split(' ')
                      .join('-')
                      .toLowerCase()}`,
                    state: {
                      course: props.course
                    }
                  }}
                  className='text-dark font-weight-bold'
                >
                  {title}
                </Link>
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
