import {
  type ComponentPropsWithoutRef,
  type Ref,
  type ReactElement,
  forwardRef,
} from "react";

import { cn } from "../../utils/helpers";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input = forwardRef(function Input(
  { className, ...restProps }: InputProps,
  ref: Ref<HTMLInputElement>,
): ReactElement {
  return (
    <input
      className={cn(
        "border-grey-200 bg-transparent my-2 flex h-12 w-full rounded-lg border px-4 py-3 text-base transition-colors focus-visible:outline-none  focus-visible:ring-1 focus-visible:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...restProps}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export { Input };
