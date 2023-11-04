import { type ReactElement } from "react";

import { HomepageHeroSection } from "../components/sections/homepage/hero";
import { HomepagePostsSection } from "../components/sections/homepage/posts";
import { HomepageCategoriesSection } from "../components/sections/homepage/categories";
import { Container } from "../components/container";

function HomePage(): ReactElement {
  return (
    <>
      <HomepageHeroSection />
      <Container className="flex flex-col-reverse gap-5 pb-[16.875rem] pt-20 lg:flex-row lg:gap-10">
        <HomepagePostsSection />
        <HomepageCategoriesSection />
      </Container>
    </>
  );
}

export default HomePage;
