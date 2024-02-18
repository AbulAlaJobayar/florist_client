import { Header } from "antd/es/layout/layout";
import NavbarIcon from "./NavbarIcon";
import NavBarSearch from "./NavBarSearch";


const DashboardNavbar = () => {
  return (
    <Header style={{ backgroundColor: "#8ed1a3", margin: "0", padding: "0", position:"sticky" , top:"0"}}>
    <div className=" flex justify-between  mx-4 ">
      <NavBarSearch />
      <NavbarIcon />
    </div>
  </Header>
  );
};

export default DashboardNavbar;