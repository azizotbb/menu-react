import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Category() {
  return (
    <Row>
      <Col className="d-flex justify-content-center m-3">
        <button className="btn-category almarai-light">الكل </button>
        <button className="btn-category almarai-light"> افطار</button>
        <button className="btn-category almarai-light"> غداء</button>
        <button className="btn-category almarai-light">عشاء </button>
      </Col>
    </Row>
  );
}
