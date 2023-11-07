import { useState, type PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { getStoredUser } from "../../utils/storage";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const [user] = useState(getStoredUser());

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export { ProtectedRoute };
