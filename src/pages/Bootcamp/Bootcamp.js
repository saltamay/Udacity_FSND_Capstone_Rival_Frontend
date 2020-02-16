import React, { useState, useEffect } from 'react';
import CourseDetails from '../../components/CourseDetails/CourseDetails';

export default function Bootcamp(props) {
  const { id } = props.location.state;

  const [bootcamp, setBootcamp] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/bootcamps/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setBootcamp(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Todo: fetch(`http://localhost:5000/api/v1/bootcamps/${id}/courses`)
    fetch(`http://localhost:5000/api/v1/courses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>{bootcamp.name}</h1>
          <p>{bootcamp.description}</p>
          <p className='lead mb-4'>
            Average Course Cost: <span className='text-primary'>$10,000</span>
          </p>
          {courses.map(course => (
            <CourseDetails key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
