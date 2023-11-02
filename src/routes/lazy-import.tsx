import { lazy } from "react";

// importing these directly inside the routes file throws a 'Fast refresh only works when a file only exports components' warning
export const RegisterPageLazy = lazy(() => import("../pages/auth/register"));
export const RegisterSuccessPageLazy = lazy(
  () => import("../pages/auth/register/success")
);
export const RegisterInterestsPageLazy = lazy(
  () => import("../pages/auth/register/interests")
);
export const UserHomePageLazy = lazy(() => import("../pages/user/index"));
export const HomePageLazy = lazy(() => import("../pages/index"));
