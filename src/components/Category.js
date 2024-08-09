import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Category({ filterCategory, gategory }) {
  const categoryMap = gategory.map((elm) => {
    return (
      <button
        className="btn-category almarai-light"
        onClick={() => onFilter(elm)}
      >
        {elm}
      </button>
    );
  });

  const onFilter = (cat) => {
    filterCategory(cat);
  };
  return (
    <Row>
      <Col className="d-flex justify-content-center m-3">{categoryMap}</Col>
    </Row>
  );
}
