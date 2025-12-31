import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/Frame-14.png";

function BasicNav() {
  return (
    <Navbar expand="lg" className="tinyBar" sticky="top" style={{ backgroundColor: "#FEFFF0" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="App-logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlink">
            <Nav.Link as={Link} to="/" className="linker">Home</Nav.Link>
            <Nav.Link as={Link} to="/articles" className="linker">Articles</Nav.Link>
            <Nav.Link className="linker" href="#About">About</Nav.Link>
            <Nav.Link className="linker" href="#Hire Me">Hire Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;
