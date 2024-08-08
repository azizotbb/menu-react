import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Item() {
  return (
    <Row>
      <Col sm="12">
        <Card className=" d-flex flex-row">
          <Card.Img variant="right" src="1.jpg" className="img-item" />
          <Card.Body>
            <Card.Title className="almarai-regular d-flex flex-row justify-content-between">
              <div>بيض بيتسو</div>
              <div className="item-price"> 30 ريال</div>
            </Card.Title>
            <Card.Text className="almarai-light">يض بيتسويض بيت</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
