import { Breadcrumbs } from "../Breadcurmbs/Breadcrumbs";
import { CardBottom } from "../CardBottom/CardBottom";
import { CardImage } from "../CardImage/CardImage";
import { CardLinks } from "../CardLinks/CardLinks";
import { Conditions } from "../Conditions/Conditions";
import { Description } from "../Description/Description";
import { Price } from "../Price/Price";

export function Card() {
  return (
    <>
      <CardImage />
      <Breadcrumbs />
      <CardLinks />
      <Price />
      <Conditions />
      <Description />
      <CardBottom />
    </>
  );
}
