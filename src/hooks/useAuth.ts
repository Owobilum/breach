import { useMutation } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";

import type { RegisterDataType, IUser } from "../types";
import { clearStoredUser, setStoredUser } from "../utils/storage";
import { axiosInstance } from "../axios-instance";

type RegisterResponseType = IUser;

const registerServerCall = (
  body: RegisterDataType,
): Promise<AxiosResponse<RegisterResponseType>> => {
  const endpoint = "/auth/register";
  return axiosInstance.post(endpoint, body);
};

function useAuth() {
  const registerMutation = useMutation({
    mutationFn: registerServerCall,
    onSuccess: (received) => {
      const user = received.data;
      if (!user) {
        clearStoredUser();
      } else {
        setStoredUser(user); // if we logged in successfully, persist the user in localStorage
      }
    },
  });

  return { registerMutation };
}

export { useAuth };
