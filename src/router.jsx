import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { BoothPage } from "./pages/Booth/BoothPage";
import { BoothDetailPage } from "./pages/Booth/BoothDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/booth",
        element: <BoothPage />,
      },
      {
        path: "/boothD",
        element: <BoothDetailPage />,
      },
    ],
  },
]);

export default router;
