import { type ReactElement, type SVGProps } from "react";

function HomeIcon({
  height,
  width,
  className,
  ...restProps
}: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      width={width ?? 20}
      height={height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...restProps}
    >
      <path d="M16.7 5.68336L11.9 2.32503C10.5917 1.40836 8.58332 1.45836 7.32499 2.43336L3.14999 5.6917C2.31666 6.3417 1.65833 7.67503 1.65833 8.72503V14.475C1.65833 16.6 3.38332 18.3334 5.50832 18.3334H14.4917C16.6167 18.3334 18.3417 16.6084 18.3417 14.4834V8.83336C18.3417 7.70836 17.6167 6.32503 16.7 5.68336ZM10.625 15C10.625 15.3417 10.3417 15.625 9.99999 15.625C9.65832 15.625 9.37499 15.3417 9.37499 15V12.5C9.37499 12.1584 9.65832 11.875 9.99999 11.875C10.3417 11.875 10.625 12.1584 10.625 12.5V15Z" />
    </svg>
  );
}

export { HomeIcon };
