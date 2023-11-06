import type { IBlogPost, IUserInterest, PostFilterType } from "../types";

const MAX_POST_COUNT = 10;
export function useFilterBlogPostsByInterests(
  blogPosts: IBlogPost[],
  filter: PostFilterType,
  userInterests: IUserInterest[],
) {
  let selectedPosts: IBlogPost[] = [];
  if (!blogPosts || !filter) return;

  if (filter === "recent") {
    // Get the newest posts whose categories align with the user's interests
    const userInterestIds = userInterests.map(
      (interest) => interest.category.id,
    );

    const filteredPosts = blogPosts.filter((post) =>
      userInterestIds.includes(post.category.id),
    );

    selectedPosts = filteredPosts
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, MAX_POST_COUNT);
  } else if (filter === "popular") {
    // Get the oldest posts whose categories align with the user's interests
    const userInterestIds = userInterests.map(
      (interest) => interest.category.id,
    );

    const filteredPosts = blogPosts.filter((post) =>
      userInterestIds.includes(post.category.id),
    );

    selectedPosts = filteredPosts
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      )
      .slice(0, MAX_POST_COUNT);
  } else if (filter === "featured") {
    // get a post from each author who has written about a topic of interest for the user
    const userInterestCategoryIds = userInterests.map(
      (interest) => interest.category.id,
    );
    const addedAuthorIds: number[] = [];

    const filteredPosts: IBlogPost[] = blogPosts.filter((post) => {
      const isMatchingCategory = userInterestCategoryIds.includes(
        post.category.id,
      );
      const isAuthorNotAdded = !addedAuthorIds.includes(post.author.id);

      if (isMatchingCategory && isAuthorNotAdded) {
        addedAuthorIds.push(post.author.id);
        return true;
      }
      return false;
    });

    selectedPosts = filteredPosts;
  }

  return selectedPosts;
}
