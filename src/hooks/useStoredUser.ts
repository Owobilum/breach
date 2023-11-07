import { useEffect, useState } from "react";

import { getStoredUser } from "../utils/storage";

function useStoredUser() {
  const [user, setUser] = useState(getStoredUser());

  useEffect(() => {
    window.addEventListener("storage", () => setUser(null));

    return () => {
      window.removeEventListener("storage", () => null);
    };
  }, []);

  return { user };
}

export { useStoredUser };
