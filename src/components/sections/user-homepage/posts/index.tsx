import { type ReactElement } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../tabs";
import { Card } from "../../../card";
import { PostInfo } from "../../../post-info";

function UserHomePagePostsSection(): ReactElement {
  return (
    <section className="mx-auto max-w-[43.625rem]">
      <Tabs defaultValue="featured">
        <TabsList>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          {Array(8)
            .fill(2)
            .map((_a, i) => (
              <Card key={i} className="mb-16 max-w-[41.625rem]">
                <Card.Image
                  src="https://res.cloudinary.com/chiefoleka/image/upload/v1698664703/vzb0crpojxblkzzrrtne"
                  alt="banner"
                  className="h-[11.5rem] w-[11.5rem]"
                />
                <Card.Frame>
                  <Card.Header>Work in Progress</Card.Header>
                  <Card.Title>
                    On migration and maintaining friendships
                  </Card.Title>
                  <Card.Body>
                    I went to boarding school and left pretty early, so I had
                    some experience with losing friends to relocation long
                    before the
                  </Card.Body>
                  <Card.Footer>
                    <PostInfo author="Lota Anidi" date="12 Dec 2022" />
                  </Card.Footer>
                </Card.Frame>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="popular">View Popular here.</TabsContent>
        <TabsContent value="latest">View latest here.</TabsContent>
      </Tabs>
    </section>
  );
}

export { UserHomePagePostsSection };
