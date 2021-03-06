import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bootcamps from './components/Bootcamps/Bootcamps';
import Bootcamp from './pages/Bootcamp/Bootcamp';
import { useAuth0 } from './react-auth0-spa';
import BootcampForm from './components/BootcampForm/BootcampForm';
import CourseForm from './components/CourseForm/CourseForm';
import Course from './pages/Course/Course';

function App() {
  // eslint-disable-next-line
  const bootcampData = [
    {
      name: 'UofT SCS BootCamps',
      description:
        'University of Toronto School of Continuing Studies (UofT SCS) Boot Camps equip you with essential skills to help guide your path to success. With strategically engineered curricula, face-to-face interaction, and expert instructors, we provide an educational experience that will shape the future of your career.',
      website: 'bootcamp.learn.utoronto.ca',
      phone: '(647) 245-1020',
      email: 'bootcamp@trilogyed.com',
      address: '158 St George St, Toronto, ON M5S 2V8',
      careers: [
        'Coding',
        'Data Analytics',
        'Cybersecurity',
        'UX/UI',
        'FinTech'
      ],
      job_assistance: true
    },
    {
      name: 'Devworks Bootcamp',
      description:
        'Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer',
      website: 'https://devworks.com',
      phone: '(111) 111-1111',
      email: 'enroll@devworks.com',
      address: '233 Bay State Rd Boston MA 02215',
      careers: ['Web Development', 'UI/UX', 'Business'],
      job_assistance: false
    },
    {
      name: 'ModernTech Bootcamp',
      description:
        'ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX.',
      website: 'https://moderntech.com',
      phone: '(222) 222-2222',
      email: 'enroll@moderntech.com',
      address: '220 Pawtucket St, Lowell, MA 01854',
      careers: ['Web Development', 'UI/UX', 'Mobile Development'],
      job_assistance: true
    },
    {
      name: 'Codemasters',
      description:
        'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in full stack web development and data science.',
      website: 'https://codemasters.com',
      phone: '(333) 333-3333',
      email: 'enroll@codemasters.com',
      address: '85 South Prospect Street Burlington VT 05405',
      careers: ['Web Development', 'Data Science', 'Business'],
      job_assistance: false
    },
    {
      name: 'Devcentral Bootcamp',
      description:
        'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development',
      website: 'https://devcentral.com',
      phone: '(444) 444-4444',
      email: 'enroll@devcentral.com',
      address: '45 Upper College Rd Kingston RI 02881',
      careers: [
        'Mobile Development',
        'Web Development',
        'Data Science',
        'Business'
      ],
      job_assistance: true
    }
  ];
  // eslint-disable-next-line
  const courseData = [
    {
      title: 'Front End Web Development',
      description:
        'This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue',
      duration: 8,
      tuition: 8000,
      minimum_skill: 'beginner',
      scholarships_available: true
    },
    {
      title: 'Full Stack Web Development',
      description:
        'In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB',
      duration: 12,
      tuition: 10000,
      minimum_skill: 'intermediate',
      scholarships_available: true
    },
    {
      title: 'Full Stack Web Dev',
      description:
        'In this course you will learn all about the front end with HTML, CSS and JavaScript. You will master tools like Git and Webpack and also learn C# and ASP.NET with Postgres',
      duration: 10,
      tuition: 12000,
      minimum_skill: 'intermediate',
      scholarships_available: true
    },
    {
      title: 'UI/UX',
      description:
        'In this course you will learn to create beautiful interfaces. It is a mix of design and development to create modern user experiences on both web and mobile.',
      duration: 12,
      tuition: 10000,
      minimum_skill: 'intermediate',
      scholarships_available: true
    },
    {
      title: 'Web Design & Development',
      description:
        'Get started building websites and web apps with HTML/CSS/JavaScript/PHP. We teach you',
      duration: 10,
      tuition: 9000,
      minimum_skill: 'beginner',
      scholarships_available: true
    },
    {
      title: 'Data Science Program',
      description:
        'In this course you will learn Python for data science, machine learning and big data tools',
      duration: 10,
      tuition: 12000,
      minimum_skill: 'intermediate',
      scholarships_available: false
    },
    {
      title: 'Web Development',
      description:
        'This course will teach you how to build high quality web applications with technologies like React, Node.js, PHP & Laravel',
      duration: 8,
      tuition: 8000,
      minimum_skill: 'beginner',
      scholarships_available: false
    },
    {
      title: 'Software QA',
      description:
        'This course will teach you everything you need to know about quality assurance',
      duration: 6,
      tuition: 5000,
      minimum_skill: 'intermediate',
      scholarships_available: false
    },
    {
      title: 'IOS Development',
      description:
        'Get started building mobile applications for IOS using Swift and other tools',
      duration: 8,
      tuition: 6000,
      minimum_skill: 'intermediate',
      scholarships_available: false
    }
  ];

  const [bootcamps, setBootcamps] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/bootcamps', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setBootcamps(res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/courses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  const [role, setRole] = useState('user');

  const { loading, getTokenSilently } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  getTokenSilently().then(token => {
    if (token) {
      if (
        jwt_decode(token).permissions.some(permmission =>
          permmission.includes('add:courses')
        )
      ) {
        setRole('admin');
      }
    }
  });

  const handleBootcampSubmit = bootcamp => {
    const updatedBootcampsList = [...bootcamps, bootcamp];
    setBootcamps(updatedBootcampsList);
  };

  const handleBootcampUpdate = updatedBootcamp => {
    const updatedBootcampsList = [];
    bootcamps.forEach(bootcamp => {
      if (bootcamp.id === updatedBootcamp.id) {
        updatedBootcampsList.push(updatedBootcamp);
      } else {
        updatedBootcampsList.push(bootcamp);
      }
    });
    setBootcamps(updatedBootcampsList);
  };

  const handleBootcampDelete = id => {
    const updatedBootcampsList = bootcamps.filter(
      bootcamp => bootcamp.id !== id
    );
    setBootcamps(updatedBootcampsList);
  };

  const handleCourseSubmit = course => {
    const updatedCoursesList = [...courses, course];
    setCourses(updatedCoursesList);
  };

  const handleCourseUpdate = updatedCourse => {
    const updatedCoursesList = [];
    courses.forEach(course => {
      if (course.id === updatedCourse.id) {
        updatedCoursesList.push(updatedCourse);
      } else {
        updatedCoursesList.push(course);
      }
    });
    setCourses(updatedCoursesList);
  };

  const handleCourseDelete = id => {
    const updatedCoursesList = courses.filter(course => course.id !== id);
    setCourses(updatedCoursesList);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar role={role} />
        <Route exact path='/'>
          <Bootcamps role={role} bootcamps={bootcamps} courses={courses} />
        </Route>
        <Route path='/add-bootcamp'>
          <BootcampForm handleBootcampSubmit={handleBootcampSubmit} />
        </Route>
        <Route
          path='/edit-bootcamp/:title'
          render={props => (
            <BootcampForm
              handleBootcampUpdate={handleBootcampUpdate}
              {...props}
            />
          )}
        />
        <Route
          path='/bootcamps/:name'
          render={props => (
            <Bootcamp
              role={role}
              handleBootcampDelete={handleBootcampDelete}
              {...props}
            />
          )}
        />
        <Route
          path='/courses/:title'
          render={props => (
            <Course
              role={role}
              handleCourseDelete={handleCourseDelete}
              {...props}
            />
          )}
        />
        <Route path='/add-course'>
          <CourseForm handleCourseSubmit={handleCourseSubmit} />
        </Route>
        <Route
          path='/edit-course/:title'
          render={props => (
            <CourseForm handleCourseUpdate={handleCourseUpdate} {...props} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
