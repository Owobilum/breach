import type { IRoute } from "../types";
import {
  HomePageLazy,
  RegisterInterestsPageLazy,
  RegisterPageLazy,
  RegisterWelcomePageLazy,
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
        path: "welcome",
        element: (
          <SuspenseWrapper>
            <RegisterWelcomePageLazy />
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
    routeDescriptors: {
      name: "Home",
      icon: "home",
    },
  },
  {
    path: "dashboard",
    element: <h1>User Dashboard</h1>,
    routeDescriptors: {
      name: "Dashboard",
      icon: "grid",
    },
  },
  {
    path: "publications",
    element: <div>User Publications</div>,
    routeDescriptors: {
      name: "Publications",
      icon: "text",
    },
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
