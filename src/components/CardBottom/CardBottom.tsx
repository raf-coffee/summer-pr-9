import { Button, Container, Image, Row } from "react-bootstrap";

export function CardBottom() {
  return (
    <Container>
      <Row>
        <div className="d-grid gap-2 my-4">
          <Button
            variant="primary"
            size="lg"
            className="text-uppercase rounded-0 fs-14 fw-semibold"
          >
            В магазин
          </Button>
        </div>
      </Row>
      <Row className="mb-5">
        <div className="d-grid gap-2">
          <Button
            variant="link"
            className="d-flex text-uppercase text-black fw-semibold text-decoration-none"
          >
            <span className="d-inline-block mx-auto">В избранное</span>
            <Image src="/share.svg" className="d-inline-block ms-auto" />
          </Button>
        </div>
      </Row>
    </Container>
  );
}
