import Home from "../home/home.component";
import { Container, Row, Col } from 'react-bootstrap';

const March32 = () => {
    return (
        <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2} className='home-container' style={{ paddingLeft: 0 }}>
            <Home />
         </Col>
         </Row>
         </Container>
    )
}

export default March32;