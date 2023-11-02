import { type ReactElement, type SVGProps } from "react";

import { BreachIcon } from "./BreachIcon";

export type SVGElementProps = SVGProps<SVGSVGElement> & {
  name: "breach";
};

function Icon(props: SVGElementProps): ReactElement {
  const { name, ...restProps } = props;

  switch (name) {
    case "breach":
      return <BreachIcon name={name} {...restProps} />;
    default:
      return <span />;
  }
}

export { Icon };
