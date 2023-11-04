import { type ReactElement } from "react";

import { UserHomePagePostsSection } from "../../components/sections/user-homepage/posts";
import { Card } from "../../components/card";
import { PostInfo } from "../../components/post-info";

function UserHomepageStreamsSection(): ReactElement {
  return (
    <aside className="border-grey-200 w-full border-b border-l pt-[2.5625rem] lg:h-[137.625rem] lg:w-[33%]">
      <div className="mx-auto max-w-[22.75rem] px-2">
        <h3 className="font-grotesk text-grey-900 left-10 text-[1.75rem] font-bold">
          Streams
        </h3>
        <p className="text-grey-600 font-grotesk text-base">
          Discover trending content from topics you care about in real time
        </p>
        <div className="border-grey-200 mt-6 border-t pt-6 ">
          {Array(5)
            .fill(2)
            .map((_a, i) => (
              <Card
                key={i}
                className="mb-[2.0625rem] h-[9.25rem] max-w-[41.625rem]"
              >
                <Card.Frame>
                  <Card.Title className="text-base leading-5">
                    On migration and maintaining friendships
                  </Card.Title>
                  <Card.Body className="line-clamp-3">
                    I went to boarding school and left pretty early, so I had
                    some experience with losing friends to relocation long
                    before the
                  </Card.Body>
                  <Card.Footer>
                    <PostInfo author="Lota Anidi" date="12 Dec 2022" />
                  </Card.Footer>
                </Card.Frame>
              </Card>
            ))}
        </div>
      </div>
    </aside>
  );
}

function UserHomePageHeroSection(): ReactElement {
  return (
    <section className="w-full px-4 pt-[2.5625rem] lg:w-[67%]">
      <div className="mx-auto max-w-[43.625rem]">
        <h1 className="font-grotesk text-[1.75rem] font-bold leading-10">
          Top Picks
        </h1>
        <p className="font-inter text-grey-600 mb-[1.125rem] text-base">
          Experience the best of Breach
        </p>
        <img src="/images/wallet_check.svg" alt="wallet_check_frequency" />
        <h2 className="text-grey-900 font-inter mb-2 mt-[.875rem] text-2xl font-semibold leading-9">
          How to succeed at long-term investments
        </h2>
        <p className="mb-[3.125rem]">
          I recently started contemplating how to apply my carefree mentality to
          my financial planning. I've mainly been considering looking at my
          crypto wallets whenever I feel{" "}
        </p>
        <UserHomePagePostsSection />
      </div>
    </section>
  );
}

function UserHomePage(): ReactElement {
  return (
    <div className="flex w-full flex-col pb-[11.625rem] lg:flex-row">
      <UserHomePageHeroSection />
      <UserHomepageStreamsSection />
    </div>
  );
}

export default UserHomePage;
