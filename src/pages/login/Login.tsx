// import { FormEvent, useState } from "react";
// import { TbFidgetSpinner } from "react-icons/tb";
// import { Link, useNavigate } from "react-router-dom";
// import { useLoginMutation } from "../../redux/fetchurs/auth/authApi";
// import { toast } from "sonner";
// import { verifyToken } from "../../utils/veryfyToken";
// import { useAppDispatch } from "../../redux/hooks";
// import { setUser } from "../../redux/fetchurs/auth/authSlice";

import { Button } from "antd";
import FMForm from "../../component/form/FMForm";
import FMInput from "../../component/form/FMInput";
import { FieldValues } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const loginInfo = {
  //   email: email,
  //   password: password,
  // };
  // const [data]: any = useLoginMutation();
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   const toastId = toast.loading("login User", {
  //     position: "top-center",
  //     style: {
  //       color: "#8ed1a3",
  //     },
  //     duration: 2000,
  //   });
  //   setLoading(true);
  //   try {
  //     const res: any = await data(loginInfo);
  //     console.log(res.data.data);
  //     const user = verifyToken(res.data.data);
  //     console.log(user);
  //     dispatch(setUser({ user: user, token: res.data.data }));
  //     toast.success("login success", {
  //       id: toastId,
  //       duration: 2000,
  //       position: "top-center",
  //     });
  //     setLoading(false);
  //     navigate("/");
  //   } catch (err) {
  //     toast.error(
  //       "something went wrong. please check your Email and Password",
  //       { id: toastId, duration: 2000 }

  //     );
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-backgroundColor text-textColor">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-textColor">
            Sign in to access your account
          </p>
        </div>
        <FMForm onSubmit={onSubmit}>
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
