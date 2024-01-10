import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './About.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp, faWallet, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import VisionLogo from '../../utils/images/vission.png';
import MissionLogo from '../../utils/images/mission.png';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import elfh from '../../utils/images/elfh.jpg';
import eintergrity from '../../utils/images/eintergrity.jpg';
import intensive from '../../utils/images/intersive-care-medicine.jpg';
import medanta from '../../utils/images/medanta.png';
import columbia from '../../utils/images/columbia.png';
// import apollo from '../../utils/images/apollo-bangalore-logo.png';
function About() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true, 
        centerPadding: '10px', 
        height: '10px'
       
    };

    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>
                        Welcome to [Gamya], where excellence in healthcare education meets compassionate service. As a premier institution, we are dedicated to nurturing the skills and knowledge of aspiring healthcare professionals. Our commitment to quality education, hands-on training, and a supportive learning environment ensures that our students embark on a fulfilling journey toward a successful career in healthcare.
                    </p>
                </div>
            </header>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                        <p>
                            Whether you are pursuing a career as a nurse, medical assistant, or in any other healthcare role, our dedicated faculty and state-of-the-art facilities provide an immersive learning environment. Gain hands-on experience, access cutting-edge resources, and prepare for a rewarding journey in healthcare with us.
                        </p>
                        <p className='mb-4 mb-lg-5'>
                            Embark on a fulfilling career path in healthcare with us, where our devoted faculty and cutting-edge facilities create an immersive learning environment. Whether you aspire to become a nurse, medical assistant, or pursue any other healthcare role, we prioritize hands-on experience and access to state-of-the-art resources. Our commitment is to provide you with the skills and knowledge needed for a successful and rewarding journey in the healthcare field.
                        </p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                </div>
            </div>

            {/* <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div> */}
            <div className='bg-body-tertiary py-5'>
                <div className="container2">
                    <h2 className='text-center mb-5'>We Strive to Be The Best</h2>
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="card">
                                <div className="card-body">
                                    <figure className="ha-infobox-figure ha-infobox-figure--icon">
                                        <FontAwesomeIcon icon={faSortAmountUp} aria-hidden="true" size="3x" color="blue" />
                                    </figure>
                                    <h3 className="card-title">Excellent Track Record</h3>
                                    <p className="card-text">
                                        A pinnacle of success with a 100% placement rate, showcasing our unwavering commitment to quality education. Our track record is a testament to producing healthcare professionals excelling in both knowledge and compassionate care.
                                    </p>
                                    <Link to="/contact" className="explore-link">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="card">
                                <div className="card-body">
                                    <figure className="ha-infobox-figure ha-infobox-figure--icon">
                                        <FontAwesomeIcon icon={faWallet} aria-hidden="true" size="3x" color="blue" />
                                    </figure>
                                    <h3 className="card-title">Flexible & Transparent Fees</h3>
                                    <p className="card-text">
                                        Our transparent and flexible fee structure caters to diverse student needs. With clear fee breakdowns and flexible payment options, we ensure an affordable and seamless educational journey for all.
                                    </p>
                                    <Link to="/contact" className="explore-link">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <figure className="ha-infobox-figure ha-infobox-figure--icon">
                                        <FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" size="3x" color="blue" />
                                    </figure>
                                    <h3 className="card-title">Unrivaled Students Support</h3>
                                    <p className="card-text">
                                        At [Your Institute], we provide unmatched student support—from academic guidance to career counseling. Our dedicated team ensures every student thrives in a nurturing environment, turning success into a shared journey, not just a goal.
                                    </p>
                                    <Link to="/contact" className="explore-link">Explore</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center mx-auto my-auto">
                                {/* Mission Logo */}
                                <img src={MissionLogo} alt="Mission Logo" className="img-fluid mb-3" style={{ width: '150px', height: '150px' }} />

                                <h3>Mission</h3>
                                <p>
                                    Imparting transcendent medical education in every part of the country, thereby doctors can strengthen their skills, knowledge, and handle clinical cases with ease.
                                </p>
                            </div>
                            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center mx-auto my-auto">
                                {/* Vision Logo */}
                                <img src={VisionLogo} alt="Vision Logo" className="img-fluid mb-3" style={{ width: '150px', height: '150px' }} />

                                <h3>Vision</h3>
                                <p>
                                    Enhancing the clinical acumen of doctors through cutting-edge and flexible programs, thereby they can upgrade their wisdom, skills, and dexterity from anywhere without quitting their clinical practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
            <h2 className='text-center mb-5'>Our Partners</h2>
                    <Slider {...sliderSettings}>
                        <div className="partner-logo-slide">
                            <img src={columbia} alt="Partner 1" />
                        </div>
                        <div className="partner-logo-slide">
                            <img src={medanta} alt="Partner 2" />
                        </div>
                        <div className="partner-logo-slide">
                            <img src={elfh} alt="Partner 2" />
                        </div>
                        <div className="partner-logo-slide">
                            <img src={eintergrity} alt="Partner 2" />
                        </div>
                        <div className="partner-logo-slide">
                            <img src={intensive} alt="Partner 2" />
                        </div>

                        
                       
                    </Slider>

        </div>

    );
}

export default About;
