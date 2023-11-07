import {
  type PropsWithChildren,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";

import { cn } from "../../utils/helpers";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
}

function Image(props: ImageProps): ReactElement {
  const { src, className, ...restProps } = props;
  return (
    <img
      src={src}
      className={cn(
        "block w-full rounded-2xl object-cover object-center lg:max-h-[11.5rem] lg:min-h-[11.5rem] lg:min-w-[16.625rem] lg:max-w-[16.625rem]",
        className,
      )}
      {...restProps}
    />
  );
}

interface FrameProps extends ComponentPropsWithoutRef<"div"> {}

function Frame(props: FrameProps): ReactElement {
  const { children, className, ...restProps } = props;
  return (
    <div className={cn("", className)} {...restProps}>
      {children}
    </div>
  );
}

interface HeaderProps extends ComponentPropsWithoutRef<"h6"> {}

function Header(props: PropsWithChildren<HeaderProps>): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <h6
      className={cn(" text-sm uppercase text-grey-600", className)}
      {...restProps}
    >
      {children}
    </h6>
  );
}

interface TitleProps extends ComponentPropsWithoutRef<"h6"> {}

function Title(props: PropsWithChildren<TitleProps>): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <h6
      className={cn(
        "mb-1 mt-2 text-2xl font-semibold leading-9 text-grey-900",
        className,
      )}
      {...restProps}
    >
      {children}
    </h6>
  );
}

interface BodyProps extends ComponentPropsWithoutRef<"p"> {}

function Body(props: PropsWithChildren<BodyProps>): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <p
      className={cn("line-clamp-2 text-base text-grey-600", className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

interface FooterProps extends ComponentPropsWithoutRef<"div"> {}

function Footer(props: PropsWithChildren<FooterProps>): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <div className={cn("", className)} {...restProps}>
      {children}
    </div>
  );
}

interface CardProps extends ComponentPropsWithoutRef<"article"> {}

function Card(props: PropsWithChildren<CardProps>): ReactElement {
  const { children, className, ...restProps } = props;

  return (
    <article
      className={cn(
        "flex w-full flex-col gap-4 font-inter lg:h-[11.5rem] lg:flex-row lg:items-start  lg:gap-7",
        className,
      )}
      {...restProps}
    >
      {children}
    </article>
  );
}

Card.Image = Image;
Card.Frame = Frame;
Card.Header = Header;
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export { Card };
