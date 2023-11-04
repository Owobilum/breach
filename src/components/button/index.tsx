import { forwardRef, type ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/helpers";
import { buttonVariants } from "./buttonVariants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, font, text, ...restProps }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, font, text, className }))}
        ref={ref}
        {...restProps}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
