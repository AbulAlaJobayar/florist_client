import FMForm from "../../component/form/FMForm";
import { Controller, FieldValues } from "react-hook-form";
import FMInput from "../../component/form/FMInput";
import { Button, Form, Input } from "antd";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";
import { toast } from "sonner";
import { imageHosting } from "../../utils/imageHosting";
import { useSignupMutation } from "../../redux/features/signupApi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  name: z.string({ required_error: "This field is required" }),
   image: z.instanceof(File),
  email: z.string({ required_error: "This field is required" }).email(),
  password: z.string({ required_error: "This field is required" }),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [register, { error }] = useSignupMutation();
  console.log(error);
  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    const toastId = toast.loading("login User", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
      const image = data?.image;
      console.log(data.image)
      // hosting image in imgbb
      const imageUrl = await imageHosting(image);
      const userInfo = {
        name: data.name,
        image: imageUrl,
        email: data.email,
        password: data.password,
      };
      console.log(userInfo);
      // send data in server
      const res = (await register(userInfo)) as any;
      if (res.error) {
        toast.error("Something went Wrong, Please try again", {
          id: toastId,
          duration: 3000,
          position: "top-center",
          style: { color: "red" },
        });
        setLoading(false);
      } else {
        toast.success("Registration Success", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error("something went wrong. please change your email", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="flex flex-col max-w-md p-6  rounded-md sm:p-10  text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold textColor">Add Seller</h1>
        </div>
        <FMForm onSubmit={onSubmit} resolver={zodResolver(signupSchema)}>
          <FMInput type="text" name="name" label="Name"></FMInput>
          <Controller
            name="image"
            render={({
              field: { onChange, value, ...field },
              fieldState: { error },
            }) => (
              <Form.Item label={"Image"}>
                <Input
                  type="file"
                  value={value?.fileName}
                  {...field}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
                {error && (
                  <small style={{ color: "red" }}>{error.message}</small>
                )}
              </Form.Item>
            )}
          />

          <FMInput type="email" name="email" label="Email address" />
          <FMInput
            type={"password"}
            name="password"
            label="Password"
          />
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

       
      </div>
    </div>
  );
};

export default Register;
