import {
  QueryClient,
  type QueryClientConfig,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { clearStoredUser } from "../utils/storage";

// Global error handler
const errorHandler = (error: unknown): void => {
  const isUnauthorised =
    error instanceof AxiosError &&
    (error.response?.status === 401 || error.response?.status === 403);
  if (isUnauthorised) {
    clearStoredUser();
    toast.error("Unauthorised. Please log in.");
    return;
  }
  const errorMessage =
    error instanceof Error ? error.message : "error connecting to server";
  const axiosErrorMessage =
    error instanceof AxiosError ? error?.response?.data?.message : null;
  toast.error(axiosErrorMessage || errorMessage);
};

const queryClientConfig: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: errorHandler,
  }),
  mutationCache: new MutationCache({
    onError: errorHandler,
  }),
};

export function generateQueryClient(): QueryClient {
  return new QueryClient(queryClientConfig);
}

export const queryClient = generateQueryClient();
