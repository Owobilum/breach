import axios, { AxiosRequestConfig } from "axios";

import type { IUser } from "../types";
import { BASE_URL } from "../utils/constants";

export function getJWTHeader(user: IUser|null): Record<string, string> {
  return { Authorization: `Bearer ${user?.token|| ''}` };
}

const config: AxiosRequestConfig = { baseURL: BASE_URL };
export const axiosInstance = axios.create(config);
