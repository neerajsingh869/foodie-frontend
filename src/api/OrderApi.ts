import { toast } from "sonner";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { CheckoutSessionRequest, Order } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/order`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unable to get orders.");
    }

    return response.json();
  };

  const {
    data: myOrders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get-my-orders"],
    queryFn: getMyOrdersRequest,
  });

  if (error) {
    toast.error(error.message);
  }

  return { myOrders, isLoading };
};

export const useCreateCheckoutSession = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createCheckoutSessionRequest = async (
    checkoutSessionRequest: CheckoutSessionRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutSessionRequest),
      }
    );

    if (!response.ok) {
      throw new Error("Unable to create checkout session.");
    }

    return response.json();
  };

  const {
    mutateAsync: createCheckoutSession,
    error,
    isPending,
    reset,
  } = useMutation({ mutationFn: createCheckoutSessionRequest });

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { createCheckoutSession, isPending };
};
