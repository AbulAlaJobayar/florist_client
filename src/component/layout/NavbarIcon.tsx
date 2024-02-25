import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { Avatar } from "antd";
import { TiUserOutline } from "react-icons/ti";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
// import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";

const NavbarIcon = () => {
  const user=useAppSelector(selectCurrentUser)
  return (
    <div className="flex justify-center items-center  gap-5 pb-5">
    <BsCartCheck className="size-5 text-[#333333]"/>
    <IoIosNotificationsOutline className="size-6 text-[#333333]"/>
    <div className="size-12 border border-[#fbc8a4] rounded-full">
    {
      user?<img src={user.image} className="size-12  rounded-full" alt="" />: <Avatar size={45} className="mb-8" icon={<TiUserOutline />} />
    }
    </div>
  </div>
  );
};

export default NavbarIcon;
