import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-0">
      <Container fluid>
        <Row className="d-flex align-items-center">
          <Col className="my-3" md={6} lg={4}>
            <h2>Location</h2>
            <p>Abu Ubaid, </p>
            <p>Damanhour City,</p>
            <p> Beheira</p>
          </Col>
          <Col className="my-3" md={6} lg={4}>
            <h2>Contact Us</h2>
            <p>Phone: 01011347782</p>
            <p>Email: RenoSmile@gmail.com</p>
            <p>Hours: Saturday - Thursday, 10am - 10pm</p>
          </Col>
          <Col className="my-3" md={6} lg={4}>
            <h2>Follow Us</h2>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item me-3">
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li className="list-inline-item me-3">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-success">
          <p>&copy;2025 Reno Smile. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
