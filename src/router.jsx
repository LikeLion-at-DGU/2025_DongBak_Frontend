import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { ROUTE_PATHS } from "./constants/routeConstants";

import { MainPage } from "./pages/mainpage/MainPage";
import { BoothPage } from "./pages/Booth/BoothPage";
import { DeveloperPage } from "./pages/DeveloperPage/DeveloperPage";
import { NotFound } from "./pages/NotFound/NotFound";

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
        path: ROUTE_PATHS.DEVELOPER,
        element: <DeveloperPage />,
      }, 
    ],
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <NotFound />
  },
]);

export default router;
