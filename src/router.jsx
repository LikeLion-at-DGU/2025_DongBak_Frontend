import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { ROUTE_PATHS } from "./constants/routeConstants";

import { MainPage } from "./pages/mainpage/MainPage";
import { DevelopersPage } from "./pages/DevelopersPage/DevelopersPage";
import { BoothPage } from "./pages/Booth/BoothPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { NotFound } from "./pages/NotFound/NotFound";

import { Performance } from "./pages/performance/Performance";

import { BoothDetailPage } from "./pages/Booth/BoothDetailPage";
import { FoodDetailPage } from "./pages/Booth/FoodDetailPage";
const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.MAIN,
    element: <App />,
    children: [
      {
        path: ROUTE_PATHS.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTE_PATHS.BOOTH,
        element: <BoothPage />,
      },
      {
        path: ROUTE_PATHS.DEVELOPERS,
        element: <DevelopersPage />,
      },
      {
        path: ROUTE_PATHS.SEARCH,
        element: <SearchPage />,
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
