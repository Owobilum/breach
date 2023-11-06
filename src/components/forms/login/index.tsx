import { useEffect, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../input/input";
import { Label } from "../../label";
import { Button } from "../../button";
import type { AuthDataType } from "../../../types";
import { AuthSchema } from "../../../models/Auth";
import { useAuth } from "../../../hooks/useAuth";
import { Alert } from "../../alert";
import { Spinner } from "../../spinner";

function LoginForm(): ReactElement {
  const { loginMutation } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AuthDataType>({
    resolver: zodResolver(AuthSchema),
  });

  const onSubmit: SubmitHandler<AuthDataType> = (data) => {
    loginMutation.mutate(data);
  };

  useEffect(() => {
    if (!loginMutation.isSuccess) return;
    navigate("/user/home");
  }, [navigate, loginMutation.isSuccess]);

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
        {loginMutation.isPending ? <Spinner /> : "Continue"}
      </Button>
    </form>
  );
}

export { LoginForm };
