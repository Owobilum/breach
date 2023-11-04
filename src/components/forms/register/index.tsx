import { type ReactElement } from "react";

import { Input } from "../../input/input";
import { Label } from "../../label";
import { Button } from "../../button";

function RegisterForm(): ReactElement {
  return (
    <form>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" className="mb-[2.375rem]" />

      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />

      <Button
        type="submit"
        size="fullwidth"
        variant="black"
        className="mt-[2.375rem] font-medium"
      >
        Continue
      </Button>
    </form>
  );
}

export { RegisterForm };
