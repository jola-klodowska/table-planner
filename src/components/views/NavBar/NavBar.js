import styles from './NavBar.module.scss'
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className={styles.navBar} bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Waiter.app</Navbar.Brand>
                <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;