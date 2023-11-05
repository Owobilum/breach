import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { BreachLogo } from "../breach-logo";
import { Button } from "../button";
import { Container } from "../container";

function Header(): ReactElement {
  const navigate = useNavigate();

  return (
    <header className="bg-offWhite py-5 lg:py-9">
      <Container className="flex items-center justify-between">
        <BreachLogo />

        <div className="flex gap-8">
          <Button variant="outline" font="grotesk">
            Log in
          </Button>
          <Button onClick={() => navigate("/auth/register")}>
            Join Breach
          </Button>
        </div>
      </Container>
    </header>
  );
}

export { Header };
