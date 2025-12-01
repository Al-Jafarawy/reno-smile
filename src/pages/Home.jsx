import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ServicesContext from "../ServicesContext";
import Dentist from ".././images/Dentist.gif";
import dentalChair from ".././images/dentalChair.gif";
import AppointmentContext from "../AppointmentContext";
import pointFinger from ".././images/pointFinger.gif";
import "animate.css";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Home() {
  const { services } = useContext(ServicesContext);
  const { setDate, setTime, setService } = useContext(AppointmentContext);
  const isLoggedin = localStorage.getItem("isLoggedin");
  const darkMode = useOutletContext();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("phone");
    localStorage.removeItem("selectedUser");
    navigate("/login");
  }

  function bookAppointment() {
    return isLoggedin ? navigate("/appointments") : navigate("/login");
  }

  function bookServiceAppointment(service) {
    setDate("");
    setTime("");
    setService(service);
    return isLoggedin ? navigate("/appointments") : navigate("/login");
  }

  return (
    <div className="py-5">
      <header>
        <Container className="position-relative pb-4">
          <div className="d-flex justify-content-end align-items-center gap-3">
            <Button
              variant="primary"
              className="fw-bold animate__animated animate__pulse animate__infinite"
              onClick={bookAppointment}
            >
              Book an Appointment
            </Button>
            <img
              src={pointFinger}
              alt=""
              width={48}
              className="d-none d-md-block animate__animated animate__fadeIn"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Container>
      </header>

      <main>
        <Container className="my-5">
          <Row className="align-items-center gy-4">
            <Col md={7}>
              <h1 className="display-4 fw-bold mb-0">Welcome to</h1>
              <h2 className="display-5 fw-bold mb-3">Reno Smile Clinic</h2>
              <p className="lead mb-3">
                We provide high-quality dental care for patients of all ages.
                Our experienced dentists and staff are committed to making your
                visit a comfortable and stress-free experience.
              </p>
              <Button variant="primary" onClick={() => navigate("/about")}>
                Learn More
              </Button>
            </Col>

            <Col md={5} className="d-flex justify-content-center">
              <div className="d-flex flex-column flex-sm-row gap-3 align-items-center">
                <img
                  src={Dentist}
                  alt="Dentist"
                  width={200}
                  className="rounded-circle animate__animated animate__backInLeft"
                />
                <img
                  src={dentalChair}
                  alt="Dental Chair"
                  width={200}
                  className="rounded animate__animated animate__backInRight"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <section className="py-5 bg-primary text-dark">
          <Container>
            <h2 className="text-center text-white mb-4">Our Dental Services</h2>

            {/* عرض البطاقات: responsive بدون overflow horizontal غير مرغوب */}
            <Row className="g-4">
              {services.map((service) => (
                <Col key={service.id} xs={12} sm={6} lg={4}>
                  <Card className="h-100">
                    <Card.Body>
                      <h5 className="text-primary">{service.name}</h5>
                      <p className="text-muted small mb-3">{service.description}</p>
                      <p className="mb-3">
                        Price: <span className="fw-normal">{service.price} EG</span>
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => bookServiceAppointment(service.name)}
                      >
                        Book this service
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>

      <Container className="my-5">
        <Row className="g-4">
          <Col lg={6}>
            <h3 className="text-primary mb-3">Visit Us</h3>
            <p className="lead mb-3">
              We are conveniently located in the heart of San Bartolome St., Brgy 4
              Catbalogan City. Please feel free to contact us to schedule an
              appointment or to ask any questions you may have.
            </p>

            <p className="mt-3 lead">
              Abu Ubaid, <br />
              Damanhour City, <br />
              Beheira <br />
              Phone: 01011347782
            </p>
          </Col>

          <Col lg={6}>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="mb-3">Welcome to Our Private Dental Clinic</h4>
            <p>
              We are a state-of-the-art dental clinic located in the heart of
              the city. Our highly skilled team of dentists, hygienists, and
              assistants provide a full range of dental services for patients of
              all ages, including preventative care, cosmetic treatments, and
              emergency services.
            </p>
            <p>
              Our clinic is equipped with the latest technology and we use the
              highest quality materials to ensure that our patients receive the
              best possible care. We are committed to providing a comfortable
              and relaxing environment for all our patients, and we take great
              pride in our friendly and professional service.
            </p>
            <p>
              If you have any questions or would like to schedule an
              appointment, please do not hesitate to contact us. We look forward
              to hearing from you soon!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
