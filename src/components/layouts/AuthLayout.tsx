import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../container";
import { BreachLogo } from "../breach-logo";

function AuthLayout(): ReactElement {
  return (
    <div>
      <Container>
        <header className="flex h-[7.5rem] items-center">
          <BreachLogo />
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

export { AuthLayout };
