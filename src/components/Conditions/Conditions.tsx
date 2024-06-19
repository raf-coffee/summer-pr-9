import { Col, Container, Image, Row } from "react-bootstrap";

export function Conditions() {
  return (
    <div className="bg-secondary-subtle py-4">
      <Container>
        <Row className="justify-content-start">
          <Col>
            <p className="fs-14 mb-2">
              <Image src="/check.svg" className="d-inline-block pe-3" />В
              наличии в магазине{" "}
              <a href="" className="text-decoration-none">
                Lamoda
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="fs-14 mb-0">
              <Image src="/delivery.svg" className="d-inline-block pe-3" />
              Бесплатная доставка
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
