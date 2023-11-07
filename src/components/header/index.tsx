import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { BreachLogo } from "../breach-logo";
import { Button } from "../button";
import { Container } from "../container";
import { clearStoredUser } from "../../utils/storage";
import { useStoredUser } from "../../hooks/useStoredUser";

function Header(): ReactElement {
  const navigate = useNavigate();
  const { user } = useStoredUser();

  return (
    <header className="bg-offWhite py-5 lg:py-9">
      <Container className="flex items-center justify-between">
        <BreachLogo />

        <div className="flex gap-8">
          {!user && (
            <>
              <Button
                variant="outline"
                font="grotesk"
                onClick={() => navigate("/auth")}
              >
                Log in
              </Button>
              <Button onClick={() => navigate("/auth/register")}>
                Join Breach
              </Button>
            </>
          )}
          {!!user && (
            <>
              <Button onClick={() => clearStoredUser()}>Log out</Button>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}

export { Header };
