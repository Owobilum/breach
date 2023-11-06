import { useQuery } from "@tanstack/react-query";

import type { IBlogCategory } from "../types";
import { QUERY_KEYS } from "../react-query/constants";
import { axiosInstance } from "../axios-instance";
import { AxiosResponse } from "axios";

const STALE_TIME = 1 * 1000 * 60 * 60; // 1 hour

async function fetchBlogCategories(): Promise<IBlogCategory[]> {
  const endpoint = "/blog/categories";
  const { data }: AxiosResponse<IBlogCategory[]> =
    await axiosInstance.get(endpoint);
  return data;
}

export function useGetBlogCategories() {
  const { data = [] } = useQuery({
    queryKey: [QUERY_KEYS.blogCategories],
    queryFn: fetchBlogCategories,
    staleTime: STALE_TIME, // blog categories are unlikely to change frequently, so the data is set to be refreshed every hour only
  });
  return data;
}
