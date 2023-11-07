import type { IRoute } from "../types";
import {
  HomePageLazy,
  LoginPageLazy,
  RegisterInterestsPageLazy,
  RegisterPageLazy,
  RegisterWelcomePageLazy,
  UserHomePageLazy,
} from "./lazy-import";
import { RegisterLayout } from "../components/layouts/RegisterLayout";
import { SuspenseWrapper } from "../components/suspense-wrapper";
import { ProtectedRoute } from "../components/private-route";
import { ErrorBoundaryWrapper } from "../error-boundary-wrapper";

export const authRoutes: IRoute[] = [
  {
    path: "register",
    element: <RegisterLayout />,
    children: [
      {
        path: "",
        element: (
          <ErrorBoundaryWrapper>
            <SuspenseWrapper>
              <RegisterPageLazy />
            </SuspenseWrapper>
          </ErrorBoundaryWrapper>
        ),
      },
      {
        path: "welcome",
        element: (
          <ErrorBoundaryWrapper>
            <ProtectedRoute>
              <SuspenseWrapper>
                <RegisterWelcomePageLazy />
              </SuspenseWrapper>
            </ProtectedRoute>
          </ErrorBoundaryWrapper>
        ),
      },
      {
        path: "interests",
        element: (
          <ErrorBoundaryWrapper>
            <ProtectedRoute>
              <SuspenseWrapper>
                <RegisterInterestsPageLazy />
              </SuspenseWrapper>
            </ProtectedRoute>
          </ErrorBoundaryWrapper>
        ),
      },
    ],
  },
  {
    path: "",
    element: (
      <ErrorBoundaryWrapper>
        <SuspenseWrapper>
          <LoginPageLazy />
        </SuspenseWrapper>
      </ErrorBoundaryWrapper>
    ),
  },
];

export const userRoutes: IRoute[] = [
  {
    path: "home",
    element: (
      <ErrorBoundaryWrapper>
        <ProtectedRoute>
          <SuspenseWrapper>
            <UserHomePageLazy />
          </SuspenseWrapper>
        </ProtectedRoute>
      </ErrorBoundaryWrapper>
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
      <ErrorBoundaryWrapper>
        <SuspenseWrapper>
          <HomePageLazy />
        </SuspenseWrapper>
      </ErrorBoundaryWrapper>
    ),
  },
];
