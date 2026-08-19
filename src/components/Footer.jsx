import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Aapke screenshot mein X icon hai, uski jagah maine FaTwitter use kiya hai jo similar dikhta hai

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="g-5">
          {/* Column 1: Organization */}
          <Col lg={2} md={6}>
            <h6 className="footer-heading">ORGANIZATION</h6>
            <ul className="footer-list">
              <li><a href="#about">About Habitat</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#impact">Conservation Impact</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>

            {/* Social Icons (Desktop mein yeh neeche the, hum isko yahan align kar rahe hain layout ke hisaab se) */}
            <div className="mt-5">
              <h6 className="footer-heading mb-3">PROJECTS</h6> {/* Screenshot mein title 'PROJECTS' hai par uske neeche icons hain */}
              <div className="social-icons">
                <a href="#fb" className="social-icon"><FaFacebookF /></a>
                <a href="#ig" className="social-icon"><FaInstagram /></a>
                <a href="#tw" className="social-icon"><FaTwitter /></a>
                <a href="#yt" className="social-icon"><FaYoutube /></a>
              </div>
            </div>
          </Col>

          {/* Column 2: Projects */}
          <Col lg={3} md={6}>
            <h6 className="footer-heading">PROJECTS</h6>
            <ul className="footer-list">
              <li><a href="#wildlife">Wildlife Protection</a></li>
              <li><a href="#habitat">Habitat Restoration</a></li>
              <li><a href="#marine">Marine Conservation</a></li>
            </ul>
          </Col>

          {/* Column 3: Get Involved */}
          <Col lg={3} md={6}>
            <h6 className="footer-heading">GET INVOLVED</h6>
            <ul className="footer-list">
              <li><a href="#donate">Donate</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#partner">Partner With Us</a></li>
            </ul>
          </Col>

          {/* Column 4: Resources & Newsletter */}
          <Col lg={4} md={6}>
            <h6 className="footer-heading">RESOURCES</h6>
            <ul className="footer-list mb-5">
              <li><a href="#stories">Stories</a></li>
              <li><a href="#news">News & Updates</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>

            <h6 className="footer-heading">NEWSLETTER</h6>
            <form className="newsletter-form mb-3">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
            </form>
            <p style={{ fontSize: '0.8rem', color: '#a0a0a0' }}>
              We care about protecting your data.<br />
              Read more in our <a href="#privacy" style={{ color: '#a0a0a0', textDecoration: 'underline' }}>Privacy Policy</a>.
            </p>
          </Col>
        </Row>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">
            © 2026 | Developed with ❤️ by <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Ankit Yadav</span>
          </p>
          <div className="d-flex gap-4">
            <a href="#privacy" style={{ color: '#a0a0a0', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: '#a0a0a0', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#cookies" style={{ color: '#a0a0a0', textDecoration: 'none' }}>Cookies Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;