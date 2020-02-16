import React from 'react';
import BootcampCard from '../BootcampCard/BootcampCard';
import CourseCard from '../CourseCard/CourseCard';

export default function Bootcamps(props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 offset-md-1'>
          <h5 className='text-left pl-3 mb-3'>Bootcamps</h5>
          {props.bootcamps.map(bootcamp => (
            <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
          ))}
        </div>
        <div className='col-md-4'>
          <h5 className='text-left pl-3 mb-3'>Courses</h5>
          {props.courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
