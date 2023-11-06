import { useMutation } from "@tanstack/react-query";

import { getStoredUser } from "../utils/storage";
import { axiosInstance, getJWTHeader } from "../axios-instance";

interface IInterestsBody {
  interests: number[]; //array of category_ids
}

const postUserInterests = (body: IInterestsBody) => {
  const user = getStoredUser();
  const endpoint = `/users/${user?.userId}/interests`;

  return axiosInstance.post(endpoint, body, {
    headers: getJWTHeader(user),
  });
};

function useUserInterests() {
  const userInterestsMutation = useMutation({
    mutationFn: postUserInterests,
  });

  return {
    userInterestsMutation,
  };
}

export { useUserInterests };
