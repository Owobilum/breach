import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { axiosInstance, getJWTHeader } from "../axios-instance";
import { QUERY_KEYS } from "../react-query/constants";
import type { IUser, IUserInterest } from "../types";

async function getUserInterests(user: IUser | null): Promise<IUserInterest[]> {
  const endpoint = `/users/${user?.userId}/interests`;

  const { data }: AxiosResponse<IUserInterest[]> = await axiosInstance.get(
    endpoint,
    {
      headers: getJWTHeader(user),
    },
  );
  return data;
}

export function useGetUserInterests(user: IUser | null) {
  const { data: interests = [] } = useQuery({
    queryKey: [QUERY_KEYS.userInterests],
    queryFn: () => getUserInterests(user),
  });

  return {
    interests,
  };
}
