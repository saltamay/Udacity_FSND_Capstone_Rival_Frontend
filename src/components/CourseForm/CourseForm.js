import React, { useState } from 'react';

export default function CourseForm({ token, handleCourseSubmit }) {
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [tuition, setTuition] = useState();
  const [description, setDescription] = useState();
  const [minimumSkill, setMinimumSkill] = useState('beginner');
  const [scholarshipsAvailable, setScholarshipAvailable] = useState(false);

  const handleChange = e => {
    const query = e.target.value;
    const target = e.target.name;

    switch (target) {
      case 'title':
        setTitle(query);
        break;
      case 'duration':
        setDuration(query);
        break;
      case 'tuition':
        setTuition(query);
        break;
      case 'description':
        setDescription(query);
        break;
      case 'minimumSkill':
        setMinimumSkill(query);
        break;
      default:
        e.target.checked
          ? setScholarshipAvailable(true)
          : setScholarshipAvailable(false);
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      title,
      duration: parseInt(duration),
      tuition: parseInt(tuition),
      description,
      minimumSkill,
      scholarshipsAvailable
    };

    fetch('http://localhost:5000/api/v1/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          handleCourseSubmit(res.data);
        }
      });
  };

  return (
    <div className='container-fluid'>
      {/* <h1 class='mb-2'>DevWorks Bootcamp</h1> */}
      <h3 className='text-primary mb-4'>Add Course</h3>
      <form
        className='col-md-8 offset-md-2'
        onSubmit={e => handleFormSubmit(e)}
      >
        <div className='form-group'>
          <label>Course Title</label>
          <input
            type='text'
            name='title'
            className='form-control'
            placeholder='Title'
            value={title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Duration</label>
          <input
            type='number'
            name='duration'
            placeholder='Duration'
            className='form-control'
            value={duration}
            onChange={e => handleChange(e)}
          />
          <small className='form-text text-muted'>
            Enter number of weeks course lasts
          </small>
        </div>
        <div className='form-group'>
          <label>Course Tuition</label>
          <input
            type='number'
            name='tuition'
            placeholder='Tuition'
            className='form-control'
            value={tuition}
            onChange={e => handleChange(e)}
          />
          <small className='form-text text-muted'>USD Currency</small>
        </div>
        <div className='form-group'>
          <label>Minimum Skill Required</label>
          <select
            name='minimumSkill'
            className='form-control'
            value={minimumSkill}
            onChange={e => handleChange(e)}
          >
            <option value='beginner' defaultValue>
              Beginner (Any)
            </option>
            <option value='intermediate'>Intermediate</option>
            <option value='advanced'>Advanced</option>
          </select>
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            rows='5'
            className='form-control'
            placeholder='Course description summary'
            maxLength='500'
            value={description}
            onChange={e => handleChange(e)}
          ></textarea>
          <small className='form-text text-muted'>
            No more than 500 characters
          </small>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            name='scholarshipAvailable'
            id='scholarshipAvailable'
            onChange={e => handleChange(e)}
          />
          <label className='form-check-label' htmlFor='scholarshipAvailable'>
            Scholarship Available
          </label>
        </div>
        <div className='form-group mt-4'>
          <input type='submit' value='Add Course' className='btn btn-dark' />
        </div>
      </form>
    </div>
  );
}
