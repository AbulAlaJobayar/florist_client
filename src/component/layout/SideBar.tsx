import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
// import { SidebarItems } from "./SideBarItems";
import { NavLink } from "react-router-dom";

import { sidebarItemsGenerator } from "../../utils/sidebarGenerator";
import { managerRoutes } from "../../routers/manager.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { sellerRoutes } from "../../routers/seller.routes";
import React, { useState } from "react";

const userRole = {
  Manager: "manager",
  Seller: "seller",
};

const SideBar = () => {
  const user = useAppSelector(selectCurrentUser);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

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
      // #fdd05e
      collapsedWidth="0"
      style={{
        backgroundColor: "#51a687",
        color: "red",
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
        selectedKeys={[selectedKey]}
        defaultSelectedKeys={["5"]}
        onClick={handleMenuClick}
        items={sidebarItems?.map((item) => ({
          ...item,
          className:
            item.key === selectedKey
              ? "custom-active-item"
              : "custom-menu-item",
          icon:
            item.icon &&
            React.cloneElement(item.icon, { className: "custom-menu-icon" }),
        }))}
        style={{ backgroundColor: "#51a687" }}
      />
    </Sider>
  );
};

export default SideBar;
