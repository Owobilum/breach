import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

function UserLayout(): ReactElement {
  return (
    <div>
      <h1>User Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { UserLayout };
