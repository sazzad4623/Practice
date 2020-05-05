import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

function CardProducts() {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Card>
            <img
              width="100%"
              src="https://static-01.daraz.com.bd/original/c7d9f21176d901ae1065741d2d363fad.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>

              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardProducts;
