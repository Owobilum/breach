import { Icon, type SVGElementProps } from "../icons";
import { cn } from "../../utils/helpers";

function BeachLogo(props: Omit<SVGElementProps, "name">) {
  const { className, ...restProps } = props;

  return (
    <Icon
      {...restProps}
      name="breach"
      className={cn("fill-purple-600 h-[1.5rem] w-[9rem]", className)}
    />
  );
}

export { BeachLogo };
