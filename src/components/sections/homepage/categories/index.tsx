import { type ReactElement } from "react";

import { IconButton } from "../../../icon-button";

function HomepageCategoriesSection(): ReactElement {
  return (
    <aside className="max-w-[22.875rem]">
      <h2 className="text-grey-900 font-inter leading-11 text-[2rem] font-semibold">
        Categories
      </h2>
      <p className="font-inter text-grey-600 text-base">
        Discover content from topics you care about
      </p>
      <div className="mt-[.875rem] flex flex-wrap gap-5">
        <IconButton icon="🤣">Faith & Spirituality </IconButton>
        {Array(12)
          .fill(3)
          .map((_a, i) => (
            <IconButton key={i} icon="🤣">
              Humor
            </IconButton>
          ))}
      </div>
    </aside>
  );
}

export { HomepageCategoriesSection };
