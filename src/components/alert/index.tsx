import {
  type ComponentPropsWithRef,
  type ReactElement,
  type Ref,
  forwardRef,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/helpers";

const alertVariants = cva(
  "w-fit rounded-md bg-white px-2 py-1 text-xs italic",
  {
    variants: {
      variant: {
        success: "text-green-500",
        error: "text-red-500",
        default: "text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface AlertProps
  extends ComponentPropsWithRef<"p">,
    VariantProps<typeof alertVariants> {
  message?: string;
  variant?: "success" | "error" | "default";
}

const Alert = forwardRef(function Alert(
  { message, className, variant, ...restProps }: AlertProps,
  ref: Ref<HTMLParagraphElement>,
): ReactElement {
  return (
    <p
      className={cn(alertVariants({ variant }), className)}
      role="alert"
      {...restProps}
      ref={ref}
    >
      {message ?? "shshhsh"}
    </p>
  );
});

Alert.displayName = "Alert";

export { Alert };
