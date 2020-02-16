import React from 'react';

export default function CourseDetails(props) {
  const {
    title,
    description,
    duration,
    minimum_skill,
    scholarships_available
  } = props.course;
  // const tuition = props.course.tuition.toString();
  return (
    <div className='card mb-3'>
      <h5 className='card-header bg-primary text-white'>{title}</h5>
      <div className='card-body'>
        <h5 className='card-title'>Duration: {duration} Weeks</h5>
        <p className='card-text'>{description}</p>
        <ul className='list-group mb-3'>
          <li className='list-group-item'>Cost: $8,000 USD</li>
          <li className='list-group-item'>Skill Required: {minimum_skill}</li>
          <li className='list-group-item'>
            Scholarship Available: <i className='fas fa-check text-success'></i>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}