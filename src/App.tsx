import { RouterProvider } from "react-router-dom";

import { router } from "./routes/router";
import ErrorBoundary from "./components/error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error: Boss, something went wrong!</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
