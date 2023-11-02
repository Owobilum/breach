import { type PropsWithChildren, type ReactElement, Suspense } from "react";

import { Loader } from "../loader";

function SuspenseWrapper({ children }: PropsWithChildren): ReactElement {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

export { SuspenseWrapper };
