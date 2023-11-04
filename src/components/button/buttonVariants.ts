import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-1 lg:gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grey-900 disabled:pointer-events-none disabled:bg-grey-300 hover:opacity-80",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white",
        outline: "border border-grey-300 bg-transparent text-grey-900",
        black: "bg-grey-900 text-white",
      },
      size: {
        default: "px-3 py-2 lg:px-6 lg:py-3",
        sm: "px-2 py-1 lg:px-4 lg:py-2",
        fullwidth: "py-2 lg:py-3 w-full",
      },
      font: {
        default: "font-inter",
        grotesk: "font-grotesk",
      },
      text: {
        default: "text-sm lg:text-base",
        sm: "text-xs lg:text-sm",
        lg: "text-lg lg:text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "default",
      text: "default",
    },
  },
);
