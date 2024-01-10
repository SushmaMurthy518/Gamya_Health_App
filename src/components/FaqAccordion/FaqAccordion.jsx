import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Valuable component of information provided by organizations, businesses, or educational institutions to address common queries and concerns that individuals may have.

            </p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What healthcare programs do you offer?</Accordion.Header>
                    <Accordion.Body>
                    Our institute offers a diverse range of healthcare programs, including degrees, certifications, and specialized courses to cater to various career paths within the healthcare industry.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How long do the programs typically take to complete?</Accordion.Header>
                    <Accordion.Body>
                    Program durations vary, with options for full-time and part-time study. The specific length depends on the type of program and any individualized pacing. </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>How is practical training incorporated into the curriculum?</Accordion.Header>
                    <Accordion.Body>
                    Practical training is a vital component of our programs. We integrate hands-on experiences, internships, and clinical rotations to ensure our students are well-prepared for their future roles.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What are the career prospects for graduates of your healthcare programs?</Accordion.Header>
                    <Accordion.Body>
                    Share information about the success of graduates, job placement rates, and potential career paths.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;