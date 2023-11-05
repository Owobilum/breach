import { type ReactElement } from "react";

import { IconButton } from "../../../icon-button";
import { useBlogCategories } from "../../../../hooks/useBlogCategories";

function HomepageCategoriesSection(): ReactElement {
  const blogCategories = useBlogCategories();
  return (
    <aside className="xl:min-w-[22.875rem] xl:max-w-[22.9rem]">
      <h2 className="text-grey-900 font-inter leading-11 text-[2rem] font-semibold">
        Categories
      </h2>
      <p className="font-inter text-grey-600 text-base">
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
