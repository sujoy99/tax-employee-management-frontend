import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
  const fullYear = new Date().getFullYear()

    return ( 
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
            <Col lg={12}>
              <h4 className="text-white text-center">{fullYear} CopyRight & Reserved</h4>
            </Col>
            </Container>
        </Navbar>
     );
}
 
export default Footer;
