import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

export default function Item({ itemsData }) {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Zoom>
              <Col key={item.id} sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="right"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title almarai-light">
                        {item.title}
                      </div>
                      <div className="item-price almarai-light">
                        {item.price}
                      </div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description almarai-light">
                        {item.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
}
