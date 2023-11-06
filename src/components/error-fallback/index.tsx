import { ReactElement } from "react";

function ErrorFallback(): ReactElement {
  return (
    <div className="px-4 py-10  text-center font-grotesk lg:py-20">
      <img
        src="/images/bev_rounded.svg"
        alt="breach_mascot"
        className="mx-auto"
      />
      <p className="mx-auto mt-4 max-w-[37.5rem]">
        Something has gone wrong, but it's not you it's us. Please report to get
        it resolved.
      </p>
    </div>
  );
}

export { ErrorFallback };
