import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  // function to make request to backend to create my user
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(response);

    /* throw an error in case there is difficulty
    in creating user on backend side */
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createMyUserRequest,
  });

  return {
    createUser,
    isPending,
    isError,
    isSuccess,
  };
};
