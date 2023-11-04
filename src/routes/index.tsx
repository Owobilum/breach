import type { IRoute } from "../types";
import {
  HomePageLazy,
  RegisterInterestsPageLazy,
  RegisterPageLazy,
  RegisterSuccessPageLazy,
  UserHomePageLazy,
} from "./lazy-import";
import { RegisterLayout } from "../components/layouts/RegisterLayout";
import { SuspenseWrapper } from "../components/suspense-wrapper";

export const authRoutes: IRoute[] = [
  {
    path: "register",
    element: <RegisterLayout />,
    children: [
      {
        path: "",
        element: (
          <SuspenseWrapper>
            <RegisterPageLazy />
          </SuspenseWrapper>
        ),
      },
      {
        path: "success",
        element: (
          <SuspenseWrapper>
            <RegisterSuccessPageLazy />
          </SuspenseWrapper>
        ),
      },
      {
        path: "interests",
        element: (
          <SuspenseWrapper>
            <RegisterInterestsPageLazy />
          </SuspenseWrapper>
        ),
      },
    ],
  },
];

export const userRoutes: IRoute[] = [
  {
    path: "home",
    element: (
      <SuspenseWrapper>
        <UserHomePageLazy />
      </SuspenseWrapper>
    ),
  },
];

export const visitorRoutes: IRoute[] = [
  {
    path: "",
    element: (
      <SuspenseWrapper>
        <HomePageLazy />
      </SuspenseWrapper>
    ),
  },
];
