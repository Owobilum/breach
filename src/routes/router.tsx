import { createBrowserRouter } from "react-router-dom";

import { authRoutes, userRoutes } from ".";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { UserLayout } from "../components/layouts/UserLayout";
import { SuspenseWrapper } from "../components/suspense-wrapper";
import { HomePageLazy } from "./lazy-import";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <HomePageLazy />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [...userRoutes],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export { router };
