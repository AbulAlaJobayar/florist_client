import { FieldValues } from "react-hook-form";
import FMForm from "../../../component/form/FMForm";
import FMInput from "../../../component/form/FMInput";
import { Button } from "antd";
import { toast } from "sonner";
import { useAddCouponMutation } from "../../../redux/features/coupon/coupon.api";

const CreateCoupon = () => {
  const defaultValue = {
    code: "borno25",
    discountPercentage: 25,
  };
  const [couponData] = useAddCouponMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Coupon Adding", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });

    try {
      const couponInfo = {
        code: data.code,
        discountPercentage: data.discountPercentage,
      };
      // send data in server
      const res = (await couponData(couponInfo)) as any;
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
    <div className="">
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
  );
};

export default CreateCoupon;
