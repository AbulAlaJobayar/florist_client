import { Button } from "antd";
import FMForm from "../../component/form/FMForm";
import FMInput from "../../component/form/FMInput";
import { TbFidgetSpinner } from "react-icons/tb";
import {  useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { verifyToken } from "../../utils/veryfyToken";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Marquee from "react-fast-marquee";

const loginSchemaValidation = z.object({
  email: z.string({ required_error: "This field is required" }).email(),
  password: z.string({ required_error: "This field is required" }),
});
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginData] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data)
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
      // setLoading(false);
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#8ED1A3] via-green-400 to-green-600">
      <div className="flex flex-col max-w-md w-full px-8 py-10 rounded-xl shadow-lg bg-white">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8ED1A3] to-green-600">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to access your account
          </p>
        </div>

        <FMForm
          onSubmit={onSubmit}
          resolver={zodResolver(loginSchemaValidation)}
        >
          <div className="space-y-6">
            <FMInput type="email" name="email" label="Email Address" />
            <FMInput type="password" name="password" label="Password" />
          </div>

          <div className="mt-6">
            <Button
              type="text"
              htmlType="submit"
              className="w-full rounded-lg bg-gradient-to-r from-[#8ED1A3] via-green-400 to-green-600 text-white font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </FMForm>

        <div className="mt-6 text-center">
        <Marquee speed={20} style={{color:'red'}}>
        Manager: Email: abulalajobayar@gmail.com, Password: 12345 || Seller: Email:jobayar59@gmail.com, Password: 12345, || Coupon: borno25  ||-----------|| 
</Marquee>
          {/* <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#8ED1A3] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
// import { Button } from "antd";
// import FMForm from "../../component/form/FMForm";
// import FMInput from "../../component/form/FMInput";
// import { TbFidgetSpinner } from "react-icons/tb";
// import { Link, useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../redux/hooks";
// import { useLoginMutation } from "../../redux/features/auth/authApi";
// import { toast } from "sonner";
// import { FieldValues } from "react-hook-form";
// import { verifyToken } from "../../utils/verifyToken";
// import { TUser, setUser } from "../../redux/features/auth/authSlice";
// import { useState } from "react";
// import { z } from 'zod';
// import { zodResolver } from "@hookform/resolvers/zod";

// // Zod validation schema for login form
// const loginSchemaValidation = z.object({
//   email: z.string({ required_error: 'This field is required' }).email("Invalid email address"),
//   password: z.string({ required_error: 'This field is required' }),
// });

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const [loginData] = useLoginMutation();

//   const onSubmit = async (data: FieldValues) => {
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };

//     const toastId = toast.loading("Logging in...", {
//       position: "top-center",
//       style: { color: "#8ed1a3" },
//       duration: 2000,
//     });
//     setLoading(true);

//     try {
//       const res = await loginData(userInfo).unwrap();
//       const user = verifyToken(res.data) as TUser;
//       dispatch(setUser({ user, token: res.data }));

//       toast.success("Login successful", {
//         id: toastId,
//         duration: 2000,
//         position: "top-center",
//       });
//       navigate("/");
//     } catch (err) {
//       toast.error("Invalid email or password. Please try again.", {
//         id: toastId,
//         duration: 2000,
//         style: { color: "red" },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
//       <div className="flex flex-col max-w-md w-full px-8 py-10 rounded-xl shadow-lg bg-white">
//         <div className="mb-8 text-center">
//           <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
//             Welcome Back
//           </h1>
//           <p className="text-gray-500 text-sm mt-2">
//             Sign in to access your account
//           </p>
//         </div>

//         <FMForm
//           onSubmit={onSubmit}
//           resolver={zodResolver(loginSchemaValidation)}
//         >
//           <div className="space-y-6">
//             <FMInput type="email" name="email" label="Email Address" />
//             <FMInput type="password" name="password" label="Password" />
//           </div>

//           <div className="mt-6">
//             {" "}

//             <Button
//               type="text"
//               htmlType="submit"
//               className="w-full  rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
//             >
//               {loading ? (
//                 <TbFidgetSpinner className="m-auto animate-spin" size={24} />
//               ) : (
//                 "Continue"
//               )}
//             </Button>
//           </div>
//         </FMForm>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-purple-600 font-semibold hover:underline"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
