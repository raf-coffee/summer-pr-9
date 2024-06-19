import { Col, Container, Image, Row } from "react-bootstrap";

export function Socials() {
  return (
    <Container className="ps-md-0">
      <Row className="d-none d-md-flex align-items-center justify-content-start">
        <Col lg={"auto"} className="d-none d-lg-block">
          <p className="mb-0 text-uppercase">Поделиться:</p>
        </Col>
        <Col md={"auto"}>
          <Image src="/vk.svg" className="d-inline-block ms-auto" />
        </Col>
        <Col md={"auto"}>
          <Image src="/google.svg" className="d-inline-block ms-auto" />
        </Col>
        <Col md={"auto"}>
          <Image src="/facebook.svg" className="d-inline-block ms-auto" />
        </Col>
        <Col md={"auto"}>
          <Image src="/twitter.svg" className="d-inline-block ms-auto" />
        </Col>
        <Col md={"auto"} className="pe-0">
          <div className="d-flex justify-content-center bg-secondary-subtle py-2 px-3 arrow">
            123
          </div>
        </Col>
      </Row>
    </Container>
  );
}
