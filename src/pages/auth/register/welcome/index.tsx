import { ReactElement } from "react";
import { Button } from "../../../../components/button";

function RegisterWelcomePage(): ReactElement {
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

      <h1 className="text-grey-900 font-inter mt-7 text-center text-[2.625rem] font-semibold leading-[3.5rem]">
        Welcome to Breach 🥳
      </h1>
      <p className="font-inter text-grey-900 my-7 max-w-[27rem] text-center text-base leading-[1.875rem]">
        Just a few quick questions to help personalise your Breach experience.
        Are you ready?
      </p>
      <Button className="font-medium" variant="black">
        Let's begin!
      </Button>
    </div>
  );
}

export default RegisterWelcomePage;
