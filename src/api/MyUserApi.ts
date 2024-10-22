import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  // function to make request to backend to get user details
  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to get user.");
    }

    return response.json();
  };

  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["current-user"],
    queryFn: getMyUserRequest,
  });

  if (error) {
    toast.error(error.message);
  }

  return { currentUser, isLoading, error };
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  // function to make request to backend to create my user
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    /* throw an error in case there is difficulty
    in creating user on backend side */
    if (!response.ok) {
      throw new Error("Failed to create user.");
    }
  };

  const {
    mutateAsync: createUser,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: createMyUserRequest,
  });

  if (isSuccess) {
    toast.success("User created successfully.");
  }

  if (error) {
    toast.error(error.message);
  }

  return {
    createUser,
    isPending,
  };
};

type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (formData: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user details.");
    }

    return response.json();
  };

  const {
    mutateAsync: updateUser,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: updateMyUserRequest,
  });

  if (isSuccess) {
    toast.success("Profile updated successfully!");
  }

  if (error) {
    toast.error(error.message);
  }

  return { updateUser, isPending };
};
