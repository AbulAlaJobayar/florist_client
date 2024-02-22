import AddFlower from "../pages/manager/AddFlower";
import AddSeller from "../pages/manager/AddSeller";
import AllFlower from "../pages/manager/AllFlower";
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
        name: "Add Seller",
        path: "addSeller",
        element: <AddSeller />,
      },

      {
        name :"All Flower",
        path:'allFlower',
        element:<AllFlower/>
      }
    ],
  },
  {
        name:'Order',
        path:'order'
  }
];
