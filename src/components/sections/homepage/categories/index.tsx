import { type ReactElement } from "react";

import { IconButton } from "../../../icon-button";
import { useGetBlogCategories } from "../../../../hooks/useGetBlogCategories";

function HomepageCategoriesSection(): ReactElement {
  const blogCategories = useGetBlogCategories();
  return (
    <aside className="xl:min-w-[22.875rem] xl:max-w-[22.9rem]">
      <h2 className="font-inter text-[2rem] font-semibold leading-11 text-grey-900">
        Categories
      </h2>
      <p className="font-inter text-base text-grey-600">
        Discover content from topics you care about
      </p>
      <div className="mt-[.875rem] flex flex-wrap gap-5">
        {!!blogCategories?.length &&
          blogCategories.slice(0, 15).map(({ icon, name, id }) => (
            <IconButton key={id} icon={icon}>
              {name}
            </IconButton>
          ))}
      </div>
    </aside>
  );
}

export { HomepageCategoriesSection };
