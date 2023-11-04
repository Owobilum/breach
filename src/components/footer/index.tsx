import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { Container } from "../container";
import { BreachLogo } from "../logo";
import { Icon } from "../icons";
import { Button } from "../button";

const links: { text: string; link: string }[] = [
  { text: "support@breach.example", link: "/" },
  { text: "About Breach", link: "/" },
  { text: "Terms", link: "/" },
  { text: "Privacy Policy", link: "/" },
];

function Footer(): ReactElement {
  return (
    <footer className="border-grey-100  border border-t">
      <Container className="relative flex h-[6.5rem] items-center justify-between">
        <BreachLogo />
        <Button className="bg-primary-200 absolute -top-72 right-40 rounded-full p-5">
          <Icon name="arrow_up" className="fill-white" />
        </Button>
        <nav>
          <ul className="flex list-none gap-10">
            {links.map(({ link, text }) => (
              <li key={text}>
                <Link
                  to={link}
                  className="font-inter text-grey-900 items-center text-base hover:text-primary-600"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
