// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import CourseDetails from './pages/CourseDetails/CourseDetails'; // Make sure to import CourseDetails
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const courseDetails = [
  {
    category: 'healthcare',
    courses: [
      {
        id: 1,
        title: 'Clinical Healthcare Research Management'
      },
      {
        id: 2,
        title: 'Certified Medical Assistant (CMA)'
      },
      {
        id: 3,
        title: 'Certified in Obstetrics and Gynecology'
      },
      {
        id: 4,
        title: 'Healthcare Management Certificate'
      },
      {
        id: 5,
        title: 'Global Health Certificate'
      },
      {
        id: 6,
        title: 'Occupational Therapy Aide Career Diploma'
      },
      {
        id: 7,
        title: 'Medical Office Specialist Certificate'
      },
      {
        id: 8,
        title: 'Certificate in Precision Nutrition'
      },
    ],
  },

  {
    category: 'yoga',
    courses: [
      {
        id: 9,
        title: 'Yoga Therapy Courses'
      },
      {
        id: 10,
        title: 'Prenatal and Postnatal Yoga Certification'
      },
      {
        id: 11,
        title: 'Yoga for Childrens'
      },

    ],
  },
  {
    category: 'ayurveda',
    courses: [

      {
        id: 12,
        title: 'Ayurvedic Wellness Certificate'
      },
      {
        id: 13,
        title: 'Ayurvedic Nutrition Certification'
      },
      {
        id: 14,
        title: 'Panchakarma Therapy Certification'
      },
      {
        id: 15,
        title: 'Ayurvedic Herbal Medicine Certificate'
      },
      {
        id: 16,
        title: 'Ayurvedic Skincare and Beauty Certification'
      },
      {
        id: 17,
        title: 'Ayurvedic Stress Management Certification'
      }
    ],
  },
];

function App() {
  return (
    <div>
      <Header courseDetails={courseDetails} /> {/* Pass courseDetails to Header component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetails courseDetails={courseDetails} />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
