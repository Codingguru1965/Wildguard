import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaPaw, FaUsers, FaArrowRight } from 'react-icons/fa';

const OurMission = () => {
    return (
        <div style={{ backgroundColor: '#181716', color: 'white', padding: '100px 0' }}>
            <Container>
                {/* Top Heading */}
                <Row className="mb-5" data-aos="fade-up">
                    <Col md={10}>
                        <p className="text-uppercase fw-bold d-flex align-items-center" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#ff9800' }}>
                            <span className="me-2 fs-5">•</span> OUR MISSION
                        </p>
                        <h2 className="display-6 fw-bold mt-3" style={{ lineHeight: '1.4' }}>
                            Habitat is dedicated to preserving wildlife and restoring ecosystems globally. In partnership with local communities, conservationists, and global partners, we create sustainable solutions for endangered species and their habitats.
                        </h2>
                    </Col>
                </Row>

                {/* Content Section */}
                <Row className="align-items-start mt-5">
                    {/* Left Column: Image and Button */}
                    <Col md={6} className="mb-5 mb-md-0" data-aos="fade-right">
                        <img
                            src="https://picsum.photos/id/1018/1000/600"
                            alt="Wildlife Mission"
                            className="img-fluid rounded-4 mb-4 shadow-lg"
                            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                        />
                        <button className="btn-custom mt-2">
                            LEARN ABOUT OUR PROGRAMS <FaArrowRight className="ms-2" />
                        </button>
                    </Col>

                    {/* Right Column: List of Features */}
                    <Col md={5} className="offset-md-1" data-aos="fade-left">

                        {/* Feature 1 */}
                        <div className="d-flex pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginRight: '20px', fontSize: '1.2rem', flexShrink: 0 }}>
                                <FaLeaf />
                            </div>
                            <div>
                                <h4 className="fw-bold mb-2">Habitat Restoration</h4>
                                <p className="text-muted mb-0">Restoring forests, wetlands, and natural ecosystems to rebuild safe habitats where wildlife can thrive again.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="d-flex pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginRight: '20px', fontSize: '1.2rem', flexShrink: 0 }}>
                                <FaPaw />
                            </div>
                            <div>
                                <h4 className="fw-bold mb-2">Species Protection</h4>
                                <p className="text-muted mb-0">Protecting endangered species through monitoring programs, rescue initiatives, and wildlife protection strategies.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="d-flex">
                            <div style={{ color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginRight: '20px', fontSize: '1.2rem', flexShrink: 0 }}>
                                <FaUsers />
                            </div>
                            <div>
                                <h4 className="fw-bold mb-2">Community Collaboration</h4>
                                <p className="text-muted mb-0">Working with local communities to promote sustainable practices and protect wildlife habitats.</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurMission;