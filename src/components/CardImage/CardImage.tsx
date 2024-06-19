import { Col, Container, Image, Row } from "react-bootstrap";

export function CardImage() {
  return (
    <Container>
      <Row className="justify-content-center justify-content-md-start justify-content-lg-center max-width-2 mx-auto">
        <Col xs={3} className="d-none d-md-flex flex-column gap-4 mt-4">
          <Image src="/small-1.png" />
          <Image src="/small-2.png" />
          <Image src="/small-3.png" />
          <div>
            <Image
              src="/chevron-down.svg"
              className="px-4 py-2 bg-secondary-subtle d-block mx-auto"
            />
          </div>
        </Col>
        <Col xs={"auto"} md={9} className="p-0 max-width">
          <Image src="/image.png" className="full-width d-block mx-auto" />
        </Col>
      </Row>
    </Container>
  );
}
