import { type ReactElement } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../tabs";
import { Card } from "../../../card";
import { PostInfo } from "../../../post-info";
import {
  useAllBlogPosts,
  useBlogPostsFilter,
} from "../../../../hooks/useBlogPosts";
import type { IBlogPost, PostFilterType } from "../../../../types";
import { formatDate } from "../../../../utils/helpers";

function FilteredPosts({
  posts,
  filter,
}: {
  posts: IBlogPost[];
  filter: PostFilterType;
}) {
  const filteredPosts = useBlogPostsFilter(posts, filter);

  return (
    <TabsContent value={filter}>
      {!!filteredPosts?.length &&
        filteredPosts.map(
          ({ title, author, createdAt, content, series, id, imageUrl }) => (
            <Card key={id} className="mb-16">
              <Card.Image src={imageUrl} alt="banner" />
              <Card.Frame>
                <Card.Header>{series.name}</Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Body>{content}</Card.Body>
                <Card.Footer>
                  <PostInfo author={author.name} date={formatDate(createdAt)} />
                </Card.Footer>
              </Card.Frame>
            </Card>
          ),
        )}
    </TabsContent>
  );
}

const filters: PostFilterType[] = ["featured", "popular", "recent"];

function HomepagePostsSection(): ReactElement {
  const allPosts = useAllBlogPosts();

  return (
    <section className="lg:min-w-[40rem] lg:max-w-[42rem] xl:min-w-[46rem] xl:max-w-[48.5625rem]">
      <Tabs defaultValue="featured">
        <TabsList>
          {filters.map((filter) => (
            <TabsTrigger key={filter} value={filter} className="capitalize">
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
        {filters.map((filter) => (
          <FilteredPosts key={filter} posts={allPosts} filter={filter} />
        ))}
      </Tabs>
    </section>
  );
}

export { HomepagePostsSection };
