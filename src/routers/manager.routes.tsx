import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AddFlower from "../pages/manager/AddFlower";
import AllFlower from "../pages/manager/AllFlower";
import DuplicateProduct from "../pages/manager/DuplicateProduct";
import EditProduct from "../pages/manager/EditProduct";
import AllSale from "../pages/manager/Sale/AllSale";
import CreateCoupon from "../pages/manager/coupon/CreateCoupon";

export const managerRoutes = [
  {
    name: "Home",
    path: "../",
    element: <Home />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Flower Management",
    children: [
      {
        name: "Add Flower",
        path: "addflower",
        element: <AddFlower />,
      },
      {
        name: "All Flower",
        path: "allFlower",
        element: <AllFlower />,
      },
      {
        name: "All Sale",
        path: "allSale",
        element: <AllSale />,
      },
      {
        path: "allFlower/:id",
        element: <EditProduct />,
      },
      {
        path: "duplicate/:id",
        element: <DuplicateProduct />,
      },
    ],
  },
  {
    name: "Add Seller",
    path: "signup",
    element: <Register />,
  },
  {
    name: "Create Coupon",
    path: "createCoupon",
    element: <CreateCoupon />,
  },
];
