import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const contact = () => {
  return (
    <div>
      <h1> Contact Me!</h1>
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>My Contact Information</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Button variant="outline-dark">
                        Email: adrian.auch11@gmail.com
                      </Button>
                    </li>
                    <li>
                      <Button
                        href="https://www.linkedin.com/in/aauchterlonie/"
                        variant="outline-dark"
                      >
                        LinkedIn
                      </Button>
                    </li>
                    <li>
                      <Button
                        href="https://github.com/adrianauch"
                        variant="outline-dark"
                      >
                        Github
                      </Button>
                    </li>
                  </ul>
                </Card.Text>
                <Button variant="dark">Resume Download</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comments/Additional Information</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Col xs="auto" className="my-1">
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contact;
