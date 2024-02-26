import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerater";
import { managerRoutes } from "./manager.routes";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manager",
        children: routeGenerator(managerRoutes),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
