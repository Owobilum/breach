import { ComponentPropsWithoutRef } from "react";

import { cn } from "../../utils/helpers";

interface PostInfoProps extends ComponentPropsWithoutRef<"p"> {
  author: string;
  date: string;
}

function PostInfo(props: PostInfoProps) {
  const { author, date, className, ...restProps } = props;
  return (
    <p
      {...restProps}
      className={cn(
        "text-grey-900 mt-[.6875rem] flex items-center gap-2 text-[.6875rem] leading-8",
        className,
      )}
    >
      <span>{author}</span>
      <img src="/images/icons/dot.svg" className="h-1 w-1" />
      <span>{date}</span>
    </p>
  );
}

export { PostInfo };
