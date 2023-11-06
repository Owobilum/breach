import type { IBlogPost, PostFilterType } from "../types";

const MAX_POST_COUNT = 10;

export function useFilterBlogPosts(
  blogPosts: IBlogPost[],
  filter: PostFilterType,
) {
  let selectedPosts: IBlogPost[] = [];
  if (!blogPosts || !filter) return;

  if (filter === "featured") {
    //get one post from each author
    const authorPostsMap: { [key: number]: IBlogPost } = {};

    const filteredPosts: IBlogPost[] = [];

    for (const post of blogPosts) {
      if (!authorPostsMap[post.author.id]) {
        authorPostsMap[post.author.id] = post;
        filteredPosts.push(post);
      }

      if (filteredPosts.length >= MAX_POST_COUNT) {
        break;
      }
    }

    selectedPosts = filteredPosts;
  } else if (filter === "recent") {
    // get the most recent posts
    const sortedPosts = blogPosts.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });

    selectedPosts = sortedPosts.slice(0, MAX_POST_COUNT);
  } else if (filter === "popular") {
    // since there are no metrics like views or likes to determine popularity, we assume the oldest posts are the most well known
    const sortedPosts = blogPosts.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateA - dateB;
    });

    selectedPosts = sortedPosts.slice(0, MAX_POST_COUNT);
  }

  return selectedPosts;
}
