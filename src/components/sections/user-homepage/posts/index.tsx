import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../tabs";
import { Card } from "../../../card";
import { PostInfo } from "../../../post-info";
import { useFilterBlogPostsByInterests } from "../../../../hooks/useFilterBlogPostsByInterests";
import { useGetUserInterests } from "../../../../hooks/useGetUserInterests";
import { getStoredUser } from "../../../../utils/storage";
import { PostFilterType, IBlogPost, IUserInterest } from "../../../../types";
import { formatDate } from "../../../../utils/helpers";
import { useGetAllBlogPosts } from "../../../../hooks/useGetAllBlogPosts";

function FilteredPosts({
  posts,
  filter,
  interests,
}: {
  posts: IBlogPost[];
  filter: PostFilterType;
  interests: IUserInterest[];
}) {
  const filteredPosts = useFilterBlogPostsByInterests(posts, filter, interests);

  return (
    <TabsContent value={filter}>
      {!!filteredPosts?.length &&
        filteredPosts.map(
          ({ title, author, createdAt, content, series, id, imageUrl }) => (
            <Link to="/" key={id}>
              <Card className="mb-16 max-w-[41.625rem]">
                <Card.Image
                  src={imageUrl}
                  alt="banner"
                  className="w-full  lg:max-h-[11.625rem] lg:min-h-[11.625rem] lg:min-w-[11.625rem] lg:max-w-[11.625rem]"
                />
                <Card.Frame>
                  <Card.Header>{series.name}</Card.Header>
                  <Card.Title>{title}</Card.Title>
                  <Card.Body>{content}</Card.Body>
                  <Card.Footer>
                    <PostInfo
                      author={author.name}
                      date={formatDate(createdAt)}
                    />
                  </Card.Footer>
                </Card.Frame>
              </Card>
            </Link>
          ),
        )}
      {filteredPosts && filteredPosts.length === 0 && (
        <p className="font-inter text-grey-600">
          Select more interests to get more recommendations!
        </p>
      )}
    </TabsContent>
  );
}

const filters: PostFilterType[] = ["featured", "popular", "recent"];

function UserHomePagePostsSection(): ReactElement {
  const user = getStoredUser();
  const allPosts = useGetAllBlogPosts();
  const { interests: userInterests } = useGetUserInterests(user);

  return (
    <section className="mx-auto max-w-[43.625rem]">
      <Tabs defaultValue="featured">
        <TabsList>
          {filters.map((filter) => (
            <TabsTrigger key={filter} value={filter} className="capitalize">
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
        {filters.map((filter) => (
          <FilteredPosts
            key={filter}
            posts={allPosts}
            filter={filter}
            interests={userInterests}
          />
        ))}
      </Tabs>
    </section>
  );
}

export { UserHomePagePostsSection };
