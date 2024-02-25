import { Controller, FieldValues } from "react-hook-form";
import FMForm from "../../component/form/FMForm";
import FMInput from "../../component/form/FMInput";
import { Button, Col, Form, Input, Row } from "antd";
import FMDatepicker from "../../component/form/FMDatepicker";
import PMSelect from "../../component/form/FMSelect";
import {
  flowerCategoryOptions,
  flowerColorOptions,
  flowerFragranceOptions,
  flowerSizeOptions,
} from "../../constant/golbal";
import { TbFidgetSpinner } from "react-icons/tb";
import { useAddProductMutation } from "../../redux/features/product/product.api";
import { useState } from "react";
import { toast } from "sonner";
import { imageHosting } from "../../utils/imageHosting";

const AddFlower = () => {
  const [loading, setLoading] = useState(false);
  const [productData] = useAddProductMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setLoading(true);
    const toastId = toast.loading("Product Adding", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
      const image = data?.image;
      console.log(image);
      // hosting image in imgbb
      const imageUrl = await imageHosting(image);
      console.log(imageUrl);
      const productInfo = {
        name: data.name,
        image: imageUrl,
        price: Number(data.price),
        quantity: Number(data.quantity),
        bloomDate: data.bloomDate,
        color: data.color,
        category: data.category,
        size: data.size,
        fragrance: data.fragrance,
      };
      console.log(productInfo);
      // send data in server
      const res = (await productData(productInfo)) as any;
      if (res.error) {
        toast.error("Something went Wrong, Please try again", {
          id: toastId,
          duration: 3000,
          position: "top-center",
          style: { color: "red" },
        });
        setLoading(false);
      } else {
        toast.success("Product Added successfully", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error("something went wrong!", {
        id: toastId,
        duration: 2000,
        style: { color: "red" },
      });
      setLoading(false);
    }
  };

  return (
    <div className=" w-4/5 mx-auto my-auto">
      <div className=" text-center font-semibold  my-2">
        <h1 className="capitalize text-textColor text-2xl">Add your Product</h1>
      </div>
      <div className="mt-5">
        <FMForm
          onSubmit={onSubmit}
          //  resolver={zodResolver(productSchemaValidation)}
        >
          <Row gutter={12}>
            <Col span={12}>
              <FMInput type="text" name="name" label="Flower Name" />
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <FMInput type="number" name="price" label="Flower Price" />
            </Col>
            <Col span={12}>
              <FMInput type="number" name="quantity" label="Flower Quantity" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <FMDatepicker name="bloomDate" label="Bloom Date" />
            </Col>
            <Col span={12}>
              <PMSelect
                name="color"
                label="Flower Color"
                options={flowerColorOptions}
              />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <PMSelect
                name="category"
                label="Flower Category"
                options={flowerCategoryOptions}
              />
            </Col>
            <Col span={12}>
              <PMSelect
                name="size"
                label="Flower Size"
                options={flowerSizeOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <PMSelect
                name="fragrance"
                label="Flower Fragrance"
                options={flowerFragranceOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button
                htmlType="submit"
                style={{ width: "100%", marginBottom: "20px" }}
                //       className="bg-primaryy w-full rounded-md  text-white mt-5 text-base text-textColor font-semibold text-center "
              >
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )}
              </Button>

              {/* <Button htmlType="submit" style={{width:'100%',marginBottom:'20px'}}>submit</Button> */}
            </Col>
          </Row>
        </FMForm>
      </div>
    </div>
  );
};

export default AddFlower;
