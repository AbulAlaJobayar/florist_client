import { IoCubeOutline } from "react-icons/io5";
import Home from "../pages/Home/Home";
import SellerDashboard from "../pages/seller/SellerDashboard";
import SellerSale from "../pages/seller/SellerSale";
import { MdDashboard } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import ProfilePage from "../pages/dashboard/profile/Profile";
import { FaRegUser } from "react-icons/fa";

export const sellerRoutes = [
  {
    name: "Home",
    path: "../",
    element: <Home />,
    icon: <IoCubeOutline />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SellerDashboard />,
    icon: <MdDashboard />,
  },
  {
    name: " Total Sale",
    path: "sale",
    element: <SellerSale />,
    icon: <BsCart4 />,
  },
  {
    name: " Profile",
    path: "profile",
    element: <ProfilePage />,
    icon: <FaRegUser />,
  },
];
