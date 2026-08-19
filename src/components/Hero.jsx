import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <Container>
        <Row>
          <Col md={10} lg={8} className="text-white">
            {/* Main Heading with Typewriter Effect */}
            <h1 className="display-1 fw-bold mb-4">
              <Typewriter
                options={{
                  strings: [
                    'Global Wildlife Protection', 
                    'Preserve Our Ecosystem', 
                    'Save Endangered Species'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,         // Typing speed
                  deleteSpeed: 30,   // Deleting speed
                }}
              />
            </h1>
            {/* Button with React Icon */}
            <button className="btn-custom mt-2">
              EXPLORE OUR IMPACT <FaArrowRight className="ms-2" />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;