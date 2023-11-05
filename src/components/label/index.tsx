import {
  forwardRef,
  Ref,
  type ComponentPropsWithRef,
  type ReactNode,
  type ReactElement,
} from "react";

import { cn } from "../../utils/helpers";

interface LabelProps extends ComponentPropsWithRef<"label"> {
  children: ReactNode;
}

const Label = forwardRef(function Label(
  { className, children, ...restProps }: LabelProps,
  ref: Ref<HTMLLabelElement>,
): ReactElement {
  return (
    <label
      className={cn("text-grey-900 font-inter block text-xs", className)}
      {...restProps}
      ref={ref}
    >
      {children}
    </label>
  );
});

export { Label };
