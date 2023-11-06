import { useMutation } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";

import type { AuthDataType, IUser } from "../types";
import { clearStoredUser, setStoredUser } from "../utils/storage";
import { axiosInstance } from "../axios-instance";

type AuthResponseType = IUser;

const registerServerCall = (
  body: AuthDataType,
): Promise<AxiosResponse<AuthResponseType>> => {
  const endpoint = "/auth/register";
  return axiosInstance.post(endpoint, body);
};

const loginServerCall = (
  body: AuthDataType,
): Promise<AxiosResponse<AuthResponseType>> => {
  const endpoint = "/auth/login";
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
        setStoredUser(user); // if we register successfully, persist the user in localStorage
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginServerCall,
    onSuccess: (received) => {
      const user = received.data;
      if (!user) {
        clearStoredUser();
      } else {
        setStoredUser(user); // if we logged in successfully, persist the user in localStorage
      }
    },
  });

  return { loginMutation, registerMutation };
}

export { useAuth };
