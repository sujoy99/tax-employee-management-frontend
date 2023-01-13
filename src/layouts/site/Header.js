import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={""} className="navbar-brand">Navbar</Link>
                
                <Nav className="me-auto">
                    <Link to={"/salary-type"} className="navbar-brand">Salary Type</Link>
                    <Link to={"/salary-structure"} className="navbar-brand">Salary Structure</Link>
                    <Link to={"/employee"} className="navbar-brand">Employee</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
