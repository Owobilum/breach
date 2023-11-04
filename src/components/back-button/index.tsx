import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { IconButton } from "../icon-button";
import { Icon } from "../icons";
import { cn } from "../../utils/helpers";

function BackButton({ className }: { className?: string }): ReactElement {
  const navigate = useNavigate();

  return (
    <IconButton
      icon={<Icon name="back" className="stroke-grey-900" />}
      onClick={() => navigate(-1)}
      className={cn("border-none text-lg font-medium", className)}
    >
      Back
    </IconButton>
  );
}

export { BackButton };
