import { Button, Col, Container, Image, Row } from "react-bootstrap";

export function CardBottom() {
  return (
    <Container className="px-0 order-md-1">
      <Row className="align-items-md-center mt-md-4">
        <Col md={6}>
          <div className="d-grid gap-2 my-4 my-md-0">
            <Button
              variant="primary"
              size="lg"
              className="text-uppercase rounded-0 fs-14 fw-semibold"
            >
              В магазин
            </Button>
          </div>
        </Col>
        <Col md={6} className="mb-5 mb-md-0">
          <div className="d-grid gap-2">
            <Button
              variant="link"
              className="d-flex d-md-inline-block text-uppercase text-black fw-semibold text-decoration-none"
            >
              <span className="mx-auto">В избранное</span>
              <Image
                src="/share.svg"
                className="d-inline-block d-md-none ms-auto"
              />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
