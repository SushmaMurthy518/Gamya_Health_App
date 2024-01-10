import React from 'react';
import './CourseDetails.css'; // Import the CSS file

const CourseDetails = () => {
  return (

    <div >
      <div className='courses-page'>
        <header className='height-75'>
          <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <h1 className='text-center fw-semibold'>Our Courses</h1>
            <p className='text-center w-75 mb-5'>
              Explore a diverse range of healthcare courses at our institute, designed to shape skilled professionals for the dynamic healthcare industry. From our comprehensive Registered Nurse (RN) program to specialized certifications in areas like Medical Assistance, Nursing, and Health Education, our courses blend theoretical knowledge with practical experience. Join us to embark on a rewarding journey toward a fulfilling career in healthcare.
            </p>
          </div>
        </header>
      </div>
      <div className="certificate-container">
        <div className="course-card">
          <h1>Advanced Certificate in Emergency Medicine</h1>
          <p>
            <strong>Batch Start Date:</strong> Wed Jan 24, 2024
          </p>

          <h2>Course Description</h2>
          <p>
            An Advanced Certificate in Emergency Medicine covers the clinical
            characteristics, screening, and diagnosis, as well as a fundamental
            introduction to the medications utilized in emergency conditions. The
            program also covers the latest developments in emergency condition
            management in great detail. The live/recorded online classes included in
            the program can be taken from your home or place of employment. You have
            the chance to ask the faculty your questions directly during the live
            case discussions.
          </p>

          <p>
            Programmes at MediCOLL learning are developed by eminent doctors with
            rich clinical experience across the medical field that enhance learners'
            skills, attributes, and expertise substantially, allowing them to build
            their career more proficiently. Join the programme and nourish your
            clinical practice.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Fellowship Program In India</li>
            <li>
              This program will provide you with in-depth understanding of disease
              prevention, detection, diagnosis, and treatment.
            </li>
            <li>
              Access to books and videos from Royal College of General Practitioners,
              NHS, UK
            </li>
            <li>
              Clinical practice for practical training in a top corporate hospital
              under the supervision of an expert
            </li>
            <li>
              Up-skill yourself in Emergency medicine by learning & case studies in
              special population
            </li>
          </ul>

          <div className="course-info">
        <h2>Course Information</h2>
        <p>
          <strong>Duration:</strong> 24 weeks
        </p>
        <p>
          <strong>Course Level:</strong> Certificate Programs
        </p>
        <p>
          <strong>Language:</strong> English
        </p>
        <p>
          <strong>Course Fee:</strong> ₹70,000.00
        </p>
      </div>

          <h2>Course Highlight</h2>
          <ul>
            <li>Course Outline</li>
            <li>Eligibility</li>

            <li>Registration</li>

            <li>Blended Programme</li>

            <li>Live Webinar</li>


            <li>Online Assessment</li>

          </ul>







          <h2>Programme Director</h2>
          <p>
            Dr. Anjali Bhatt - Founder and Consultant
            <br />
            MBBS, MD, F.DIAB, F.Endo, MSc Endo, Pune
            <br />
            As a practicing diabetes, endocrine and metabolic physician, she strongly
            believes that lifestyle plays an important role in the management of
            obesity, diabetes, and to a large extent other hormonal disorders. She's
            passionate about working on various methods that can reverse lifestyle
            disorders and help improve metabolism.
          </p>

          <p>
            Dr. Sanjay Agarwal - MD, FACE, FACP
            <br />
            Fellow of the American College of Endocrinology Director, Aegle Clinic -
            Diabetes Care Head, Dept. of Medicine & Diabetes, Ruby Hall Clinic,
            Member, Editorial Board, BMJ Open Diabetes Research and Care Journal
            Associate Editor of the International Journal of Diabetes in Developing
            Countries (IJDDC) Hon.Secretary, Governing Council, National RSSDI
            Chairman, International Diabetes Expert Consortium (IDEC)
          </p>
          <h2>Accreditation Partner(s)</h2>
        <ul>
          <li>Eintegrity Healthcare E-Learning</li>
          <li>University of Liverpool</li>
          <li>Royal College of Physicians and Surgeons of Glasgow</li>
          <li>Royal College of Physicians</li>
          <li>Mangalayatan University</li>
        </ul>
        </div>

       
      </div>
     
    </div>


  );
};

export default CourseDetails;
