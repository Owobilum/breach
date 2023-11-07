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
import { ErrorBoundary } from "../components/error-boundary";
import { ErrorFallback } from "../components/error-fallback";
import { ProtectedRoute } from "../components/private-route";

export const authRoutes: IRoute[] = [
  {
    path: "register",
    element: <RegisterLayout />,
    children: [
      {
        path: "",
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <SuspenseWrapper>
              <RegisterPageLazy />
            </SuspenseWrapper>
          </ErrorBoundary>
        ),
      },
      {
        path: "welcome",
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <ProtectedRoute>
              <SuspenseWrapper>
                <RegisterWelcomePageLazy />
              </SuspenseWrapper>
            </ProtectedRoute>
          </ErrorBoundary>
        ),
      },
      {
        path: "interests",
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <ProtectedRoute>
              <SuspenseWrapper>
                <RegisterInterestsPageLazy />
              </SuspenseWrapper>
            </ProtectedRoute>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "",
    element: (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <SuspenseWrapper>
          <LoginPageLazy />
        </SuspenseWrapper>
      </ErrorBoundary>
    ),
  },
];

export const userRoutes: IRoute[] = [
  {
    path: "home",
    element: (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <ProtectedRoute>
          <SuspenseWrapper>
            <UserHomePageLazy />
          </SuspenseWrapper>
        </ProtectedRoute>
      </ErrorBoundary>
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
      <ErrorBoundary fallback={<ErrorFallback />}>
        <SuspenseWrapper>
          <HomePageLazy />
        </SuspenseWrapper>
      </ErrorBoundary>
    ),
  },
];
