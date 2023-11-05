import { useQuery, useQueries } from "@tanstack/react-query";

import type { IBlogPost, PostFilterType } from "../types";
import { QUERY_KEYS } from "../react-query/constants";
import { BASE_URL } from "../utils/constants";
import { useBlogCategories } from "./useBlogCategories";

async function fetchBlogPosts(categoryId: number): Promise<IBlogPost[]> {
  const url = `${BASE_URL}/blog/posts?categoryId=${categoryId}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export function useBlogPostsByCategory(categoryId: number): IBlogPost[] {
  const { data = [] } = useQuery({
    queryKey: [QUERY_KEYS.blogPosts, categoryId],
    queryFn: () => fetchBlogPosts(categoryId),
  });
  return data;
}

const STALE_TIME = 1 * 1000 * 60 * 5; // 5 minutes

export function useAllBlogPosts() {
  const blogCategories = useBlogCategories();

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

const MAX_POST_COUNT = 10;

export function useBlogPostsFilter(
  blogPosts: IBlogPost[],
  filter: PostFilterType,
) {
  let selectedPosts: IBlogPost[] = [];
  if (!blogPosts || !filter) return;

  switch (filter) {
    case "featured":
      // select one post by each distinct author
      for (const blogPost of blogPosts) {
        if (selectedPosts.length >= MAX_POST_COUNT) {
          break;
        }
        if (selectedPosts.length === 0) {
          selectedPosts.push(blogPost);
        } else if (
          selectedPosts.findIndex(
            (post) => post.author.id === blogPost.author.id,
          ) === -1
        ) {
          selectedPosts.push(blogPost);
        }
      }
      break;
    case "recent":
      // select the 10 most recently created posts based on the created_at property
      selectedPosts = blogPosts
        .sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return Number(dateB) - Number(dateA); // Sort in descending order (latest to oldest)
        })
        .slice(0, MAX_POST_COUNT);
      break;
    case "popular":
      //there's no info such as likes or views, which would typically describe the popularity of a post, hence we assume the oldest posts are the best known
      selectedPosts = blogPosts
        .sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return Number(dateA) - Number(dateB); // Sort in ascending order (oldest to latest)
        })
        .slice(0, MAX_POST_COUNT);
      break;
    default:
      break;
  }

  return selectedPosts;
}
