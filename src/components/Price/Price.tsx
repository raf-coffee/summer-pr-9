import { Col, Container, Row } from "react-bootstrap";

export function Price() {
  return (
    <Container>
      <Row className="justify-content-start my-4">
        <Col
          xs={12}
          lg={"auto"}
          className="mb-1 me-4 fs-2 fs-lg-3 text-secondary px-lg-0"
        >
          <span className="text-decoration-line-through">2 699</span>{" "}
          <span>2 499 &#8381;</span>
        </Col>
        <Col lg={"auto"} className="px-lg-0">
          <span className="fs-2 fs-lg-3 fw-bold">2 227 &#8381;</span>
          <span> - с промокодом</span>
        </Col>
      </Row>
    </Container>
  );
}
