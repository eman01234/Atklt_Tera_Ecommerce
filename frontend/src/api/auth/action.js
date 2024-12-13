// src/hooks/useAuth.js

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (userData) => {
      const response = await axiosInstance.post("/auth/login", userData);
      console.log("responsee", response.data);
      const token = response.data.token;
      localStorage.setItem("jwt", token);
      return response.data; // Assuming the API returns user data or token
    },
  });
};

// Register Mutation
export const useRegister = () => {
  return useMutation(async (userData) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
  });
};

// Get User Query
export const useGetUser = () => {
  return useQuery(["user"], async () => {
    const response = await axiosInstance.get("/auth/user");
    return response.data;
  });
};

// Update User Mutation
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(async (userData) => {
    const response = await axiosInstance.put("/auth/user", userData);
    queryClient.invalidateQueries(["user"]); // Invalidate the user query to refresh data
    return response.data;
  });
};
