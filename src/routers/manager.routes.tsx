import Register from "../pages/Register/Register";
import AddFlower from "../pages/manager/AddFlower";
import AllFlower from "../pages/manager/AllFlower";
import DuplicateProduct from "../pages/manager/DuplicateProduct";
import EditProduct from "../pages/manager/EditProduct";
import ManagerDashboard from "../pages/manager/ManagerDashboard";

export const managerRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <ManagerDashboard />,
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
        name :"All Flower",
        path:'allFlower',
        element:<AllFlower/>
      },
      {
        path:'allFlower/:id',
        element:<EditProduct/>
      },
      {
        path:'duplicate/:id',
        element:<DuplicateProduct/>
      }
    ],
  },
  {
    name:"Add Seller",
    path:'signup',
    element:<Register/>
  },
  {
        name:'Order',
        path:'order'
  }
];
