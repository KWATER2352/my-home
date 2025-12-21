import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/Frame-14.png";

function BasicNav() {
  return (
    <Navbar expand="lg" className="tinyBar" sticky="top" style={{ backgroundColor: "#FEFFF0" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="App-logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlink">
            <Nav.Link className="linker" href="#home">Home</Nav.Link>
            <Nav.Link className="linker" href="#Articles">Articles</Nav.Link>
            <Nav.Link className="linker" href="#About">About</Nav.Link>
            <Nav.Link className="linker" href="#Hire Me">Hire Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;
