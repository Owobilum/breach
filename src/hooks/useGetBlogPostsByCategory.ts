import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";

import type { IBlogPost } from "../types";
import { QUERY_KEYS } from "../react-query/constants";
import { axiosInstance } from "../axios-instance";

async function fetchBlogPosts(categoryId: number): Promise<IBlogPost[]> {
  const endpoint = `/blog/posts?categoryId=${categoryId}`;
  const { data }: AxiosResponse<IBlogPost[]> =
    await axiosInstance.get(endpoint);

  return data;
}

export function useBlogPostsByCategory(categoryId: number): IBlogPost[] {
  const { data = [] } = useQuery({
    queryKey: [QUERY_KEYS.blogPosts, categoryId],
    queryFn: () => fetchBlogPosts(categoryId),
  });
  return data;
}
