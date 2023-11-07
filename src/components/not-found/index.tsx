import { type ReactElement } from "react";
import { Link } from "react-router-dom";

function NotFound(): ReactElement {
  return (
    <div className="px-4 py-10  text-center lg:py-20">
      <img
        src="/images/bev_rounded.svg"
        alt="breach_mascot"
        className="mx-auto"
      />
      <p className="mx-auto mt-4 max-w-[37.5rem]" role="status">
        Page not found.{" "}
        <Link to="/" className="text-primary-600">
          Go Home
        </Link>
      </p>
    </div>
  );
}

export { NotFound };
