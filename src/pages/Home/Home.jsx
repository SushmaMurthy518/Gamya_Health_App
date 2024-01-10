import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';


const blogs = [
    {
        id: 1,
        img: "https://straightanursingstudent.com/wp-content/uploads/2023/12/EP-322-RSI-MEDICATIONS-BLOG.png",
        title: 'Pharmacology in Emergent Intubation',
        description: 'Administration of drugs to facilitate the insertion of a breathing tube into the trachea during emergency situations. The primary goals of drug administration in emergent intubation are to induce rapid unconsciousness, facilitate intubation, and provide muscle relaxation for easier tube insertion.'
    },
    {
        id: 2,
        img: "https://straightanursingstudent.com/wp-content/uploads/2023/07/EP-306-HORMONAL-DISORDERS-CHILDREN-BLOG.png",
        title: 'Pediatric Endocrine Disorders',
        description: 'The endocrine system is a complex network of glands that secrete hormones, which play a crucial role in regulating various physiological processes in the body. '
    },
    {
        id: 3,
        img: "https://straightanursingstudent.com/wp-content/uploads/2023/10/EP-311-ICU-CLINICALS-BLOG.png",
        title: 'Feeling Confident in ICU Clinicals',
        description: 'Especially in the intensive care unit (ICU), is an important aspect of your professional development as a healthcare provider.'
    }
];

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center text-center text-sm-right'>
                    <h2>Welcome To</h2>
                    <h1 className='fw-semibold'>HealthCare</h1>
                    <p>
                        We are dedicated to providing top-notch healthcare education and training. Our commitment to excellence, experienced faculty, and state-of-the-art facilities ensure a transformative learning experience.
                    </p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                </div>

            </header>

            <div className="py-5">
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>start courses</h2>
                            <p>To initiate your courses at the Healthcare Institute.</p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect'>
                                        <Card.Img variant="top" src={blog.img} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;