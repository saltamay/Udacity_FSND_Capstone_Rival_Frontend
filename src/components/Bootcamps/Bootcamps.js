import React from 'react';
import Bootcamp from '../Bootcamp/Bootcamp';
import Course from '../Course/Course';

export default function Bootcamps(props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 offset-md-1'>
          <h5 className='text-left pl-3'>Bootcamps</h5>
          {props.bootcamps.map(bootcamp => (
            <Bootcamp bootcamp={bootcamp} />
          ))}
        </div>
        <div className='col-md-4'>
          <h5 className='text-left pl-3'>Courses</h5>
          {props.courses.map(course => (
            <Course course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
