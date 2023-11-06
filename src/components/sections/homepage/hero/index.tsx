import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../../container";
import { Button } from "../../../button";

function HomepageHeroSection(): ReactElement {
  const navigate = useNavigate();
  return (
    <section className="bg-offWhite flex items-center lg:h-[39.4375rem]">
      <Container className="flex flex-col items-center lg:flex-row">
        <div className="flex-1">
          <h1 className="lg:text-large lg:leading-large font-inter tracking-2x-tighter text-5xl font-semibold capitalize leading-[3.75rem]">
            find <span className="text-primary-700">great</span> ideas
          </h1>
          <p className="text-grey-900 font-inter leading-11 my-[1.125rem] mb-[2.625rem] text-2xl">
            Subscribe to your favourite creators and thinkers. Support work that
            matters
          </p>
          <Button
            text="lg"
            font="grotesk"
            className="font-bold"
            onClick={() => navigate("/auth/register")}
          >
            Join Breach
          </Button>
        </div>
        <img
          src="/images/hero.gif"
          alt="mascot"
          className="block flex-1 lg:max-h-[32rem] lg:max-w-[40.0625rem] xl:h-[32rem] xl:w-[40.0625rem]"
          loading="lazy"
        />
      </Container>
    </section>
  );
}

export { HomepageHeroSection };
