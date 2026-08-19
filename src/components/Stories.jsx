import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Stories = () => {
  return (
    <div className="stories-section">
      <Container>
        {/* Header */}
        <Row className="justify-content-center text-center mb-5" data-aos="fade-up">
          <Col md={8}>
            <p className="section-subtitle text-uppercase fw-bold" style={{ color: '#ff9800', letterSpacing: '2px', fontSize: '0.85rem' }}>
              • STORIES FROM THE FIELD
            </p>
            <h2 className="display-4 fw-bold mb-3" style={{ color: '#2b2825' }}>
              Voices Behind Wildlife<br />Conservation
            </h2>
            <p className="text-muted">
              Discover the stories of conservationists, researchers, and volunteers who are making a real difference for wildlife.
            </p>
          </Col>
        </Row>

        {/* Cards Grid */}
        <Row className="g-4 mt-4">
          {/* Card 1 */}
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="story-card">
              <p className="fs-5 mb-4" style={{ fontStyle: 'italic', color: '#4a4a4a' }}>
                "Through reforestation programs and habitat restoration, conservation teams are helping rebuild ecosystems that support countless wildlife species."
              </p>
              <div className="d-flex align-items-center mt-auto">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="Daniel" className="story-author-img" />
                <div>
                  <h6 className="fw-bold mb-0">Daniel Robinson</h6>
                  <small className="text-muted">Conservation Scientist</small>
                </div>
              </div>
            </div>
          </Col>

          {/* Card 2 (Image Card) */}
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
             {/* Yahan aapke screenshot ki tarah ek badi profile/action image hai */}
             <img 
               src="https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?q=80&w=600&auto=format&fit=crop" 
               alt="Volunteer in action" 
               style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
             />
          </Col>

          {/* Card 3 (Dark Card) */}
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="story-card dark">
              <p className="fs-5 mb-4" style={{ fontStyle: 'italic' }}>
                "Working closely with local communities, our conservation teams help secure safe migration routes for elephant herds across protected landscapes."
              </p>
              <div className="d-flex align-items-center mt-auto">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" alt="William" className="story-author-img" />
                <div>
                  <h6 className="fw-bold mb-0">William Johnson</h6>
                  <small className="text-muted">Wildlife Ranger</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stories;