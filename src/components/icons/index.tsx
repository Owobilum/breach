import { type ReactElement, type SVGProps } from "react";

import { BreachIcon } from "./BreachIcon";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { BackIcon } from "./BackIcon";

export type SVGElementProps = SVGProps<SVGSVGElement> & {
  name: "breach" | "arrow_up" | "back";
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
    default:
      return <span />;
  }
}

export { Icon };
