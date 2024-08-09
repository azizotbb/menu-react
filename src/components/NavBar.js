import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

export default function NavBar({ filterSearch }) {
  const [search, setSearch] = useState("");
  const onSearch = () => {
    filterSearch(search);
  };

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
              type="text"
              placeholder="البحث ..."
              className="me-2"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <button
              className="btn-search almarai-regular"
              onClick={onSearch()}
              type="button"
            >
              البحث
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
