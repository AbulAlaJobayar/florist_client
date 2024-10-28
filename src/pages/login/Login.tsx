import { Button } from "antd";
import FMForm from "../../component/form/FMForm";
import FMInput from "../../component/form/FMInput";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { verifyToken } from "../../utils/veryfyToken";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import image from "../../assets/undraw_login_re_4vu2.svg";
import CredentialsModal from "./CredentialsModal";
import { RiLoginCircleFill } from "react-icons/ri";

const loginSchemaValidation = z.object({
  email: z.string({ required_error: "This field is required" }).email(),
  password: z.string({ required_error: "This field is required" }),
});
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginData] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const uerInfo = {
      email: data.email,
      password: data.password,
    };
    const toastId = toast.loading("login User", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    setLoading(true);
    try {
      const res = await loginData(uerInfo).unwrap();
      const user = verifyToken(res.data) as TUser;
      dispatch(setUser({ user: user, token: res.data }));
      toast.success("login success", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      navigate("/");
    } catch (err) {
      toast.error("Invalid email or password. Please try again.", {
        id: toastId,
        duration: 2000,
        style: { color: "red" },
      });
      setLoading(false);
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen px-5 md:px-10 py-5 max-w-[1280px] mx-auto">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="w-full max-w-[380px] rounded shadow p-6 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black">
              Welcome Back
            </h1>
            <p className="text-sm mt-2">Sign in to access your account</p>
          </div>

          <FMForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginSchemaValidation)}
          >
            <div className="space-y-4">
              <FMInput type="email" name="email" label="Email Address" />
              <FMInput type="password" name="password" label="Password" />
            </div>

            <div className="mt-6">
              <Button
                type="text"
                htmlType="submit"
                className="w-full rounded-lg bg-[#387a62] text-white font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </FMForm>
          <div className="flex justify-center mt-8">
            <Button
              type="text"
              onClick={showModal}
              icon={<RiLoginCircleFill />}
              className="bg-[#387a62] text-white font-semibold hover:bg-[#7b5ac3] transition-all duration-200 w-[200px]"
            >
              Show Login Credentials
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2">
        <img src={image} alt="Login" className="w-full max-w-sm mx-auto" />
      </div>
      <CredentialsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Login;
