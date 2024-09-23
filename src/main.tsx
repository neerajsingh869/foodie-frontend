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
import UserProfilePage from "./layouts/UserProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth0ProviderLayout />,
    children: [
      {
        index: true,
        element: <Layout showHero><Home/></Layout>,
      },
      {
        path: "auth-callback",
        element: <AuthCallbackPage />,
      },
      {
        path: "user-profile",
        element: <Layout><UserProfilePage /></Layout>,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ]
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
