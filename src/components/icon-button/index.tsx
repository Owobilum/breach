import { type ReactElement, type ReactNode } from "react";
import { Button, type ButtonProps } from "../button";

interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
}

function IconButton(props: IconButtonProps): ReactElement {
  const {
    variant = "outline",
    size = "sm",
    text = "sm",
    icon,
    children,
    ...restProps
  } = props;
  return (
    <Button variant={variant} size={size} text={text} {...restProps}>
      <span>{icon}</span>
      <span>{children}</span>
    </Button>
  );
}

export { IconButton };
