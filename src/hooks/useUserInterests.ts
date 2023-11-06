// import { useMutation, useQuery } from "@tanstack/react-query";
// import { AxiosResponse } from "axios";

// import { getStoredUser } from "../utils/storage";
// import { axiosInstance, getJWTHeader } from "../axios-instance";
// import { QUERY_KEYS } from "../react-query/constants";
// import { IUser, IUserInterest } from "../types";

// interface IInterestsBody {
//   interests: number[]; //array of category_ids
// }

// const postUserInterests = (body: IInterestsBody) => {
//   const user = getStoredUser();
//   const endpoint = `/users/${user?.userId}/interests`;

//   return axiosInstance.post(endpoint, body, {
//     headers: getJWTHeader(user),
//   });
// };

// async function getUserInterests(user:IUser | null): Promise<IUserInterest[]> {
//   // const user = getStoredUser();
//   const endpoint = `/users/${user?.userId}/interests`;

//   const { data }: AxiosResponse<IUserInterest[]> =
//     await axiosInstance.get(endpoint);
//   return data;
// }

// function useUserInterests(user:IUser| null) {
//   const userInterestsMutation = useMutation({
//     mutationFn: postUserInterests
//   });

//   const { data = [] } = useQuery({
//     queryKey: [QUERY_KEYS.userInterests],
//     queryFn: ()=>getUserInterests(user),
//   });

//   return {
//     userInterestsMutation,
//   };
// }

// export function useBlogCategories() {
//   const { data = [] } = useQuery({
//     queryKey: [QUERY_KEYS.userInterests],
//     queryFn: getUserInterests,
//   });
//   return data;
// }

// export { useUserInterests };
