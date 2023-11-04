import { type ReactElement } from "react";

import { Container } from "../../../container";
import { Button } from "../../../button";

function HomepageHeroSection(): ReactElement {
  return (
    <section className="bg-offWhite flex items-center lg:h-[39.4375rem]">
      <Container className="flex items-center ">
        <div className="flex-1">
          <h1 className="text-large leading-large font-inter tracking-2x-tighter font-semibold capitalize">
            find <span className="text-primary-700">great</span> ideas
          </h1>
          <p className="text-grey-900 font-inter leading-11 my-[1.125rem] mb-[2.625rem] text-2xl">
            Subscribe to your favourite creators and thinkers. Support work that
            matters
          </p>
          <Button text="lg" font="grotesk" className="font-bold">
            Join Breach
          </Button>
        </div>
        <img
          src="/images/hero.gif"
          alt="mascot"
          className="block max-h-[32rem] max-w-[40.0625rem] flex-1"
        />
      </Container>
    </section>
  );
}

export { HomepageHeroSection };
