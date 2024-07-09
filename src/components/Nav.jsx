import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../css/Nav.css"
// function Menu() {
const Menu = ({backgroundImage}) => {
  return (
    <div className='nav-head' style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className="image-icon">
      </div>
    <Navbar  expand="lg" className="">
    <Container>
      <NavLink >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLink to="/">
      <Navbar.Brand to="#home"></Navbar.Brand>
        </NavLink>
        <Nav>
          <Nav.Link>
            <NavLink to="/" style={{ color: "white", textDecoration: "none", borderBottom:"0", justifyContent: "space-between"}}>
              offers
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink to="/" style={{ color:"white",  textDecoration:""}}>
              Products
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              Testimonials
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/" style={{ color:"white", textDecoration: "none" }}>
              sign up
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </NavLink>
      
    </Container>
  </Navbar>
  </div>
  );
}

export default Menu;