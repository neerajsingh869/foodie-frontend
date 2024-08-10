import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Button>Hello world!</Button>,
  },
  {
    path: "/user-profile",
    element: <div>User Profile Page!</div>,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
