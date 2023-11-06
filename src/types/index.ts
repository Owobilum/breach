import { type RouteObject } from "react-router-dom";
import z from "zod";

import { RegisterSchema } from "../models/Auth";
import { type IconNameType } from "../components/icons";

export interface IAdditionalRouteProps {
  routeDescriptors?: {
    name: string;
    icon: IconNameType;
  };
}

export type IRoute = IAdditionalRouteProps & RouteObject;

export interface IBlogCategory {
  id: number;
  name: string;
  icon: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  author: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
    icon: string;
  };
  series: {
    id: number;
    name: string;
  };
  createdAt: string;
}

export type PostFilterType = "featured" | "popular" | "recent";

export type RegisterDataType = z.infer<typeof RegisterSchema>;

export interface IUser {
  token: string;
  userId: number;
}

export interface IUserInterest {
  id: number;
  user: {
    id: number;
    email: string;
  };
  category: {
    id: number;
    name: string;
    icon: string;
  };
}
