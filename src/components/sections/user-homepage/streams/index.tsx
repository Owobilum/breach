import { type ReactElement } from "react";

import { Card } from "../../../card";
import { PostInfo } from "../../../post-info";
import { getStoredUser } from "../../../../utils/storage";
import { useWebSocket } from "../../../../hooks/useWebSocket";
import { SOCKET_URL } from "../../../../utils/constants";
import { type IBlogPost } from "../../../../types";
import { formatDate } from "../../../../utils/helpers";

function UserHomepageStreamsSection(): ReactElement {
  const user = getStoredUser();
  const url = `${SOCKET_URL}/?token=${user?.token}`;
  const { messages, isError } = useWebSocket(url);

  const posts = messages as unknown as IBlogPost[];

  return (
    <aside className="mx-auto max-w-[22.75rem] px-2">
      <h3 className="left-10 font-grotesk text-[1.75rem] font-bold text-grey-900">
        Streams
      </h3>
      <p className="font-grotesk text-base text-grey-600">
        Discover trending content from topics you care about in real time
      </p>
      <div className="mt-6 border-t border-grey-200 pt-6 ">
        {!!posts?.length &&
          posts.map(({ id, title, content, author, createdAt }) => (
            <Card
              key={id}
              className="max-w-[41.625rem] pb-2 lg:gap-[2.0625rem]"
            >
              <Card.Frame>
                <Card.Title className="text-base leading-5">{title}</Card.Title>
                <Card.Body className="line-clamp-3">{content}</Card.Body>
                <Card.Footer>
                  <PostInfo author={author.name} date={formatDate(createdAt)} />
                </Card.Footer>
              </Card.Frame>
            </Card>
          ))}
        {posts?.length === 0 && (
          <p className="font-inter text-base text-grey-500">
            {isError
              ? "Could not load streams"
              : "Your streams will appear here..."}
          </p>
        )}
      </div>
    </aside>
  );
}

export { UserHomepageStreamsSection };
