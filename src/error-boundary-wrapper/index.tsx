import { type PropsWithChildren } from "react";

import { ErrorBoundary } from "../components/error-boundary";
import { ErrorFallback } from "../components/error-fallback";

function ErrorBoundaryWrapper({ children }: PropsWithChildren) {
  return <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>;
}

export { ErrorBoundaryWrapper };
