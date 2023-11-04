import { type ReactElement } from "react";

import { BreachLogo } from "../logo";
import { Button } from "../button";
import { Container } from "../container";

function Header(): ReactElement {
  return (
    <header className="bg-offWhite py-9">
      <Container className="flex items-center justify-between">
        <BreachLogo />

        <div className="flex gap-8">
          <Button variant="outline" font="grotesk">
            Log in
          </Button>
          <Button>Join Breach</Button>
        </div>
      </Container>
    </header>
  );
}

export { Header };
