import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
// import { SidebarItems } from "./SideBarItems";
import { NavLink } from "react-router-dom";
// import { IoHomeOutline } from "react-icons/io5";
// import { HiOutlineViewGrid } from "react-icons/hi";
// import { MdAddShoppingCart } from "react-icons/md";
// import { TbShoppingBagEdit } from "react-icons/tb";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaRegUser } from "react-icons/fa6";
import { sidebarItemsGenerator } from "../../utils/sidebarGenerator";
import { managerRoutes } from "../../routers/manager.routes";

const SideBar = () => {


  // const SidebarItems = [
  //   {
  //     key: "home",
  //     icon: <IoHomeOutline />,
  //     label: (
  //       <NavLink to="/">
  //         <span className="SFont text-base">Home</span>
  //       </NavLink>
  //     ),
  //   },
  //   {
  //     key: "dashboard",
  //     icon: <HiOutlineViewGrid />,
  //     label: (
  //       <NavLink to="/dashboard">
  //         <span className="SFont text-base">Dashboard</span>
  //       </NavLink>
  //     ),
  //   },
  //   {
  //     key: "addProduct",
  //     icon: <MdAddShoppingCart />,
  //     label: (
  //       <NavLink to="/addProduct">
  //         <span className="SFont text-base">Add Product</span>
  //       </NavLink>
  //     ),
  //   },
  //   {
  //     key: "manageProduct",
  //     icon: <TbShoppingBagEdit />,
  //     label: (
  //       <NavLink to="/manageProduct">
  //         <span className="SFont text-base">Manage Product</span>
  //       </NavLink>
  //     ),
  //   },
  //   {
  //     key: "order",
  //     icon: <AiOutlineShoppingCart />,
  //     label: (
  //       <NavLink to="/order">
  //         <span className="SFont text-base">Order</span>
  //       </NavLink>
  //     ),
  //   },
  //   {
  //     key: "profile",
  //     icon: <FaRegUser />,
  //     label: (
  //       <NavLink to="/profile">
  //         {" "}
  //         <span className="SFont text-base">Profile</span>
  //       </NavLink>
  //     ),
  //   }
  // ];

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
        items={sidebarItemsGenerator(managerRoutes,'manager')}
        style={{ backgroundColor: "#8ed1a3" }}
        className="SFont active:text-red-800"
      />
    </Sider>
  );
};

export default SideBar;
