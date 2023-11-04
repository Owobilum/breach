import { type RouteObject } from "react-router-dom";
import { type IconNameType } from "../components/icons";

export interface IAdditionalRouteProps {
  routeDescriptors?: {
    name: string;
    icon: IconNameType;
  };
}

export type IRoute = IAdditionalRouteProps & RouteObject;
