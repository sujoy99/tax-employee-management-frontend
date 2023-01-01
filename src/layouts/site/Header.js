import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={""} className="navbar-brand">Navbar</Link>
                
                <Nav className="me-auto">
                    <Link to={""} className="navbar-brand">Book Add</Link>
                    <Link to={""} className="navbar-brand">Book List</Link>
                    <Link to={""} className="navbar-brand">Users</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
