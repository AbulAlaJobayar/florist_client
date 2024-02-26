import { FieldValues } from "react-hook-form";
import FMForm from "../../../component/form/FMForm";
import FMInput from "../../../component/form/FMInput";
import { Button} from "antd";
import { toast } from "sonner";

const CreateCoupon = () => {
        const defaultValue={
                code:"borno25",
                discountPercentage:25,   
        }
  const onSubmit = async(data: FieldValues) => {
    const toastId = toast.loading("Coupon Adding", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
     
     
      const couponInfo={
        coupon:data.coupon,
        discountPercentage:data.discountPercentage
    }
      console.log(couponInfo);
      // send data in server
      const res = (await productData(productInfo)) as any;
      if (res.error) {
        toast.error("Something went Wrong, Please try again", {
          id: toastId,
          duration: 3000,
          position: "top-center",
          style: { color: "red" },
        });
      } else {
        toast.success("Coupon Added successfully", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("something went wrong!", {
        id: toastId,
        duration: 2000,
        style: { color: "red" },
      });
    }


  };
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="flex flex-col max-w-md p-6  rounded-md sm:p-10  text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold textColor">Create coupon</h1>
        </div>
        <FMForm onSubmit={onSubmit} defaultValues={defaultValue}>
          <FMInput name="code" type="text" label="Promo Code" />
          <FMInput
            name="discountPercentage"
            type="number"
            label="Discount Percentage"
          />

          <Button
            htmlType="submit"
            style={{
              width: "100%",
              background: "#8ed1a3",
              color: "#333333",
              fontWeight: "500",
            }}
            className="pb-4 PFont mx-auto"
          >
            Generate Coupon{" "}
          </Button>
        </FMForm>
      </div>
    </div>
  );
};

export default CreateCoupon;
