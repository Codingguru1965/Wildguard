import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTree, FaPaw, FaThermometerHalf, FaWater } from 'react-icons/fa';

const TheCrisis = () => {
  return (
    <div id="impact" className="crisis-section">
      <Container>
        {/* Top Headings */}
        <Row className="justify-content-center text-center mb-5" data-aos="fade-up">
          <Col md={8}>
            <p className="section-subtitle">The Crisis</p>
            <h2 className="display-4 fw-bold mb-4" style={{color: '#121212'}}>
              Wildlife is Facing an Unprecedented Crisis
            </h2>
            <p className="text-muted fs-5">
              Wildlife populations around the world are declining due to human activity, environmental
              changes, and illegal exploitation of natural resources.
            </p>
          </Col>
        </Row>

        {/* Bottom Content (Cards + Image) */}
        <Row className="align-items-center mt-4">
          
          {/* Left Column */}
          <Col md={4} className="mb-4 mb-md-0" data-aos="fade-right">
            <div className="mb-5">
              <div className="crisis-icon"><FaTree /></div>
              <h4 className="fw-bold">Habitat Loss</h4>
              <p className="text-muted">Forests, wetlands, and natural ecosystems are rapidly disappearing due to deforestation, agriculture expansion, and urban development.</p>
            </div>
            <div>
              <div className="crisis-icon"><FaPaw /></div>
              <h4 className="fw-bold">Illegal Wildlife Trade</h4>
              <p className="text-muted">Thousands of animals are trafficked every year, threatening endangered species and disrupting natural ecosystems.</p>
            </div>
          </Col>

          {/* Center Column - Dummy Image (Cracked Earth) */}
          <Col md={4} className="mb-4 mb-md-0 text-center" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" 
              alt="Climate Crisis" 
              className="crisis-img shadow"
            />
          </Col>

          {/* Right Column */}
          <Col md={4} data-aos="fade-left">
            <div className="mb-5">
              <div className="crisis-icon"><FaThermometerHalf /></div>
              <h4 className="fw-bold">Climate Change</h4>
              <p className="text-muted">Rising temperatures and changing weather patterns disrupt habitats and threaten the survival of many species.</p>
            </div>
            <div>
              <div className="crisis-icon"><FaWater /></div>
              <h4 className="fw-bold">Ocean Pollution</h4>
              <p className="text-muted">Plastic waste and chemical pollution severely impact marine wildlife and destroy fragile ocean ecosystems.</p>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default TheCrisis;