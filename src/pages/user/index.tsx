import { type ReactElement } from "react";

import { UserHomePagePostsSection } from "../../components/sections/user-homepage/posts";
import { UserHomePageHeroSection } from "../../components/sections/user-homepage/hero";
import { UserHomepageStreamsSection } from "../../components/sections/user-homepage/streams";
import { useGetUserInterests } from "../../hooks/useGetUserInterests";
import { getStoredUser } from "../../utils/storage";

function UserHomePage(): ReactElement {
  const user = getStoredUser();
  const interests = useGetUserInterests(user);

  console.log({ interests });
  return (
    <div className="flex w-full flex-col pb-[11.625rem] lg:flex-row">
      <div className="w-full px-4 pt-[2.5625rem] lg:w-[67%]">
        <UserHomePageHeroSection />
        <UserHomePagePostsSection />
      </div>
      <div className="w-full border-b border-l border-grey-200 pt-[2.5625rem] lg:h-[137.625rem] lg:w-[33%]">
        <UserHomepageStreamsSection />
      </div>
    </div>
  );
}

export default UserHomePage;
