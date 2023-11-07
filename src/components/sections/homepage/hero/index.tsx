import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../../container";
import { Button } from "../../../button";
import { useStoredUser } from "../../../../hooks/useStoredUser";

function HomepageHeroSection(): ReactElement {
  const navigate = useNavigate();
  const { user } = useStoredUser();

  return (
    <section className="flex items-center bg-offWhite lg:h-[39.4375rem]">
      <Container className="flex flex-col items-center lg:flex-row">
        <div className="flex-1">
          <h1 className="font-inter text-5xl font-semibold capitalize leading-[3.75rem] tracking-2x-tighter lg:text-large lg:leading-large">
            find <span className="text-primary-700">great</span> ideas
          </h1>
          <p className="my-[1.125rem] mb-[2.625rem] font-inter text-2xl leading-11 text-grey-900">
            Subscribe to your favourite creators and thinkers. Support work that
            matters
          </p>
          {!user && (
            <Button
              text="lg"
              font="grotesk"
              className="font-bold"
              onClick={() => navigate("/auth/register")}
            >
              Join Breach
            </Button>
          )}
          {!!user && (
            <Button
              text="lg"
              font="grotesk"
              className="font-bold"
              onClick={() => navigate("/user/home")}
            >
              Explore Now
            </Button>
          )}
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
