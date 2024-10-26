import { MdDashboard } from "react-icons/md";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AddFlower from "../pages/manager/AddFlower";
import AllFlower from "../pages/manager/AllFlower";
import DuplicateProduct from "../pages/manager/DuplicateProduct";
import EditProduct from "../pages/manager/EditProduct";
import AllSale from "../pages/manager/Sale/AllSale";
import CreateCoupon from "../pages/manager/coupon/CreateCoupon";
import { IoCartOutline, IoCubeOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { LiaCubesSolid } from "react-icons/lia";
import { BsCart4 } from "react-icons/bs";

import { AiOutlineUserAdd } from "react-icons/ai";

export const managerRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
    icon:<MdDashboard />
  },

  {
    name: "Product",
    path: "../",
    element: <Home />,
    icon:<IoCubeOutline />
  },
  {
    name: "Create Product",
    path: "addflower",
    element: <AddFlower />,
    icon:<CiSquarePlus />
  },
  {
    name: "Manage Product",
    path: "allFlower",
    element: <AllFlower />,
    icon:<LiaCubesSolid />
  },
  {
    name: "Sales",
    path: "allSale",
    element: <AllSale />,
    icon:<BsCart4 />
  },
  {
    path: "allFlower/:id",
    element: <EditProduct />,
  },
  {
    path: "duplicate/:id",
    element: <DuplicateProduct />,
  },
 
  // {
  //   name: "Flower Management",
  //   children: [
  //     // {
  //     //   name: "Create Product",
  //     //   path: "addflower",
  //     //   element: <AddFlower />,
  //     // },
  //     // {
  //     //   name: "All Flower",
  //     //   path: "allFlower",
  //     //   element: <AllFlower />,
  //     // },
  //     // {
  //     //   name: "All Sale",
  //     //   path: "allSale",
  //     //   element: <AllSale />,
  //     // },
    
  //   ],
  // },
  {
    name: "Add Seller",
    path: "signup",
    element: <Register />,
    icon:<AiOutlineUserAdd />
  },
  {
    name: "Create Coupon",
    path: "createCoupon",
    element: <CreateCoupon />,
    icon:<IoCartOutline />
  },
];
