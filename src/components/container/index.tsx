import {
  ComponentPropsWithRef,
  type PropsWithChildren,
  type ReactElement,
} from "react";

import { cn } from "../../utils/helpers";

interface ContainerProps extends ComponentPropsWithRef<"div"> {}

function Container(props: PropsWithChildren<ContainerProps>): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <div
      className={cn(
        "max-w-8xl mx-auto my-0 px-[2%] md:px-[5%] xl:px-[9%]",
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

export { Container };
