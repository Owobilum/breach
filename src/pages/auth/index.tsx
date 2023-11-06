import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { BackButton } from "../../components/back-button";
import { LoginForm } from "../../components/forms/login";

function LoginPage(): ReactElement {
  return (
    <>
      <p className="lg:pl-20">
        <BackButton className="mb-2 mt-[1.5625rem]" />
      </p>

      <div className="mx-auto max-w-[28rem]">
        <h1 className="text-inter mb-2 text-center text-[2rem] font-semibold leading-[3rem] text-grey-900">
          Login to Breach
        </h1>
        <p className="mx-auto mb-[3rem] text-center text-base leading-[1.875rem] text-grey-900">
          Break through the noise and access content that matters to you.
        </p>

        <LoginForm />

        <p className="mt-[1.375rem] text-center text-sm text-grey-900">
          Don't have an account?{" "}
          <Link to="/auth/register" className="underline">
            Join
          </Link>
        </p>

        {/* <p className="font-grotesk text-grey-600 mb-[7rem] mt-[7.875rem] text-center text-sm">
          By signing up, you agree to Breach's{" "}
          <Link to="/" className="text-primary-600 underline">
            Terms
          </Link>{" "}
          &{" "}
          <Link to="/" className="text-primary-600 underline">
            {" "}
            Privacy Policy
          </Link>
        </p> */}
      </div>
    </>
  );
}

export default LoginPage;
