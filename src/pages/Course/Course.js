import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Course(props) {
  const { id } = props.location.state;
  const { role, token, handleCourseDelete } = props;
  const history = useHistory();
  const handleRouteChange = () => {
    history.push('/');
  };

  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/courses/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setCourse(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   // Todo: fetch(`http://localhost:5000/api/v1/bootcamps/${id}/courses`)
  //   fetch(`http://localhost:5000/api/v1/courses`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => setCourses(res.data))
  //     .catch(err => console.log(err));
  // }, []);

  const handleDelete = () => {
    fetch(`http://localhost:5000/api/v1/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          handleCourseDelete(id);
          handleRouteChange();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p className='lead mb-2'>
            Tuition: <span className='text-primary'>${course.tuition}</span>
          </p>
          <p className='lead mb-2'>
            Duration:{' '}
            <span className='text-primary'>{course.duration} weeks</span>
          </p>
          <p className='lead mb-4'>
            Minimum Skill Required:{' '}
            <span className='text-primary'>
              {course['scholarships_available'] ? 'Available' : 'Not Available'}
            </span>
          </p>
          <p className='lead mb-4'>
            Minimum Skill Required:{' '}
            <span className='text-primary'>{course['minimum_skill']}</span>
          </p>
        </div>
        <div className='col-md-4'>
          {/* <img src='img/image_1.jpg' className='img-thumbnail' alt='' /> */}
          <h1 className='text-center my-4'>
            <span className='badge badge-secondary badge-success rounded-circle p-3'>
              8.8
            </span>{' '}
            Rating
          </h1>
          {role === 'admin' && (
            <React.Fragment>
              <Link to='#' className='btn btn-info btn-block my-3'>
                Edit Course
              </Link>
              <button
                className='btn btn-danger btn-block my-3'
                onClick={handleDelete}
              >
                Delete Course
              </button>
            </React.Fragment>
          )}
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
          {/* <a
            href={`//${bootcamp.website}`}
            target='_blank'
            className='btn btn-secondary btn-block my-3'
          >
            Visit Website
          </a> */}
          {/* <div id='map' style={{ width: '100%', height: 300 }}></div> */}
        </div>
      </div>
    </div>
  );
}
