import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grey-900 disabled:pointer-events-none disabled:bg-grey-300 hover:opacity-80",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white",
        outline: "border border-grey-300 bg-transparent text-grey-900",
        black: "bg-grey-900 text-white",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2",
        fullwidth: "py-3 w-full",
      },
      font: {
        default: "font-inter",
        grotesk: "font-grotesk",
      },
      text: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-xl",
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
