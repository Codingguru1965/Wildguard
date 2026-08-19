import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

// Yeh data hai aapke projects ka
const projectsData = [
  {
    id: 1,
    title: "Tiger Habitat Protection",
    location: "Southeast Asia",
    year: "2026",
    image: "https://picsum.photos/id/1015/1000/600"
  },
  {
    id: 2,
    title: "Marine Wildlife Protection",
    location: "Global Oceans",
    year: "2026",
    image: "https://picsum.photos/id/1016/1000/600"
  },
  {
    id: 3,
    title: "Rainforest Restoration",
    location: "Amazon Basin",
    year: "2026",
    image: "https://picsum.photos/id/1018/1000/600"
  },
  {
    id: 4,
    title: "Elephant Migration Corridors",
    location: "African Savanna",
    year: "2026",
    image: "https://picsum.photos/id/1020/1000/600"
  },
  {
    id: 5,
    title: "Gorilla Conservation",
    location: "Central Africa",
    year: "2026",
    image: "https://picsum.photos/id/1024/1000/600"
  }
];

const FeaturedProjects = () => {
  // Pehle project ko default select rakha hai
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <div id="projects" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
      <Container>
        
        {/* Top Headings */}
        <Row className="justify-content-center text-center mb-5" data-aos="fade-up">
          <Col md={8}>
            <p className="section-subtitle text-uppercase fw-bold" style={{ color: '#ff9800', letterSpacing: '2px', fontSize: '0.85rem' }}>
              • FEATURED PROJECTS
            </p>
            <h2 className="display-4 fw-bold" style={{ color: '#2b2825' }}>
              Protecting Wildlife<br />Across the Globe
            </h2>
            <p className="text-muted mt-3">
              Explore some of Habitat's key conservation initiatives dedicated to protecting endangered species and restoring natural ecosystems around the world.
            </p>
          </Col>
        </Row>

        {/* Content Area */}
        <Row className="align-items-center mt-5">
          {/* Left Side: Interactive List */}
          <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
            <div className="d-flex flex-column gap-2 pe-lg-4">
              {projectsData.map((project) => (
                <div 
                  key={project.id}
                  className={`project-list-item ${activeProject.id === project.id ? 'active' : ''}`}
                  onClick={() => setActiveProject(project)}
                >
                  {project.title}
                </div>
              ))}
            </div>
          </Col>

          {/* Right Side: Dynamic Image */}
          <Col lg={6} data-aos="fade-left">
            <div className="project-image-container">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="project-image"
                key={activeProject.id}
              />
              <div className="project-image-overlay">
                <span className="fw-bold fs-5">{activeProject.location}</span>
                <span className="fw-bold fs-5">{activeProject.year}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Explore Button */}
        <Row className="text-center mt-5" data-aos="fade-up">
          <Col>
            <button className="btn-custom" style={{ padding: '15px 30px' }}>
              EXPLORE ALL PROJECTS <FaArrowRight className="ms-2" />
            </button>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default FeaturedProjects;