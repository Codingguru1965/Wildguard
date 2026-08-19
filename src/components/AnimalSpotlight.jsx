import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AnimalSpotlight = () => {
  return (
    <div className="spotlight-section">
      <Container>
        <Row>
          <Col md={6} data-aos="fade-right">
            <p className="text-uppercase fw-bold d-flex align-items-center" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#ff9800' }}>
              <span className="me-2 fs-5">•</span> ANIMAL SPOTLIGHT
            </p>
            <h2 className="display-4 fw-bold mt-3 mb-4">Bengal Tiger</h2>
            <p className="fs-5" style={{ color: '#dcdcdc', lineHeight: '1.6' }}>
              The Bengal tiger is a magnificent predator facing severe threats due to habitat loss and illegal wildlife trade. Conservation programs are working hard to protect their dwindling population and restore their natural habitat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnimalSpotlight;