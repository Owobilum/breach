import { type ReactElement } from "react";

function UserHomePageHeroSection(): ReactElement {
  return (
    <section className="mx-auto max-w-[43.625rem]">
      <h1 className="font-grotesk text-[1.75rem] font-bold leading-10">
        Top Picks
      </h1>
      <p className="mb-[1.125rem] font-inter text-base text-grey-600">
        Experience the best of Breach
      </p>
      <img src="/images/wallet_check.svg" alt="wallet_check_frequency" />
      <h2 className="mb-2 mt-[.875rem] font-inter text-2xl font-semibold leading-9 text-grey-900">
        How to succeed at long-term investments
      </h2>
      <p className="mb-[3.125rem]">
        I recently started contemplating how to apply my carefree mentality to
        my financial planning. I've mainly been considering looking at my crypto
        wallets whenever I feel{" "}
      </p>
    </section>
  );
}

export { UserHomePageHeroSection };
