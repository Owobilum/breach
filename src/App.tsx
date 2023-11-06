import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import  { Toaster } from 'react-hot-toast';

import { router } from "./routes/router";
import ErrorBoundary from "./components/error-boundary";
import { queryClient } from "./react-query/query-client";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error: Boss, something went wrong!</div>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
