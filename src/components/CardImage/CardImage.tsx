import { Col, Container, Image, Row } from "react-bootstrap";

export function CardImage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={"auto"} className="p-0">
          <Image src="/image.png" />
        </Col>
      </Row>
    </Container>
  );
}
