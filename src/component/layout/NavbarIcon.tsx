import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { Avatar, Button } from "antd";
import { TiUserOutline } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
// import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";

const NavbarIcon = () => {
  const user=useAppSelector(selectCurrentUser)
  const dispatch:any=useAppDispatch()
  const handleLogout = () => {
    dispatch(logout());

  };

  return (
    <div className="flex justify-center items-center  gap-5 pb-5">
    <BsCartCheck className="size-5 text-[#333333]"/>
    <IoIosNotificationsOutline className="size-6 text-[#333333]"/>
    <div className="size-12 border border-[#fbc8a4] rounded-full">
    {
      user?<img src={user.image} className="size-12  rounded-full" alt="" />: <Avatar size={45} className="mb-8" icon={<TiUserOutline />} />
    }
    </div>
    <div >
    {
      user?<Button onClick={handleLogout}>Logout</Button>: ''
    }
    </div>
  </div>
  );
};

export default NavbarIcon;
