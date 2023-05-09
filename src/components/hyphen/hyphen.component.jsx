import { Container, Row, Col } from 'react-bootstrap';
import Home from "../home/home.component";
import hyphenImg from "../../imgs/hyphenImg.png";
import './hyphen.styles.css';

const Hyphen = () => {
    return (
    <Container fluid>
    <Row>
    <Col className='home-container' xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 2 }} xl={{ span: 2 }} style={{ paddingLeft: 0 }}>
    <Home />
    </Col>
    <Col className="hyphen-container" xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 8 }} xl={{ span: 8 }}>
    <img className="hyphen-img" src={hyphenImg} alt="hyphen-img" />
    </Col>
    </Row>
    </Container>
    );
    }
    
    
export default Hyphen;