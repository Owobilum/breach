import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { BreachLogo } from "../logo";
import { IconButton } from "../icon-button";
import { Icon } from "../icons";
import { userRoutes } from "../../routes";
import { RouteItem } from "../route-item";

function UserLayout(): ReactElement {
  return (
    <div className="flex">
      <aside className="border-grey-200 fixed left-0 top-0 h-[50.625rem] w-[18.25rem] border px-6 pt-[3.1875rem]">
        <BreachLogo className="ml-4" />
        <IconButton
          icon={<Icon name="pen" className="fill-white" />}
          variant="default"
          size="fullwidth"
          className="mb-10 mt-[4.375rem]"
        >
          Start writing
        </IconButton>
        {userRoutes?.map((route, i) => (
          <RouteItem key={i} item={route} className="mb-5" />
        ))}
      </aside>
      <main className="ml-[18.25rem] w-full">
        <Outlet />
      </main>
    </div>
  );
}

export { UserLayout };
