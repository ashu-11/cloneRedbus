import { Image, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<FaRegUserCircle />}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                SignIn/SignUp
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
