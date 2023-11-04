import { NavLink } from "react-router-dom";

import type { IRoute } from "../../types";
import { IconButton } from "../icon-button";
import { Icon } from "../icons";
import { cn } from "../../utils/helpers";

interface IRouteItem {
  item: IRoute;
  className?: string;
}

function RouteItem({ item, className }: IRouteItem) {
  return (
    <NavLink
      to={item.path || ""}
      className={cn("block w-full no-underline", className)}
    >
      {({ isActive }) => {
        return (
          <IconButton
            data-active={isActive}
            size="fullwidth"
            icon={
              <Icon
                name={item?.routeDescriptors?.icon || "text"}
                data-active={isActive}
                className="data-[active=false]:fill-grey-500 fill-primary-600"
              />
            }
            className="data-[active=false]:text-grey-500 data-[active=true]:bg-primary-light justify-start border-none px-3 text-primary-600 data-[active=false]:font-normal"
          >
            {item.routeDescriptors?.name}
          </IconButton>
        );
      }}
    </NavLink>
  );
}

export { RouteItem };
