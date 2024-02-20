// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import FMForm from "../../component/form/FMForm";
import { FieldValues } from "react-hook-form";
import FMInput from "../../component/form/FMInput";
import { Button } from "antd";
import { TbFidgetSpinner } from "react-icons/tb";

const Register = () => {
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   const toastId = toast.loading("login User", {
  //     position: "top-center",
  //     style: {
  //       color: "#8ed1a3",
  //     },
  //     duration: 2000,
  //   });
  //   // Image Upload
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   const image = event.target.image.files[0];

  //   try {
  //     const imageUrl = await imageHosting(image);
  //     console.log(name, email, password, imageUrl);
  //     const userInfo = {
  //       name: name,
  //       image: imageUrl,
  //       email: email,
  //       password: password,
  //     };

  //     data(userInfo);
  //     toast.success("registration success", {
  //       id: toastId,
  //       duration: 2000,
  //       position: "top-center",
  //     });
  //     setLoading(false);
  //     navigate("/login");
  //   } catch (error) {
  //     toast.error("something went wrong. please change your email", {
  //       id: toastId,
  //       duration: 2000,
  //     });
  //   }
  // };
  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };
  const loading=false
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold textColor">Sign Up</h1>
          <p className="text-sm  textColor">Welcome to Florist</p>
        </div>
        <FMForm onSubmit={onsubmit}>
          <div className="space-y-4">
              <FMInput type="text" name="name" label="Name"></FMInput>
              <FMInput type="file" name="image"  label="Select Image"/>
              <FMInput type="email" name="email" label="Email address"/>
              <FMInput type="password" name="password" label="Password"/>
          </div>
          <div>
            <Button
            htmlType="submit"
              type="text"
              className=" w-full rounded-md font-semibold bg-slate-200"
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
