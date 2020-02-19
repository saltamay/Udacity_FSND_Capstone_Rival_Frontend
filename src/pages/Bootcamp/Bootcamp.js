import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import CourseDetails from '../../components/CourseDetails/CourseDetails';
import './Bootcamp.css';

export default function Bootcamp(props) {
  const { role, handleBootcampDelete } = props;
  const { id, token } = props.location.state;
  const history = useHistory();

  const handleRouteChange = () => {
    history.push('/');
  };

  const [bootcamp, setBootcamp] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/bootcamps/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => setBootcamp(res.data))
      .catch(err => console.log(err));
  }, []);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/bootcamps/${id}/courses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) setCourses(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:5000/api/v1/bootcamps/${bootcamp.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          handleBootcampDelete(bootcamp.id);
          handleRouteChange();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>{bootcamp.name}</h1>
          <p>{bootcamp.description}</p>
          <p className='lead mb-2'>
            Average Course Cost: <span className='text-primary'>$10,000</span>
          </p>
          <p className='lead mb-4'>
            Job Assistance:{' '}
            <span className='text-primary'>
              {bootcamp['job_assistance'] ? 'Available' : 'Not Available'}
            </span>
          </p>
          {courses.map(course => (
            <CourseDetails key={course.id} course={course} />
          ))}
        </div>
        <div className='col-md-4'>
          <img
            src={`/assets/${bootcamp['img_url']}`}
            className='img-thumbnail'
            alt='...'
          />
          <h1 className='text-center my-4'>
            <span className='badge badge-secondary badge-success rounded-circle p-3'>
              {bootcamp.upvotes}
            </span>{' '}
            Rating
          </h1>
          {role === 'admin' && bootcamp.name ? (
            <React.Fragment>
              <Link
                to={{
                  pathname: `/edit-bootcamp/${bootcamp.name
                    .split(' ')
                    .join('-')
                    .toLowerCase()}`,
                  state: {
                    bootcamp: bootcamp
                  }
                }}
                className='btn btn-info btn-block my-3'
              >
                Edit Bootcamp
              </Link>
              <button
                className='btn btn-danger btn-block my-3'
                onClick={handleDelete}
              >
                Delete Bootcamp
              </button>
              <Link to='/add-course' className='btn btn-success btn-block my-3'>
                Add Course
              </Link>
            </React.Fragment>
          ) : null}
          {role === 'user' && (
            <React.Fragment>
              <Link to='#' className='btn btn-dark btn-block my-3'>
                Read Reviews
              </Link>
              <Link to='#' className='btn btn-light btn-block my-3'>
                <i className='fas fa-pencil-alt'></i> Write a Review
              </Link>
            </React.Fragment>
          )}
          <a
            href={`//${bootcamp.website}`}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-secondary btn-block my-3'
          >
            Visit Website
          </a>
          {/* <div id='map' style={{ width: '100%', height: 300 }}></div> */}
        </div>
      </div>
    </div>
  );
}
