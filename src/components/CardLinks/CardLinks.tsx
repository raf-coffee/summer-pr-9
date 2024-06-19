import { Col, Container, Row } from "react-bootstrap";

export function CardLinks() {
  return (
    <Container>
      <Row className="justify-content-start my-4">
        <Col xs={5} sm={4} className="pe-0">
          <a href="" className="text-decoration-none fs-14">
            Рубашки Medicine
          </a>
        </Col>
        <Col xs={7} sm={4} className="px-0 px-sm-1">
          <a href="" className="text-decoration-none fs-14">
            Все модели Medicine
          </a>
        </Col>
        <Col xs={"auto"} sm={4} className="mt-2 mt-sm-0">
          <a href="" className="text-decoration-none fs-14">
            Рубашки
          </a>
        </Col>
      </Row>
    </Container>
  );
}
