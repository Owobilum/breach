import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { Container } from "../container";
import { BreachLogo } from "../breach-logo";
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
    <footer className="border-grey-100  border border-t py-4 lg:py-0">
      <Container className="relative flex flex-col lg:h-[6.5rem] lg:flex-row lg:items-center lg:justify-between">
        <BreachLogo />
        <Button className="bg-primary-200 absolute -top-32 right-20 rounded-full p-5 lg:-top-72 lg:right-40 lg:h-14 lg:w-14 lg:px-0 lg:py-0">
          <Icon name="arrow_up" className="fill-white" />
        </Button>
        <nav className="pt-4 lg:pt-0">
          <ul className="flex list-none flex-col gap-4 lg:flex-row lg:gap-10">
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
