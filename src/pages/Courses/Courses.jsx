import React, { useState } from 'react';
import './Courses.css';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Col, Row, Button, Pagination } from 'react-bootstrap';

const coursesPerPage = 6;

const courses = [
  {
    title: 'Clinical Healthcare Research Management',
    type: 'Certificate',
    rating: 4.5,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2021/03/shutterstock_566980591.jpg"
  },
  {
    title: 'Certified Medical Assistant (CMA)',
    type: 'Certificate',
    rating: 4,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2022/02/Medical-Assistant-Certification-Program.png"
  },
  {
    title: 'Certified in Obstetrics and Gynecology',
    type: 'Certificate',
    rating: 5,
    category: "healthcare",
    imagePath: "https://img.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353034.jpg?w=740&t=st=1703843556~exp=1703844156~hmac=e53942153a2a623d95cffd3284ab07fd80682348a3c80d39fb5f54e0b596d27e"
  },
  {
    title: 'Healthcare Management Certificate',
    type: 'Certificate',
    rating: 4.3,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2021/03/shutterstock_582888676.jpg"
  },
  {
    title: 'Global Health Certificate ',
    type: 'Certificate',
    rating: 5,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2022/02/Global-Health-Certificate-Program.png"
  },
  {
    title: 'Occupational Therapy Aide Career Diploma',
    type: 'Certificate',
    rating: 4,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2022/02/Occupational-Therapy-Aide-Career-Diploma.png"
  }, {
    title: 'Medical Office Specialist Certificate',
    type: 'Certificate',
    rating: 4.7,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2021/03/shutterstock_1015787701-1.jpg"
  },
  {
    title: 'Certificate in Precision Nutrition',
    type: 'Certificate',
    rating: 4.9,
    category: "healthcare",
    imagePath: "https://www.premiumschools.org/wp-content/uploads/2022/02/Certificate-in-Precision-Nutrition-Level-1.png"
  },

  //yoga
  {
    title: 'Yoga Therapy Courses',
    type: 'Certificate',
    rating: 4.3,
    category: "yoga",
    imagePath: "https://irp-cdn.multiscreensite.com/466c69f6/dms3rep/multi/Article-TRR-AN-0420-1-featured.jpg"
  },
  {
    title: 'Prenatal and Postnatal Yoga Certification',
    type: 'Certificate',
    rating: 4.9,
    category: "yoga",
    imagePath: "https://qactiva.tv/wp-content/uploads/2021/05/young-pregnant-woman-practicing-yoga-at-home-1-scaled.jpg"
  },
  {
    title: 'Yoga for Childrens',
    type: 'Certificate',
    rating: 4,
    category: "yoga",
    imagePath: "https://www.gomommy.in/wp-content/uploads/2017/10/f1-1.jpg"
  },
  //ayurveda
  {
    title: 'Ayurvedic Wellness Certificate',
    type: 'Certificate',
    rating: 4.5,
    category: "ayurveda",
    imagePath: "https://d1m3k9ghxaebb7.cloudfront.net/images/integrative-medicine/integrative-medicine-homeo-01.jpg"
  },
  {

    title: 'Ayurvedic Nutrition Certification',
    type: 'Certificate',
    rating: 4.3,
    category: "ayurveda",
    imagePath: "https://d1m3k9ghxaebb7.cloudfront.net/images/integrative-medicine/ayurveda_banner.jpg"
  },

  {
    title: 'Panchakarma Therapy Certification',
    type: 'Certificate',
    rating: 5,
    category: "ayurveda",
    imagePath: "https://img.freepik.com/free-photo/closeup-massage-therapist-pouring-hot-chocolate-her-hands-before-spa-treatment_637285-2106.jpg?w=740&t=st=1704436629~exp=1704437229~hmac=24492213e903330c75cf42ddcae3114ba83adc7d18b5d40427c424982d1f6ddb"
  },
  {
    title: 'Ayurvedic Herbal Medicine Certificate',
    type: 'Certificate',
    rating: 4.4,
    category: "ayurveda",
    imagePath: "https://buddymantra.com/wp-content/uploads/2019/05/Ayurveda-1.jpg"
  },
  {
    title: 'Ayurvedic Skincare and Beauty Certification',
    type: 'Certificate',
    rating: 4.9,
    category: "ayurveda",
    imagePath: "https://www.ayurcentre.in/images/therapies/netravasti-ayurvedic-treatment-1.jpg"
  },
  {
    title: 'Ayurvedic Stress Management Certification',
    type: 'Certificate',
    rating: 4.1,
    category: "ayurveda",
    imagePath: "https://medicaltravelmarket.com/wp-content/uploads/2021/02/AdobeStock_265973794-scaled.jpeg"
  },

];

const CourseCard = ({ title, type, code, rating }) => (
  <div className="course-card">
    <h3>{title}</h3>
    <p>Type: {type}</p>
    <p>Code: {code}</p>
    <p>Rating: {rating}</p>
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  </div>
);


function Courses() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > totalPages || pageNumber < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const handleCategoryChange = (category) => {
    // Set selected category and reset current page to 1
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className='courses-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Our Courses</h1>
          <p className='text-center w-75 mb-5'>
            Explore a diverse range of healthcare courses at our institute, designed to shape skilled professionals for the dynamic healthcare industry. From our comprehensive Registered Nurse (RN) program to specialized certifications in areas like Medical Assistance, Nursing, and Health Education, our courses blend theoretical knowledge with practical experience. Join us to embark on a rewarding journey toward a fulfilling career in healthcare.
          </p>
        </div>
      </header>

      <div className='category-buttons'>
        <Button
          variant="outline-primary"
          onClick={() => handleCategoryChange(null)}
          active={!selectedCategory} // Check if no category is selected
        >
          All
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => handleCategoryChange('healthcare')}
          active={selectedCategory === 'healthcare'}
        >
          Healthcare
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => handleCategoryChange('ayurveda')}
          active={selectedCategory === 'ayurveda'}
        >
          Ayurveda
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => handleCategoryChange('yoga')}
          active={selectedCategory === 'yoga'}
        >
          Yoga
        </Button>
      </div>
      <div className="main-container">
        <div className='courses-container'>
          <Row xs={1} md={2} lg={3} className='g-4'>
            {currentCourses.map((course) => (
              <Col key={course.id}>
                <div className='custom-card1'>
                  <img src={course.imagePath} alt={course.title} className='custom-card-img' />
                  <div className='custom-card-body'>
                    <p className='custom-card-text1'>{course.type}</p>
                    <h6 className='custom-card-title'>{course.title}</h6>
                    <p className='custom-card-text'>

                      <button className='read-btn'>Read More</button>
                      <hr className='hr-line' />
                      <span className="rating-point ">({course.rating})</span>

                      <span className="rating "> &nbsp;
                        {Array.from({ length: Math.floor(course.rating) }, (_, index) => (
                          <i key={index} className="fas fa-star star-icon"></i>
                        ))}
                        {course.rating % 1 !== 0 && (
                          <i className="fas fa-star-half-alt star-icon"></i>
                        )}
                      </span>

                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>

      <div className='bg-dark text-light py-5'>
        <FaqAccordion />
      </div>
    </div>

  );
}

export default Courses;