import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
         <NavLink to="/" className="navbar-brand" exact>
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink
              className="nav-link"
              activeClassName="active"
              to="/"
              exact>
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/about"
              exact>
              About
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar