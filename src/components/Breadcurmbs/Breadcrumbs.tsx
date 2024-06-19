import { Col, Container, Image, Row } from "react-bootstrap";

export function Breadcrumbs() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={"auto"} className="px-1">
          <a href="" className="mb-0 text-decoration-none text-secondary fs-14">
            Каталог
          </a>
        </Col>
        <Col xs={"auto"} className="p-0">
          <Image src={"/right.svg"} />
        </Col>
        <Col xs={"auto"} className="px-1">
          <a href="" className="mb-0 text-decoration-none text-secondary fs-14">
            Женщинам
          </a>
        </Col>
        <Col xs={"auto"} className="p-0">
          <Image src={"/right.svg"} />
        </Col>
        <Col xs={"auto"}>
          <a href="" className="mb-0 text-decoration-none text-secondary">
            ...
          </a>
        </Col>
        <Col xs={"auto"} className="p-0">
          <Image src={"/right.svg"} />
        </Col>
        <Col xs={"auto"} className="px-1">
          <a href="" className="mb-0 text-decoration-none text-secondary fs-14">
            Рубашки
          </a>
        </Col>
      </Row>
    </Container>
  );
}
