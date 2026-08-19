import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHandHoldingUsd, FaHandsHelping, FaBullhorn, FaArrowRight } from 'react-icons/fa';

const TakeAction = () => {
  return (
    <div id="take-action" className="action-section">
      <Container>
        {/* Header */}
        <Row className="justify-content-center text-center mb-5" data-aos="fade-up">
          <Col md={8}>
            <p className="section-subtitle text-uppercase fw-bold" style={{ color: '#ff9800', letterSpacing: '2px', fontSize: '0.85rem' }}>
              • TAKE ACTION
            </p>
            <h2 className="display-5 fw-bold mb-3">
              Be Part of the<br />Conservation Movement
            </h2>
            <p className="text-muted">
              There are many ways to support wildlife conservation. Join Habitat in protecting endangered species and restoring natural ecosystems.
            </p>
          </Col>
        </Row>

        {/* Action Cards */}
        <Row className="g-4 mt-2">
          {/* Donate Card */}
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="action-card card-donate">
              <div className="action-icon-circle"><FaHandHoldingUsd /></div>
              <h4 className="fw-bold mb-3">Donate</h4>
              <p className="text-muted">Your contribution helps fund wildlife protection programs, habitat restoration, and conservation research.</p>
              <a href="#donate" className="action-link">
                DONATE NOW <FaArrowRight className="ms-2" />
              </a>
            </div>
          </Col>

          {/* Volunteer Card */}
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="action-card card-volunteer">
              <div className="action-icon-circle"><FaHandsHelping /></div>
              <h4 className="fw-bold mb-3">Volunteer</h4>
              <p className="text-muted">Work alongside conservation teams and support wildlife protection efforts in communities around the world.</p>
              <a href="#volunteer" className="action-link">
                BECOME A VOLUNTEER <FaArrowRight className="ms-2" />
              </a>
            </div>
          </Col>

          {/* Raise Awareness Card */}
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="action-card card-awareness">
              <div className="action-icon-circle"><FaBullhorn /></div>
              <h4 className="fw-bold mb-3">Raise Awareness</h4>
              <p className="text-muted">Help spread the message and inspire others to protect wildlife and support conservation efforts.</p>
              <a href="#awareness" className="action-link">
                SHARE THE MISSION <FaArrowRight className="ms-2" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TakeAction;