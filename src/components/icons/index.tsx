import { type ReactElement, type SVGProps } from "react";

import { BreachIcon } from "./BreachIcon";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { BackIcon } from "./BackIcon";
import { PenIcon } from "./PenIcon";
import { HomeIcon } from "./HomeIcon";
import { GridIcon } from "./GridIcon";
import { TextIcon } from "./TextIcon";

export type IconNameType =
  | "breach"
  | "arrow_up"
  | "back"
  | "pen"
  | "home"
  | "grid"
  | "text";

export type SVGElementProps = SVGProps<SVGSVGElement> & {
  name: IconNameType;
};

function Icon(props: SVGElementProps): ReactElement {
  const { name, ...restProps } = props;

  switch (name) {
    case "breach":
      return <BreachIcon name={name} {...restProps} />;
    case "arrow_up":
      return <ArrowUpIcon name={name} {...restProps} />;
    case "back":
      return <BackIcon name={name} {...restProps} />;
    case "pen":
      return <PenIcon name={name} {...restProps} />;
    case "home":
      return <HomeIcon name={name} {...restProps} />;
    case "grid":
      return <GridIcon name={name} {...restProps} />;
    case "text":
      return <TextIcon name={name} {...restProps} />;
    default:
      return <span />;
  }
}

export { Icon };
