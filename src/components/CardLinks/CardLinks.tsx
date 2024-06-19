import { Col, Container, Row } from "react-bootstrap";

export function CardLinks() {
  return (
    <Container className="px-md-0">
      <Row>
        <Col>
          <h1 className="text-uppercase fs-2 fw-bold mt-4 mb-0">
            Рубашка Medicine
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-start my-4">
        <Col xs={6} lg={4} className="pe-0">
          <a href="" className="text-decoration-none fs-14">
            Рубашки Medicine
          </a>
        </Col>
        <Col xs={6} lg={4} className="px-0">
          <a href="" className="text-decoration-none fs-14">
            Все модели Medicine
          </a>
        </Col>
        <Col xs={"auto"} lg={4} className="mt-2 mt-lg-0">
          <a href="" className="text-decoration-none fs-14">
            Рубашки
          </a>
        </Col>
      </Row>
    </Container>
  );
}
