import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import Layout from "./layouts/Layout";
import Auth0ProviderLayout from "./layouts/Auth0ProviderLayout";
import UserProfilePage from "./pages/UserProfilePage";
import { Toaster } from "./components/ui/sonner";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import { ThemeProvider } from "./components/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth0ProviderLayout />,
    children: [
      {
        index: true,
        element: (
          <Layout showHero>
            <Home />
          </Layout>
        ),
      },
      {
        path: "auth-callback",
        element: <AuthCallbackPage />,
      },
      {
        path: "search/:city",
        element: (
          <Layout>
            <SearchPage />
          </Layout>
        ),
      },
      {
        path: "detail/:restaurantId",
        element: (
          <Layout>
            <DetailPage />
          </Layout>
        ),
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "order-status",
            element: (
              <Layout>
                <OrderStatusPage />
              </Layout>
            ),
          },
          {
            path: "user-profile",
            element: (
              <Layout>
                <UserProfilePage />
              </Layout>
            ),
          },
          {
            path: "manage-restaurant",
            element: (
              <Layout>
                <ManageRestaurantPage />
              </Layout>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster
          theme="light"
          visibleToasts={1}
          position="top-right"
          richColors
        />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
