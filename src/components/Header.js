import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Row>
      <Col className="justify-content-center">
        <h2 className=" header almarai-bold">قائمه الطعام</h2>
        <div className="justify-content-center d-flex">
          <p className="header-line"></p>
        </div>
      </Col>
    </Row>
  );
}
