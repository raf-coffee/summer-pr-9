import { Col, Container, Row } from "react-bootstrap";

export function Price() {
  return (
    <Container>
      <Row className="justify-content-start my-4">
        <Col xs={12} className="mb-1 fs-2 text-secondary">
          <span className="text-decoration-line-through">2 699</span>{" "}
          <span>2 499 &#8381;</span>
        </Col>
        <Col>
          <span className="fs-2 fw-bold">2 227 &#8381;</span>
          <span> - с промокодом</span>
        </Col>
      </Row>
    </Container>
  );
}
