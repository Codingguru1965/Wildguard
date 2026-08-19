import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AnimatedNumber = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const interval = 30; 
    const step = end / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [end]); // Page refresh/load par ek hi baar chalega

  return <span>{count}{suffix}</span>;
};

const ImpactNumbers = () => {
  return (
    <div className="impact-section">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={3} className="mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div style={{width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px'}}>
                 <span style={{fontSize: '14px'}}>🌍</span>
              </div>
              <span className="fw-bold" style={{fontSize: '0.9rem', letterSpacing: '1px'}}>WORKING GLOBALLY</span>
            </div>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0" style={{borderLeft: '1px solid rgba(255,255,255,0.1)'}} data-aos="fade-up" data-aos-delay="200">
            <div className="ps-md-3">
              <p className="impact-label">Protected Habitats</p>
              <h2 className="impact-number">
                <AnimatedNumber end={2} suffix="M" />
                <span className="fs-5 fw-normal text-muted ms-1">hectares</span>
              </h2>
            </div>
          </Col>

          <Col md={3} className="mb-4 mb-md-0" style={{borderLeft: '1px solid rgba(255,255,255,0.1)'}} data-aos="fade-up" data-aos-delay="300">
            <div className="ps-md-3">
              <p className="impact-label">Rescued & Rehabilitated</p>
              <h2 className="impact-number">
                <AnimatedNumber end={12} suffix="K" />
                <span className="fs-5 fw-normal text-muted ms-1">animals</span>
              </h2>
            </div>
          </Col>

          <Col md={3} style={{borderLeft: '1px solid rgba(255,255,255,0.1)'}} data-aos="fade-up" data-aos-delay="400">
            <div className="ps-md-3">
              <p className="impact-label">Conservation</p>
              <h2 className="impact-number">
                <AnimatedNumber end={45} suffix="" />
                <span className="fs-5 fw-normal text-muted ms-1">programs</span>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImpactNumbers;