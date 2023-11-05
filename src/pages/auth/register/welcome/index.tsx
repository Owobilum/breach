import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../components/button";

function RegisterWelcomePage(): ReactElement {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center">
      <div className="relative">
        <img
          src="/images/mascot.svg"
          alt="breach_mascot"
          className="h-[16.875rem] w-[16.875rem]"
        />
        <img
          src="/images/welcome_message.svg"
          alt="welcome_message"
          className="absolute  -top-2 lg:right-[17rem] lg:top-28"
        />
      </div>
      <img
        src="/images/confetti.gif"
        alt="confetti"
        className="absolute  -top-0 z-20 "
      />
      <h1 className="text-grey-900 font-inter mt-7 text-center text-[2.625rem] font-semibold leading-[3.5rem]">
        Welcome to Breach 🥳
      </h1>
      <p className="font-inter text-grey-900 my-7 max-w-[27rem] text-center text-base leading-[1.875rem]">
        Just a few quick questions to help personalise your Breach experience.
        Are you ready?
      </p>
      <Button
        className="font-medium"
        variant="black"
        onClick={() => navigate("/auth/register/interests")}
      >
        Let's begin!
      </Button>
    </div>
  );
}

export default RegisterWelcomePage;
