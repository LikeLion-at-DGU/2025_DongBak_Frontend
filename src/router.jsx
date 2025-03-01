import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { ROUTE_PATHS } from "./constants/routeConstants";

import { MainPage } from "./pages/mainpage/MainPage";
import { DevelopersPage } from "./pages/DevelopersPage/DevelopersPage";
import { NotFound } from "./pages/notfound/NotFound";
import { BoothPage } from "./pages/Booth/BoothPage";
import { BoothDetailPage } from "./pages/Booth/BoothDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ROUTE_PATHS.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTE_PATHS.DEVELOPTERS,
        element: <DevelopersPage />,
      },
      {
        path: "/booth",
        element: <BoothPage />,
      },
      {
        path: "/booth/:id",
        element: <BoothDetailPage />,
      },
    ],
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <NotFound />
  },
]);

export default router;
