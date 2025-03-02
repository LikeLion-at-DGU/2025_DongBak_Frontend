import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { ROUTE_PATHS } from "./constants/routeConstants";

import { MainPage } from "./pages/mainpage/MainPage";
import { DevelopersPage } from "./pages/DevelopersPage/DevelopersPage";
import { NotFound } from "./pages/notfound/NotFound";
import { BoothPage } from "./pages/Booth/BoothPage";
import { Performance } from "./pages/performance/Performance";
import { BoothDetailPage } from "./pages/Booth/BoothDetailPage";
import { FoodDetailPage } from "./pages/Booth/FoodDetailPage";
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
        path: ROUTE_PATHS.BOOTH,
        element: <BoothPage />,
      },
      {
        path: ROUTE_PATHS.PERFORMANCE,
        element: <Performance />,
      },
      {
        path: ROUTE_PATHS.BOOTH_DETAIL,
        element: <BoothDetailPage />,
      },
      {
        path: ROUTE_PATHS.FOOD_DETAIL,
        element: <FoodDetailPage />,
      },
    ],
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default router;
