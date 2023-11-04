import { createBrowserRouter } from "react-router-dom";

import { authRoutes, userRoutes, visitorRoutes } from ".";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { UserLayout } from "../components/layouts/UserLayout";
import { VisitorLayout } from "../components/layouts/VisitorLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VisitorLayout />,
    children: [...visitorRoutes],
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
