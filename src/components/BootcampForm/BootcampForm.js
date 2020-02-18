import React, { useState } from 'react';

export default function BootcampForm({ token, handleBootcampSubmit }) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [description, setDescription] = useState();
  const [careers, setCareers] = useState();
  const [jobAssistance, setJobAssistance] = useState();

  const handleChange = e => {
    const query = e.target.value;
    const target = e.target.name;
    switch (target) {
      case 'name':
        setName(query);
        break;
      case 'address':
        setAddress(query);
        break;
      case 'phone':
        setPhone(query);
        break;
      case 'email':
        setEmail(query);
        break;
      case 'website':
        setWebsite(query);
        break;
      case 'description':
        setDescription(query);
        break;
      default:
        e.target.checked ? setJobAssistance(true) : setJobAssistance(false);
        break;
    }
  };

  const handleOptionsChange = e => {
    const options = e.target.options;
    const value = [];
    for (const option of options) {
      if (option.selected) value.push(option.value);
    }
    setCareers(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      description,
      website,
      phone,
      email,
      address,
      careers,
      jobAssistance
    };

    fetch('http://localhost:5000/api/v1/bootcamps', {
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
          handleBootcampSubmit(res.data);
        }
      });
  };

  return (
    <div className='container-fluid'>
      <h2 className='mb-3'>Add Bootcamp</h2>
      <form onSubmit={e => handleFormSubmit(e)}>
        <div className='row'>
          <div className='col-md-5 offset-md-1'>
            <div className='card bg-white py-2 px-4'>
              <div className='card-body'>
                <h3>Location & Contact</h3>
                <p className='text-muted'>
                  If multiple locations, use the main or largest
                </p>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Bootcamp Name'
                    required
                    value={name}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <label>Address</label>
                  <input
                    type='text'
                    name='address'
                    className='form-control'
                    placeholder='Full Address'
                    required
                    value={address}
                    onChange={e => handleChange(e)}
                  />
                  <small className='form-text text-muted'>
                    Street, city, state, etc
                  </small>
                </div>
                <div className='form-group'>
                  <label>Phone Number</label>
                  <input
                    type='text'
                    name='phone'
                    className='form-control'
                    placeholder='Phone'
                    value={phone}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Contact Email'
                    value={email}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <label>Website</label>
                  <input
                    type='text'
                    name='website'
                    className='form-control'
                    placeholder='Website URL'
                    value={website}
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='card bg-white py-2 px-4'>
              <div className='card-body'>
                <h3>Other Info</h3>
                <div className='form-group'>
                  <label>Description</label>
                  <textarea
                    name='description'
                    rows='5'
                    className='form-control'
                    placeholder='Description (What you offer, etc)'
                    maxLength='500'
                    value={description}
                    onChange={e => handleChange(e)}
                  ></textarea>
                  <small className='form-text text-muted'>
                    No more than 500 characters
                  </small>
                </div>
                <div className='form-group'>
                  <label>Careers</label>
                  <select
                    name='careers'
                    className='custom-select'
                    multiple
                    onChange={e => handleOptionsChange(e)}
                  >
                    <option defaultValue>Select all that apply</option>
                    <option value='Web Development'>Web Development</option>
                    <option value='Mobile Development'>
                      Mobile Development
                    </option>
                    <option value='UI/UX'>UI/UX</option>
                    <option value='Data Science'>Data Science</option>
                    <option value='Business'>Business</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='jobAssistance'
                    id='jobAssistance'
                    onChange={e => handleChange(e)}
                  />
                  <label className='form-check-label' htmlFor='jobAssistance'>
                    Job Assistance
                  </label>
                </div>
                {/* <p className='text-muted my-4'>
                  *After you add the bootcamp, you can add the specific courses
                  offered
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Submit Bootcamp'
            className='btn btn-danger my-4'
          />
        </div>
      </form>
    </div>
  );
}
