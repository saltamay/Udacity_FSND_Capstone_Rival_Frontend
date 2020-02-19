import React, { useState } from 'react';

export default function CourseForm(props) {
  console.log(props.location);
  const course = props.location ? props.location.state.course : null;

  const [title, setTitle] = useState(course ? course.title : '');
  const [duration, setDuration] = useState(course ? course.duration : null);
  const [tuition, setTuition] = useState(course ? course.tuition : null);
  const [description, setDescription] = useState(
    course ? course.description : ''
  );
  const [minimumSkill, setMinimumSkill] = useState(
    course ? course['minimum_skill'] : 'beginner'
  );
  const [scholarshipsAvailable, setScholarshipAvailable] = useState(
    course ? course['scholarships_available'] : false
  );
  const [bootcampId, setBootcampId] = useState(
    course ? course['bootcamp_id'] : null
  );

  const { token } = props;

  // useEffect(() => {
  //   if (props.location.state.course) {
  //     const {
  //       title,
  //       duration,
  //       tuition,
  //       description,
  //       minimum_skill,
  //       scholarships_available
  //     } = props.location.state.course;
  //     setTitle(title);
  //     setDuration(duration);
  //     setTuition(tuition);
  //     setDescription(description);
  //     setMinimumSkill(minimum_skill);
  //     setScholarshipAvailable(scholarships_available);
  //   }
  // }, []);

  const handleChange = e => {
    const query = e.target.value;
    const target = e.target.name;

    switch (target) {
      case 'bootcampId':
        setBootcampId(query);
        break;
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
      scholarshipsAvailable,
      bootcampId
    };

    if (course) {
      fetch(
        `http://localhost:5000/api/v1/courses/${props.location.state.course.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data)
        }
      )
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            props.handleCourseUpdate(res.data);
          }
        });
    } else {
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
            props.handleCourseSubmit(res.data);
          }
        });
    }
  };

  return (
    <div className='container-fluid'>
      {/* <h1 class='mb-2'>DevWorks Bootcamp</h1> */}
      <h3 className='text-primary mb-4'>Add Course</h3>
      <form
        className='col-md-8 offset-md-2'
        onSubmit={e => handleFormSubmit(e)}
      >
        {!course && (
          <div className='form-group'>
            <label>Bootcamp ID</label>
            <input
              type='number'
              name='bootcampId'
              className='form-control'
              placeholder='Bootcamp ID'
              value={bootcampId}
              onChange={e => handleChange(e)}
            />
          </div>
        )}
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
            defaultValue={minimumSkill}
            onChange={e => handleChange(e)}
          >
            <option value='beginner'>Beginner (Any)</option>
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
            checked={scholarshipsAvailable}
            id='scholarshipAvailable'
            onChange={e => handleChange(e)}
          />
          <label className='form-check-label' htmlFor='scholarshipAvailable'>
            Scholarship Available
          </label>
        </div>
        <div className='form-group mt-4'>
          {course ? (
            <input
              type='submit'
              value='Update Course'
              className='btn btn-dark'
            />
          ) : (
            <input type='submit' value='Add Course' className='btn btn-dark' />
          )}
        </div>
      </form>
    </div>
  );
}
