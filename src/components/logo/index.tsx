import { type ReactElement } from "react";

import { Icon, type SVGElementProps } from "../icons";
import { cn } from "../../utils/helpers";
import { Link } from "react-router-dom";

function BreachLogo(props: Omit<SVGElementProps, "name">): ReactElement {
  const { className, ...restProps } = props;

  return (
    <Link to="/">
      <Icon
        name="breach"
        className={cn("h-6 w-36 fill-primary-600", className)}
        {...restProps}
      />
    </Link>
  );
}

export { BreachLogo };
