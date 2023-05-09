import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";
import "./french-lessons.styles.css";
import frenchImg from "../../imgs/french.png";

const FrenchLessons = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="home-container"
          xs={12}
          md={4}
          lg={2}
          xxl={2}
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>

        <Col
          className="french-container"
          sm={{ span: 12 }}
          md={{ span: 7 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
        >
           <img src={frenchImg} alt="french-img" className="french-img" />
          
        </Col>
      </Row>
    </Container>
  );
};

export default FrenchLessons;