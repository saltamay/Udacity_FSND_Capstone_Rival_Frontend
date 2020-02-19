import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import BootcampCard from '../BootcampCard/BootcampCard';
import CourseCard from '../CourseCard/CourseCard';

export default function Bootcamps(props) {
  const { getTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  useEffect(() => {
    getTokenSilently().then(token => {
      if (token) {
        console.log(token);
        setToken(token);
      }
    });
  });
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 offset-md-1'>
          <h5 className='text-left pl-3 mb-3'>Bootcamps</h5>
          {props.bootcamps
            .sort((a, b) => b.upvotes - a.upvotes)
            .map(bootcamp => (
              <BootcampCard
                key={bootcamp.id}
                bootcamp={bootcamp}
                token={token}
                role={props.role}
              />
            ))}
        </div>
        <div className='col-md-4'>
          <h5 className='text-left pl-3 mb-3'>Courses</h5>
          {props.courses
            .sort((a, b) => b.upvotes - a.upvotes)
            .map(course => {
              const bootcamp = props.bootcamps.filter(
                bootcamp => bootcamp.id === course['bootcamp_id']
              );
              return (
                <CourseCard
                  key={course.id}
                  course={course}
                  token={token}
                  bootcamp={bootcamp[0]}
                  role={props.role}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
