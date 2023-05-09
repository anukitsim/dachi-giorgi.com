import { Container, Row, Col } from "react-bootstrap";
import Home from "../home/home.component";
import "./psr.styles.css";
import classnames from "classnames";
import { useLocation } from "react-router-dom";

const Psr = () => {
  const location = useLocation();
  return (
    <Container fluid>
      <Row>
        <Col
          className={classnames("home-container", {
            "psr-page": location.pathname === "/psr",
          })}
          sm={{ span: 2 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
          style={{ paddingLeft: 0 }}
        >
          <Home />
        </Col>
      </Row>
    </Container>
  );
};

export default Psr;