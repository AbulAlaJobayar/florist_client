import { Button } from "antd";
import FMForm from "../../component/form/FMForm";
import FMInput from "../../component/form/FMInput";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { verifyToken } from "../../utils/veryfyToken";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
 

const loginSchemaValidation=z.object({
  email:z.string({required_error:'This field is required'}).email(),
  password:z.string({required_error:'This field is required'}),
})
const Login = () => {
const [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginData] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data.email, data.password)
    const uerInfo={
      email: data.email,
      password: data.password,
    }
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
      console.log(res);
      const user = verifyToken(res.data)as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data }));
      toast.success("login success", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      // setLoading(false);
      navigate("/");
    } catch (err) {
      toast.error(
        "something went wrong. please check your Email and Password",
        { id: toastId, duration: 2000 ,style:{color:'red'}}
      );
      
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-backgroundColor text-textColor">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-textColor">
            Sign in to access your account
          </p>
        </div>
        <FMForm onSubmit={onSubmit} resolver={zodResolver(loginSchemaValidation)}>
          <div className="space-y-4">
            <FMInput
              type={"email"}
              name={"email"}
              label=" Email address"
            ></FMInput>
            <FMInput
              type={"password"}
              name={"password"}
              label="Password"
            ></FMInput>
          </div>

          <div>
            <Button
              type="text"
              htmlType="submit"
              className="w-full mx-auto  PFont font-semibold "
              // className="bg-primary text-textColor w-full rounded-md py-3 primaryyFont "
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </FMForm>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
