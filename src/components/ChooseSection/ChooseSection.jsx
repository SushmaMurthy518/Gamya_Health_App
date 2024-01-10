// ChooseUsSection.js

import React from 'react';
import './ChooseSection.css'; // Import your CSS file here

function ChooseUsSection() {
  const choicesData = [
    {
      id: 1,
     imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-graduate-1409859-1192262.png?f=webp&w=256',
      alt: 'High Quality Education',
      title: 'High Quality Education',
      description: 'Our institute is committed to providing rigorous and high-quality education, preparing students for the demands of the healthcare industry.',
    },
    {
      id: 2,
      imgSrc: 'https://cdn1.iconfinder.com/data/icons/global-economy-after-coronavirus-pandemic-glyph/64/vaccine-development-research-medical-testing-cure-clinical-256.png',
      alt: 'Clinical Exposure',
      title: 'Clinical Exposure',
      description: 'Experience matters. Many of our healthcare programs include clinical rotations or practical experiences, providing students with hands-on exposure to healthcare settings.',
    },
    {
      id: 3,
      imgSrc: 'https://cdn4.iconfinder.com/data/icons/personal-gym-coach/317/gym-partner-trainer-coach-004-256.png',
      alt: 'Experienced Faculties',
      title: 'Academic Professionals',
      description: 'Learn from the best. Our faculty members have extensive experience in the healthcare field, bringing real-world insights and expertise to the classroom.',
    },
    {
      id: 4,
       imgSrc: 'https://cdn0.iconfinder.com/data/icons/business-concepts-3/505/Global_Team-256.png',
      alt: 'Community Engagement',
      title: 'Community Engagement',
      description: 'We actively engage with the community, organizing health fairs, outreach programs, and community service initiatives. Apply your skills in real-world scenarios.',
    },
  ];

  return (
    <section className="container1">
      <div className="center-div">
        <h2>Why Choose Our Healthcare Institute?</h2>
        <p>
          At our healthcare institute, we strive to provide an exceptional learning experience and prepare our students for successful careers in the healthcare industry. Here's why you should choose us:
        </p>
      </div>

      <div className="choices">
        {choicesData.map(choice => (
          <div className="choice" key={choice.id}>
            <div className="circle">
              <img src={choice.imgSrc} alt={choice.alt} />
            </div>
            <div className="text">
              <h3>{choice.title}</h3>
              <p>{choice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChooseUsSection;
