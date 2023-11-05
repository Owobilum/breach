import {
  QueryClient,
  type QueryClientConfig,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";

const queryErrorHandler = (error: unknown): void => {
  const title =
    error instanceof Error ? error.message : "error connecting to server";
  console.log({ title, error });
};

const queryClientConfig: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
};

export function generateQueryClient(): QueryClient {
  return new QueryClient(queryClientConfig);
}

export const queryClient = generateQueryClient();
