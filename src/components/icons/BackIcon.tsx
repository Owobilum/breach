import { type ReactElement, type SVGProps } from "react";

function BackIcon({
  height,
  width,
  className,
  ...restProps
}: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 16}
      height={height ?? 16}
      viewBox="0 0 16 16"
      className={className}
      {...restProps}
      fill="none"
    >
      <path
        d="M10 4L6 8L10 12"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BackIcon };
