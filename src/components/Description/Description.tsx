import { Button, Col, Container, Image, Row } from "react-bootstrap";

export function Description() {
  return (
    <Container className="ps-md-0 order-md-2">
      <Row className="my-4">
        <Col>
          <p className="mb-2 fs-14">
            Рубашка Medicine выполнена из вискозной ткани с клетчатым узором.
          </p>
          <p className="mb-0 fs-14">
            Детали: прямой крой; отложной воротник; планка и манжеты на
            пуговицах; карман на груди.
          </p>
        </Col>
      </Row>
      <Row className="d-md-none">
        <div className="d-grid gap-2 border border-start-0 border-end-0 py-3">
          <Button
            variant="link"
            className="text-black text-start text-decoration-none fw-bold text-uppercase letter-spacing-1 p-0 d-flex"
          >
            Подробнее
            <Image src="/chevron-down.svg" className="d-inline-block ms-auto" />
          </Button>
        </div>
      </Row>
    </Container>
  );
}
