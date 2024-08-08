import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container>
        <Navbar.Brand href="#">
          <div className="almarai-bold" style={{ color: "rgb(143, 73, 22)" }}>
            مطعم جديد
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="البحث ..."
              className="me-2"
              aria-label="Search"
            />
            <button className="btn-search almarai-regular">البحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
