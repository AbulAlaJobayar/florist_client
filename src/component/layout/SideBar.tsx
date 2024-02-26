import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
// import { SidebarItems } from "./SideBarItems";
import { NavLink } from "react-router-dom";

import { sidebarItemsGenerator } from "../../utils/sidebarGenerator";
import { managerRoutes } from "../../routers/manager.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { sellerRoutes } from "../../routers/seller.routes";

const userRole = {
  Manager: "manager",
  Seller: "seller",
};

const SideBar = () => {
  const user = useAppSelector(selectCurrentUser);
  

  let sidebarItems;
 
  switch (user!.role) {
    case userRole.Manager:
      sidebarItems = sidebarItemsGenerator(managerRoutes, userRole.Manager);
      break;
    case userRole.Seller:
      sidebarItems = sidebarItemsGenerator(sellerRoutes, userRole.Seller);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        backgroundColor: "#8ed1a3",
        color: "#fdd05e",
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
      }}
    >
      <NavLink to="/">
        <div className="mx-auto text-center  flex justify-center items-center">
          <img
            src="https://i.ibb.co/nwWZjcV/Pngtree-mbe-plant-icon-rose-4047324.png"
            alt="logo"
            className="size-20"
          />
          <span className="textColor font-extrabold text-4xl -ml-5 AFont ">
            Florist
          </span>
        </div>
      </NavLink>

      <Menu
        mode="inline"
        defaultSelectedKeys={["5"]}
        items={sidebarItems}
        style={{ backgroundColor: "#8ed1a3" }}
        className="SFont active:text-red-800"
      />
    </Sider>
  );
};

export default SideBar;
