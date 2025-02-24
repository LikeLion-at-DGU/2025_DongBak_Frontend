import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { BoothPage } from "./pages/Booth/BoothPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/booth",
        element: <BoothPage />,
      },
    ],
  },
]);

export default router;
