import React, { useState } from 'react';

export default function CourseForm() {
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [tuition, setTuition] = useState();
  const [description, setDescription] = useState();
  const [minimumSkill, setMinimumSkill] = useState('beginner');
  const [scholarshipAvailable, setScholarshipAvailable] = useState(false);

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
      default:
        e.target.checked
          ? setScholarshipAvailable(true)
          : setScholarshipAvailable(false);
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='container-fluid'>
      {/* <h1 class='mb-2'>DevWorks Bootcamp</h1> */}
      <h3 class='text-primary mb-4'>Add Course</h3>
      <form
        className='col-md-8 offset-md-2'
        onSubmit={e => handleFormSubmit(e)}
      >
        <div class='form-group'>
          <label>Course Title</label>
          <input
            type='text'
            name='title'
            class='form-control'
            placeholder='Title'
            value={title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div class='form-group'>
          <label>Duration</label>
          <input
            type='number'
            name='duration'
            placeholder='Duration'
            class='form-control'
            value={duration}
            onChange={e => handleChange(e)}
          />
          <small class='form-text text-muted'>
            Enter number of weeks course lasts
          </small>
        </div>
        <div class='form-group'>
          <label>Course Tuition</label>
          <input
            type='number'
            name='tuition'
            placeholder='Tuition'
            class='form-control'
            value={tuition}
            onChange={e => handleChange(e)}
          />
          <small class='form-text text-muted'>USD Currency</small>
        </div>
        <div class='form-group'>
          <label>Minimum Skill Required</label>
          <select
            name='minimumSkill'
            class='form-control'
            onChange={e => handleChange(e)}
          >
            <option value='beginner' defaultValue>
              Beginner (Any)
            </option>
            <option value='intermediate'>Intermediate</option>
            <option value='advanced'>Advanced</option>
          </select>
        </div>
        <div class='form-group'>
          <textarea
            name='description'
            rows='5'
            class='form-control'
            placeholder='Course description summary'
            maxLength='500'
            value={description}
            onChange={e => handleChange(e)}
          ></textarea>
          <small class='form-text text-muted'>
            No more than 500 characters
          </small>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='checkbox'
            name='scholarshipAvailable'
            id='scholarshipAvailable'
            onChange={e => handleChange(e)}
          />
          <label class='form-check-label' htmlFor='scholarshipAvailable'>
            Scholarship Available
          </label>
        </div>
        <div class='form-group mt-4'>
          <input type='submit' value='Add Course' class='btn btn-dark' />
        </div>
      </form>
    </div>
  );
}
