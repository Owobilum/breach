import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

function AuthLayout(): ReactElement {
  return (
    <div>
      <h1>Auth Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { AuthLayout };
