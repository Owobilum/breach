import { type ReactElement } from "react";

import { Card } from "../../../card";
import { PostInfo } from "../../../post-info";

function UserHomepageStreamsSection(): ReactElement {
  return (
    <aside className="mx-auto max-w-[22.75rem] px-2">
      <h3 className="left-10 font-grotesk text-[1.75rem] font-bold text-grey-900">
        Streams
      </h3>
      <p className="font-grotesk text-base text-grey-600">
        Discover trending content from topics you care about in real time
      </p>
      <div className="mt-6 border-t border-grey-200 pt-6 ">
        {Array(5)
          .fill(2)
          .map((_a, i) => (
            <Card
              key={i}
              className="mb-[2.0625rem] h-[9.25rem] max-w-[41.625rem]"
            >
              <Card.Frame>
                <Card.Title className="text-base leading-5">
                  On migration and maintaining friendships
                </Card.Title>
                <Card.Body className="line-clamp-3">
                  I went to boarding school and left pretty early, so I had some
                  experience with losing friends to relocation long before the
                </Card.Body>
                <Card.Footer>
                  <PostInfo author="Lota Anidi" date="12 Dec 2022" />
                </Card.Footer>
              </Card.Frame>
            </Card>
          ))}
      </div>
    </aside>
  );
}

export { UserHomepageStreamsSection };
