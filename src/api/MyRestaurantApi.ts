import { toast } from "sonner";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Order, Restaurant, UpdateOrderStatusRequest } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUpdateMyRestaurantOrderStatus = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantOrderStatusRequest = async (
    updateOrderStatusRequest: UpdateOrderStatusRequest
  ): Promise<Order> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/restaurant/order/${updateOrderStatusRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateOrderStatusRequest.status),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update order status.");
    }

    return response.json();
  };

  const {
    mutateAsync: updateOrderStatus,
    error,
    isSuccess,
    isPending,
    reset,
  } = useMutation({
    mutationFn: updateMyRestaurantOrderStatusRequest,
  });

  if (isSuccess) {
    toast.success("Order status updated.");
    reset();
  }

  if (error) {
    toast.error(error.message);
    reset();
  }

  return { updateOrderStatus, isPending };
};

export const useGetMyRestaurantOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant/orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get Restaurant's order.");
    }

    return response.json();
  };

  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get-my-restaurant-orders"],
    queryFn: getMyRestaurantOrdersRequest,
  });

  if (error) {
    toast.error(error.message);
  }

  return { orders, isLoading };
};

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  // function to make request to backend to get user details
  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get restaurant.");
    }

    return response.json();
  };

  const {
    data: restaurant,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["current-restaurant"],
    queryFn: getMyRestaurantRequest,
  });

  if (error) {
    toast.error(error.message);
  }

  return { restaurant, isLoading };
};

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed in creating restaurent.");
    }

    return response.json();
  };

  const {
    mutateAsync: createRestaurant,
    isPending,
    error,
    isSuccess,
    reset
  } = useMutation({
    mutationFn: createMyRestaurantRequest,
  });

  if (isSuccess) {
    toast.success("Restaurant created successfully!");
    reset();
  }

  if (error) {
    toast.error(error.message);
    reset();
  }

  return { createRestaurant, isPending };
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed in updating restaurent.");
    }

    return response.json();
  };

  const {
    mutateAsync: updateRestaurant,
    error,
    isSuccess,
    isPending,
    reset,
  } = useMutation({
    mutationFn: updateMyRestaurantRequest,
  });

  if (isSuccess) {
    toast.success("Restaurant updated successfully!");
    reset();
  }

  if (error) {
    toast.error(error.message);
    reset();
  }

  return { updateRestaurant, isPending };
};
