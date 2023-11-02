import { ReactNode } from "react";
import { type RouteObject } from "react-router-dom";

export interface IAdditionalRouteProps {
  sidebarProps?: {
    text: string;
    icon: ReactNode;
  };
}

export type IRoute = IAdditionalRouteProps & RouteObject;
