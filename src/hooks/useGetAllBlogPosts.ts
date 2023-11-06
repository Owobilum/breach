import { useQueries } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";

import type { IBlogPost } from "../types";
import { QUERY_KEYS } from "../react-query/constants";
import { useGetBlogCategories } from "./useGetBlogCategories";
import { axiosInstance } from "../axios-instance";

async function fetchBlogPosts(categoryId: number): Promise<IBlogPost[]> {
  const endpoint = `/blog/posts?categoryId=${categoryId}`;
  const { data }: AxiosResponse<IBlogPost[]> =
    await axiosInstance.get(endpoint);

  return data;
}

const STALE_TIME = 1 * 1000 * 60 * 5; // 5 minutes stale time should give users a real-time feel between reading content, without over-utilising resources

export function useGetAllBlogPosts() {
  const blogCategories = useGetBlogCategories();

  const blogQueries = useQueries({
    queries: blogCategories?.map(({ id }) => {
      return {
        queryKey: [QUERY_KEYS.blogPosts, id],
        queryFn: () => fetchBlogPosts(id),
        staleTime: STALE_TIME,
      };
    }),
  });

  const allPosts: IBlogPost[] = [];

  for (const blogPost of blogQueries) {
    if (blogPost.data) {
      allPosts.push(...blogPost.data);
    }
  }
  return allPosts;
}
