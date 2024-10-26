import { Header } from "antd/es/layout/layout";
import NavbarIcon from "./NavbarIcon";
import NavBarSearch from "./NavBarSearch";

const DashboardNavbar = () => {
  return (
    <Header
      style={{
        backgroundColor: "#51a687",
        margin: "0",
        padding: "0",
        position: "sticky",
        top: "0",
        zIndex:"100"
      }}
    >
      <div className=" flex justify-between  mx-4 ">
        <NavBarSearch />
        <NavbarIcon />
      </div>
    </Header>
  );
};

export default DashboardNavbar;
