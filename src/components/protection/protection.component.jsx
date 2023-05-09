import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";
import "./protection.styles.css";
import protectionImg1 from "../../imgs/protection1.png";
import protectionImg2 from "../../imgs/protection2.png";
import protectionImgMobile from "../../imgs/protection-mobile.png";

const Protection = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="home-container"
          xs={12}
          md={4}
          lg={2}
          xl={2}
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>
        <Col
          className="protection-container"
          xs={12}
          sm={{ span: 12 }}
          md={{ span: 7 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
        >
          <Col
            className="protection1"
            xs={12}
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 9 }}
            xl={{ span: 9 }}
          >
            <img
              src={protectionImg1}
              alt="protection-img1"
              className="protection-img1"
            />
          
            
            <img
              src={protectionImgMobile}
              alt="protection--mobile"
              className="protection-mobile  d-md-none"
            />
            <Col className="protection2">
            <p className="protection-text-mobile d-md-none">
              Object is a piece of armour, perhaps, "a skin of metal" as older
              men suggested me to obtain to me as a kid. A way of protection in
              the country dedicated to burning of my family, family who want to
              live in their country and be true to themeselves against the norms
              of the elderly who can't see the world past false walls of so
              called holly place, a place of which in truth god is not part of.
              Using silver and bronze handiet was casted and formed by hand
              without the use of the machines, this process was crucial to
              insure the connection I could obtain with it. With all the effort
              and energy it has absorbed to support the one to whom it belongs
              at any given moment in the History of its existence.
            </p>
              <img
                src={protectionImg2}
                alt="protection-img2"
                className="protection-img2"
              />
        
              <p className="protection-text">
                Currently Handlet is owned by Sadie Sink on the random day on
                which we have stumbled into each other she became captivated
                with the piece, while to me handled had lost its objective to
                protect me once I left Georgia and became a sole reminder of
                what I have achieved in the land that was landed to me. For her
                it must find its own purpose and this stands at the base of all
                of my creations, as they are not meant to be hold onto but be
                transported from one story to another. connecting all previous
                owners with an invisible string of history As witnessed on The
                Hollywood Reporter release Its journey is in good hands
              </p>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Protection;