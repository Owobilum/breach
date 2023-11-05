import { useQuery } from "@tanstack/react-query";

import type { IBlogCategory } from "../types";
import { QUERY_KEYS } from "../react-query/constants";
import { BASE_URL } from "../utils/constants";

const STALE_TIME = 1 * 1000 * 60 * 60; // 1 hour

async function fetchBlogCategories(): Promise<IBlogCategory[]> {
  const url = `${BASE_URL}/blog/categories`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export function useBlogCategories(): IBlogCategory[] {
  const { data = [] } = useQuery({
    queryKey: [QUERY_KEYS.blogCategories],
    queryFn: fetchBlogCategories,
    staleTime: STALE_TIME, // blog categories are unlikely to change frequently, so the data is set to be refreshed every hour only
  });
  return data;
}
