import "./dead-vase.styles.css";
import vase1 from "../../imgs/vase1.png";
import vase2 from "../../imgs/vase2.png";
import vase3 from "../../imgs/vase3.png";
import { Container, Row, Col } from 'react-bootstrap';
import Home from "../home/home.component";

const DeadVase = () => {
    return (
        <Container fluid>
      <Row>
      <Col className='home-container' sm={{ span: 12  }}  md={{ span: 4  }} lg={{span: 2 }} xl={{span: 2}} style={{ paddingLeft: 0 }}>
          <Home />
       </Col>
       <Col className="vase-container" sm={{ span: 10  }} md={{ span:7  }} lg={{span: 9 }} xl={{span: 9}} >
     <div className="dead-vase-div1">
     <img src={vase1} alt="vase1" className="vase-img1" />
     <p className="vase-text1">
            The structures whole ideology is in connection with dead cells
            finding the structure in nature in the form of dried ground, turtle
            shell, a wall and many more items of every day. Vase was created
            specifically for dead plants. With an open body for the dried leafs
            to grow out of. Built on the structure vase was crafted by 3D
            printing parts and combining them together by hand, with 3D resin
            and Uv light in hand.
          </p>
     </div>
     <div className="dead-vase-div2">
     <p className="vase-text2">
     Voronoi structures are geometric patterns that occur naturally in
            various systems, such as the distribution of cells in plant tissues,
            the shape of soap bubbles, and the arrangement of particles in a
            crystal lattice. Voronoi structures are characterised by a set of
            points in a space, known as seeds or generators, which partition the
            space into regions, called Voronoi cells, such that each cell
            contains all the points that are closer to its own generator than to
            any other.
          </p>
          <img src={vase2} alt="vase2" className="vase-img2" />
          <img src={vase3} alt="vase2" className="vase-img3" />
     </div>
        </Col>
      </Row>
    </Container>
    )
}

export default DeadVase;