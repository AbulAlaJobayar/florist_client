import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
// import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";

const NavbarIcon = () => {
  return (
    <div className="flex justify-end items-center  gap-5 mb-8 ">
      <BsCartCheck className="size-5 text-[#333333]" />
      <IoIosNotificationsOutline className="size-6 text-[#333333]" />
      <div className="size-12 border border-[#fbc8a4] rounded-full"></div>
    </div>
  );
};

export default NavbarIcon;
