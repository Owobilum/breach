import { useEffect, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../input/input";
import { Label } from "../../label";
import { Button } from "../../button";
import type { RegisterDataType } from "../../../types";
import { RegisterSchema } from "../../../models/Auth";
import { useAuth } from "../../../hooks/useAuth";
import { Alert } from "../../alert";
import { Spinner } from "../../spinner";

function RegisterForm(): ReactElement {
  const { registerMutation } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterDataType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterDataType> = (data) => {
    registerMutation.mutate(data);
  };

  useEffect(() => {
    if (!registerMutation.isSuccess) return;
    navigate("/auth/register/welcome");
  }, [navigate, registerMutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        {...register("email")}
        onBlur={() => trigger("email")}
      />
      {!!errors.email && (
        <Alert message={errors.email?.message} variant="error" />
      )}

      <Label htmlFor="password" className="mt-[2.375rem]">
        Password
      </Label>
      <Input
        id="password"
        type="password"
        {...register("password")}
        onBlur={() => trigger("password")}
      />
      {!!errors.password && (
        <Alert message={errors.password?.message} variant="error" />
      )}
      <Button
        type="submit"
        size="fullwidth"
        variant="black"
        className="mt-[2.375rem]"
        disabled={!isValid}
      >
        {registerMutation.isPending ? <Spinner /> : "Continue"}
      </Button>
    </form>
  );
}

export { RegisterForm };
