import React from 'react';
import Bootcamp from '../Bootcamp/Bootcamp';

export default function Bootcamps(props) {
  return (
    <div className='container-fluid'>
      <div className='col-md-6 offset-md-1'>
        {props.bootcamps.map(bootcamp => (
          <Bootcamp bootcamp={bootcamp} />
        ))}
      </div>
    </div>
  );
}
