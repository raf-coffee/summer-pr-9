import { Col, Row } from "react-bootstrap";
import { Breadcrumbs } from "../Breadcurmbs/Breadcrumbs";
import { CardBottom } from "../CardBottom/CardBottom";
import { CardImage } from "../CardImage/CardImage";
import { CardLinks } from "../CardLinks/CardLinks";
import { Conditions } from "../Conditions/Conditions";
import { Description } from "../Description/Description";
import { Price } from "../Price/Price";
import { Socials } from "../Socials/Socials";

export function Card() {
  return (
    <Row className="max-width-3 mx-auto">
      <Col xs={12} md={6}>
        <CardImage />
      </Col>
      <Col xs={12} md={6} className="p-4">
        <Breadcrumbs />
        <CardLinks />
        <Price />
        <Conditions />
        <div className="d-md-flex flex-column">
          <Description />
          <CardBottom />
        </div>
        <Socials />
      </Col>
    </Row>
  );
}
